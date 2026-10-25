'use client';

import { useEffect, useRef } from 'react';
import { ScrollProgressionOptions } from './types';

interface UseScrollProgressionProps {
  containerRef: React.RefObject<HTMLElement | null>;
  stageCount: number;
  activeStage: number;
  onSelectStage: (stage: number, shouldAutoFrame?: boolean) => void;
  options?: ScrollProgressionOptions;
  isManualOverrideActive: () => boolean;
}

/**
 * useScrollProgression — Non-blocking, passive scroll-driven stage synchronizer.
 *
 * Supports both:
 * 1. Pinned sticky scroll tracks (where a sticky child pins while user scrolls through the track)
 * 2. Unpinned viewport reading zone traversals
 *
 * Guarantees:
 * - ZERO e.preventDefault(): native page scrolling is NEVER blocked or trapped
 * - 100% smooth, continuous 60/120fps via requestAnimationFrame
 * - Works regardless of which item is currently selected
 * - Safe manual override: user clicks or arrow navigation are preserved until deliberate scrolling resumes
 */
export function useScrollProgression({
  containerRef,
  stageCount,
  activeStage,
  onSelectStage,
  options = {},
  isManualOverrideActive,
}: UseScrollProgressionProps) {
  const {
    enabled = true,
    startOffsetRatio = 0.65,
    endOffsetRatio = 0.25,
  } = options;

  const activeStageRef = useRef(activeStage);
  activeStageRef.current = activeStage;

  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled || stageCount <= 1) return;

    const handleScroll = () => {
      if (rafIdRef.current !== null) return;

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;

        if (isManualOverrideActive()) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const header = document.querySelector('header');
        const headerReach = header ? header.getBoundingClientRect().bottom : 88;
        const stickyTopThreshold = headerReach + 24;

        // Check if container acts as a pinned scroll track
        const stickyChild = container.firstElementChild as HTMLElement | null;
        const isPinnedTrack = rect.height > viewportHeight * 1.2 && stickyChild !== null;

        let rawProgress: number;

        if (isPinnedTrack && stickyChild) {
          const stickyHeight = stickyChild.getBoundingClientRect().height;
          const pinDistance = rect.height - stickyHeight;
          if (pinDistance > 100) {
            // Pinned track: progress is 0.0 when top reaches stickyTopThreshold,
            // and 1.0 when bottom reaches stickyTopThreshold + stickyHeight
            const traveled = stickyTopThreshold - rect.top;
            rawProgress = traveled / pinDistance;
          } else {
            const startOffset = viewportHeight * startOffsetRatio;
            const endOffset = viewportHeight * endOffsetRatio;
            const travelDistance = rect.height + (startOffset - endOffset);
            rawProgress = travelDistance > 0 ? (startOffset - rect.top) / travelDistance : 0;
          }
        } else {
          // Standard viewport reading zone traversal
          const startOffset = viewportHeight * startOffsetRatio;
          const endOffset = viewportHeight * endOffsetRatio;
          const travelDistance = rect.height + (startOffset - endOffset);
          rawProgress = travelDistance > 0 ? (startOffset - rect.top) / travelDistance : 0;
        }

        // Outside active reading traversal zone: do not force state changes
        if (rawProgress < 0 || rawProgress > 1) {
          return;
        }

        const clampedProgress = Math.max(0, Math.min(0.9999, rawProgress));
        const targetStage = Math.floor(clampedProgress * stageCount);

        if (
          targetStage !== activeStageRef.current &&
          targetStage >= 0 &&
          targetStage < stageCount
        ) {
          onSelectStage(targetStage, false);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [
    containerRef,
    stageCount,
    enabled,
    startOffsetRatio,
    endOffsetRatio,
    onSelectStage,
    isManualOverrideActive,
  ]);
}
