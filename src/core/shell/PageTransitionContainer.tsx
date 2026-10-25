'use client';

/**
 * PageTransitionContainer — Fluid Kinetic Content Transition & Spatial Orientation Wrapper
 *
 * Implements:
 * - Fluid content change animation across routes without full-page reloads
 * - Kinetic directional entrance animations (forward traversal vs. return traversal)
 * - Motion graphics transit beam communicating directional flow across the navigation axis
 * - Pure motion graphics — ZERO text clutter or artificial banners
 * - Full reduced-motion compliance
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§24, §25)
 * Architectural Boundary: src/core/shell/ (Shared Application Shell)
 */

import React from 'react';
import { useNavigationProvenance } from '@/core/interaction';
import styles from './page-transition.module.css';

interface PageTransitionContainerProps {
  children: React.ReactNode;
}

export function PageTransitionContainer({ children }: PageTransitionContainerProps) {
  const { currentPath, direction } = useNavigationProvenance();

  return (
    <div
      key={currentPath}
      className={`${styles.pageTransitionWrapper} ${
        direction === 'forward'
          ? styles.transitionForward
          : direction === 'backward'
          ? styles.transitionBackward
          : styles.transitionInitial
      }`}
      data-direction={direction}
    >
      {/* Motion Graphics Directional Transit Beam */}
      {direction === 'forward' && (
        <div className={styles.motionBeamTrack} aria-hidden="true">
          <div className={styles.motionBeamForward} />
        </div>
      )}

      {direction === 'backward' && (
        <div className={styles.motionBeamTrack} aria-hidden="true">
          <div className={styles.motionBeamBackward} />
        </div>
      )}

      {/* Main Page Content */}
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
}
