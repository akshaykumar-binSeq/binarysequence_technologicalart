'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { ContentProgressionConfig, ContentProgressionReturn } from './types';
import { useContentFraming } from './useContentFraming';
import { useGestureOrchestration } from './useGestureOrchestration';
import { useScrollProgression } from './useScrollProgression';

/**
 * useContentProgression — Master Hook for Content-Aware Stage Navigation.
 *
 * Coordinates:
 * - Active stage state (0 .. stageCount - 1)
 * - Continuous, non-blocking scroll-driven progression across the viewport reading zone
 * - Safe manual selection override for clicks & keyboard navigation
 * - Settling debounce lock for transition stabilization
 * - Intelligent auto-framing under sticky header
 * - Horizontal track scroll synchronization (optional)
 * - Accessible keyboard navigation (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Home, End)
 *
 * Guarantees:
 * - ZERO scroll traps: window scrolling is NEVER blocked or hijacked
 * - Works equally well whether on first, middle, or last item
 */
export function useContentProgression(config: ContentProgressionConfig): ContentProgressionReturn {
  const {
    stageCount,
    initialStage = 0,
    onStageChange,
    lockDurationMs = 400,
    framing,
    gestures = { enabled: true },
    scrollProgression = { enabled: true },
    containerRef = { current: null },
    trackRef,
  } = config;

  const [activeStage, setActiveStage] = useState<number>(initialStage);
  const activeStageRef = useRef<number>(initialStage);
  activeStageRef.current = activeStage;

  const isGestureLockedRef = useRef(false);
  const lockTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Manual override state for explicit user clicks and keyboard navigation
  const isManualOverrideRef = useRef(false);
  const manualScrollYRef = useRef(0);
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setManualOverride = useCallback(() => {
    isManualOverrideRef.current = true;
    manualScrollYRef.current = typeof window !== 'undefined' ? window.scrollY : 0;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualOverrideRef.current = false;
    }, scrollProgression?.manualOverrideTimeoutMs ?? 1200);
  }, [scrollProgression?.manualOverrideTimeoutMs]);

  const isManualOverrideActive = useCallback(() => {
    if (!isManualOverrideRef.current) return false;
    if (isProgrammaticScrollRef.current) {
      if (typeof window !== 'undefined') {
        manualScrollYRef.current = window.scrollY;
      }
      return true;
    }
    const threshold = scrollProgression?.manualScrollThresholdPx ?? 80;
    if (
      typeof window !== 'undefined' &&
      Math.abs(window.scrollY - manualScrollYRef.current) > threshold
    ) {
      isManualOverrideRef.current = false;
      return false;
    }
    return true;
  }, [scrollProgression?.manualScrollThresholdPx]);

  // Initialize framing hook
  const { frameContentIntelligently } = useContentFraming({
    containerRef,
    ...framing,
  });

  // Master stage selection function for explicit user interactions
  const handleStageSelect = useCallback(
    (idx: number, shouldAutoFrame = false) => {
      const clampedIdx = Math.max(0, Math.min(stageCount - 1, idx));
      setActiveStage(clampedIdx);
      activeStageRef.current = clampedIdx;

      setManualOverride();

      if (onStageChange) {
        onStageChange(clampedIdx);
      }

      // Settling debounce lock
      isGestureLockedRef.current = true;
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
      lockTimeoutRef.current = setTimeout(() => {
        isGestureLockedRef.current = false;
      }, lockDurationMs);

      // Scroll horizontal track if present
      if (trackRef?.current) {
        isProgrammaticScrollRef.current = true;
        const prefersReducedMotion =
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        trackRef.current.scrollTo({
          left: clampedIdx * trackRef.current.clientWidth,
          behavior: prefersReducedMotion ? 'instant' : 'smooth',
        });

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isProgrammaticScrollRef.current = false;
        }, lockDurationMs);
      }

      if (shouldAutoFrame) {
        isProgrammaticScrollRef.current = true;
        frameContentIntelligently(clampedIdx);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isProgrammaticScrollRef.current = false;
          if (typeof window !== 'undefined') {
            manualScrollYRef.current = window.scrollY;
          }
        }, lockDurationMs + 200);
      }
    },
    [stageCount, onStageChange, lockDurationMs, trackRef, frameContentIntelligently, setManualOverride]
  );

  const handlePrev = useCallback(() => {
    handleStageSelect(activeStageRef.current - 1, false);
  }, [handleStageSelect]);

  const handleNext = useCallback(() => {
    handleStageSelect(activeStageRef.current + 1, false);
  }, [handleStageSelect]);

  // Keyboard navigation
  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent, currentIndex: number) => {
      let targetIndex = -1;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        targetIndex = Math.max(0, currentIndex - 1);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        targetIndex = Math.min(stageCount - 1, currentIndex + 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetIndex = stageCount - 1;
      }

      if (targetIndex >= 0 && targetIndex !== currentIndex) {
        handleStageSelect(targetIndex, false);
      }
    },
    [stageCount, handleStageSelect]
  );

  // Wire passive scroll progression
  useScrollProgression({
    containerRef,
    stageCount,
    activeStage,
    onSelectStage: (idx) => {
      const clampedIdx = Math.max(0, Math.min(stageCount - 1, idx));
      setActiveStage(clampedIdx);
      activeStageRef.current = clampedIdx;

      if (onStageChange) {
        onStageChange(clampedIdx);
      }

      // Sync horizontal track if present
      if (trackRef?.current) {
        const prefersReducedMotion =
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        trackRef.current.scrollTo({
          left: clampedIdx * trackRef.current.clientWidth,
          behavior: prefersReducedMotion ? 'instant' : 'smooth',
        });
      }
    },
    options: scrollProgression,
    isManualOverrideActive,
  });

  // Wire passive gesture orchestration if enabled
  useGestureOrchestration({
    containerRef,
    activeStage,
    stageCount,
    isLocked: isGestureLockedRef.current,
    onSelectStage: handleStageSelect,
    touchThreshold: gestures.touchThreshold,
  });

  // Track resize sync
  useEffect(() => {
    if (!trackRef?.current) return;
    const handleResize = () => {
      if (trackRef.current) {
        trackRef.current.scrollTo({
          left: activeStageRef.current * trackRef.current.clientWidth,
          behavior: 'instant',
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [trackRef]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, []);

  return {
    activeStage,
    setActiveStage,
    isGestureLocked: isGestureLockedRef.current,
    handleStageSelect,
    handlePrev,
    handleNext,
    handleTabKeyDown,
    frameContentIntelligently,
  };
}
