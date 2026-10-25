'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { ArrowUpIcon } from '@/core/icons';
import styles from './scroll-to-top.module.css';

/**
 * Universal Tap-to-Scroll-to-Top Component (Apex Return)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§3.2, §24)
 *
 * Capabilities:
 * - Appears smoothly across all screens when user scrolls past 320px.
 * - Smoothly scrolls the window to the apex (top: 0).
 * - Smoothly scrolls any internally-scrolled footer element back to top: 0.
 * - Minimum 44x44px touch target on mobile for ergonomics.
 * - Obsidian glass surface with Process Cyan icon and Signal Amber illumination.
 * - Accessible keyboard trigger and screen reader announcement.
 */
export function ScrollToTop(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          setIsVisible(scrollY > 320);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    // 1. Scroll window to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // 2. Also reset any stationary footer internal scroll
    const footer = document.querySelector('footer');
    if (footer && footer.scrollTop > 0) {
      footer.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // 3. Move keyboard focus to main content / skip link for accessibility
    const main = document.getElementById('main-content');
    if (main) {
      main.focus({ preventScroll: true });
    }
  }, []);

  return (
    <button
      type="button"
      className={`${styles.button} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Return to origin / Scroll to top"
    >
      <span className={styles.buttonInner}>
        <ArrowUpIcon size={16} className={styles.icon} />
        <span className={styles.label}>TOP</span>
      </span>
      <span className={styles.cornerBracket} aria-hidden="true" />
    </button>
  );
}
