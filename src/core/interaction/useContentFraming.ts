'use client';

import { useCallback } from 'react';
import { ContentFramingOptions } from './types';

/**
 * useContentFraming — Reusable intelligent content auto-framing hook.
 *
 * Ensures that reading content is brought into a comfortable reading position below
 * the header while avoiding unnecessary document scrolling when already readable.
 *
 * Respects:
 * - Dynamic measured sticky-header bottom reach
 * - Reduced motion preferences (instant vs smooth)
 * - Minimum displacement threshold (24px)
 */
export function useContentFraming(options: ContentFramingOptions) {
  const {
    containerRef,
    targetIdResolver,
    headerSelector = 'header',
    clearanceDesktop = 24,
    clearanceMobile = 16,
    thresholdDiff = 24,
  } = options;

  const frameContentIntelligently = useCallback(
    (targetStage: number) => {
      if (typeof window === 'undefined') return;
      const container = containerRef.current;
      if (!container) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const header = document.querySelector(headerSelector);
      const headerReach = header ? header.getBoundingClientRect().bottom : 88;

      const containerRect = container.getBoundingClientRect();
      let targetRect = containerRect;

      if (targetIdResolver) {
        const targetId = targetIdResolver(targetStage);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetRect = targetEl.getBoundingClientRect();
        }
      }

      // Check if the reading content is already comfortably positioned:
      // 1. Target top is below header with at least 12px clearance
      // 2. Target top is within the upper 45% of the viewport (not buried or scrolled past)
      // 3. Essential reading text has visible room above viewport bottom
      const isAlreadyReadable =
        targetRect.top >= headerReach + 12 &&
        targetRect.top <= window.innerHeight * 0.45 &&
        targetRect.bottom >= headerReach + 180;

      if (isAlreadyReadable) {
        // Content is already comfortably framed — avoid redundant scroll
        return;
      }

      const isDesktop = window.innerWidth >= 1025;
      const clearance = isDesktop ? clearanceDesktop : clearanceMobile;
      const targetTop = headerReach + clearance;
      const scrollDiff = containerRect.top - targetTop;

      // Only scroll if displacement exceeds threshold to prevent micro-jitter
      if (Math.abs(scrollDiff) > thresholdDiff) {
        const targetScrollY = Math.max(0, window.scrollY + scrollDiff);
        window.scrollTo({
          top: targetScrollY,
          behavior: prefersReducedMotion ? 'instant' : 'smooth',
        });
      }
    },
    [containerRef, targetIdResolver, headerSelector, clearanceDesktop, clearanceMobile, thresholdDiff]
  );

  return { frameContentIntelligently };
}
