'use client';

/**
 * useSmoothAnchor — Reusable Same-Page Navigation & Smooth Scrolling Utility
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§3.2, §24, §25)
 * Authority: Level 4 DDD Architectural Guidelines (§5.4)
 * Architectural Boundary: src/core/interaction/ (Shared Infrastructure)
 *
 * Guarantees:
 * - Smooth, continuous scrolling to target element accounting for sticky header clearance
 * - Preserves native URL hash in browser address bar (history.pushState)
 * - Zero double-scrolling or abrupt fragment jumps
 * - Respects prefers-reduced-motion (scrolls instantly without motion if preferred)
 * - WCAG AA accessibility: shifts programmatic focus to target section for screen readers
 */


import { useCallback } from 'react';

export interface SmoothScrollOptions {
  /** Target clearance below sticky header in px. If omitted, reads from CSS --scroll-anchor-clearance */
  offsetPx?: number;
  /** Custom scroll behavior override */
  behavior?: ScrollBehavior;
  /** Whether to push the hash to browser history (default: true) */
  updateHistory?: boolean;
}

/**
 * Calculates current sticky header bottom reach dynamically
 */
export function getHeaderClearance(): number {
  if (typeof window === 'undefined' || typeof document === 'undefined') return 96;

  // 1. Try reading the authoritative CSS variable --scroll-anchor-clearance
  const rootStyle = getComputedStyle(document.documentElement);
  const clearanceVar = rootStyle.getPropertyValue('--scroll-anchor-clearance').trim();
  if (clearanceVar) {
    const parsed = parseFloat(clearanceVar);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }

  // 2. Measure actual header bottom rect
  const header = document.querySelector('header');
  if (header) {
    const rect = header.getBoundingClientRect();
    return Math.max(72, rect.bottom + 24);
  }

  return 96;
}

/**
 * Programmatically scrolls to an element by ID with sticky header clearance
 */
export function scrollToTargetId(targetId: string, options: SmoothScrollOptions = {}): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;

  const cleanId = targetId.replace(/^#/, '');
  const targetElement = document.getElementById(cleanId);
  if (!targetElement) return false;

  const isReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    document.documentElement.getAttribute('data-motion') !== 'standard';

  const scrollBehavior: ScrollBehavior = options.behavior || (isReducedMotion ? 'auto' : 'smooth');
  const clearance = options.offsetPx ?? getHeaderClearance();

  const targetRect = targetElement.getBoundingClientRect();
  const targetTop = window.scrollY + targetRect.top - clearance;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: scrollBehavior,
  });

  if (options.updateHistory !== false) {
    try {
      window.history.pushState(null, '', `#${cleanId}`);
    } catch {
      // Ignore cross-origin history errors in edge runtimes
    }
  }

  // Set tabindex if needed for accessibility focus shift
  if (!targetElement.hasAttribute('tabindex')) {
    targetElement.setAttribute('tabindex', '-1');
  }
  targetElement.focus({ preventScroll: true });

  return true;
}

/**
 * React hook returning an anchor click handler for smooth scrolling
 */
export function useSmoothAnchor() {
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, options?: SmoothScrollOptions) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        scrollToTargetId(targetId, options);
      }
    },
    []
  );

  return {
    handleAnchorClick,
    scrollToTargetId,
  };
}
