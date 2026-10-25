'use client';

import { useEffect, useRef } from 'react';
import { GestureOrchestrationOptions } from './types';

/**
 * useGestureOrchestration — Passive gesture helper with ZERO scroll-trapping.
 *
 * Guarantees:
 * - 100% passive listeners ({ passive: true })
 * - ZERO e.preventDefault(): native page scrolling is NEVER blocked or hijacked
 * - Unimpeded vertical scroll in both directions regardless of active stage
 * - Horizontal swipe passthrough for native touch-friendly tracks
 */
export function useGestureOrchestration(options: GestureOrchestrationOptions) {
  const {
    containerRef,
    activeStage,
    stageCount,
    isLocked,
    onSelectStage,
    touchThreshold = 40,
  } = options;

  const activeStageRef = useRef(activeStage);
  activeStageRef.current = activeStage;

  const isLockedRef = useRef(isLocked);
  isLockedRef.current = isLocked;

  const touchStartYRef = useRef(0);
  const touchStartXRef = useRef(0);

  // Passive touch gesture support strictly scoped to the container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      touchStartYRef.current = e.touches[0].clientY;
      touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length !== 1) return;
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
      const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;

      // If predominantly horizontal, allow native horizontal track swipe
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > touchThreshold) {
        if (isLockedRef.current) return;
        const currentStage = activeStageRef.current;
        if (deltaX > 0 && currentStage < stageCount - 1) {
          onSelectStage(currentStage + 1, false);
        } else if (deltaX < 0 && currentStage > 0) {
          onSelectStage(currentStage - 1, false);
        }
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [containerRef, onSelectStage, stageCount, touchThreshold]);
}
