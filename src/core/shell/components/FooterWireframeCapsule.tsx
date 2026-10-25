'use client';

import React from 'react';
import styles from './footer-wireframe-capsule.module.css';

export function FooterWireframeCapsule(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <aside
      className={styles.capsuleContainer}
      aria-label="Architectural wireframe insignia and copyright"
    >
      <div className={styles.wireframeSurface}>
        <svg
          viewBox="0 0 160 190"
          className={styles.svgWireframe}
          aria-hidden="true"
        >
          {/* Outer Bounding Pill */}
          <rect
            x="10"
            y="8"
            width="140"
            height="174"
            rx="50"
            className={styles.wireframePath}
            strokeDasharray="4 4"
          />

          {/* Central Vertical and Horizontal Geodesic Axis */}
          <line x1="80" y1="8" x2="80" y2="182" className={styles.wireframePath} />
          <line x1="10" y1="95" x2="150" y2="95" className={styles.wireframeEquator} />

          {/* Rotating Planetary Geodesic Longitudes */}
          <g className={styles.rotatingGroup}>
            <ellipse cx="80" cy="95" rx="30" ry="76" className={styles.wireframePath} />
            <ellipse cx="80" cy="95" rx="55" ry="76" className={styles.wireframePath} />
            <ellipse cx="80" cy="95" rx="15" ry="76" className={styles.wireframePath} />
          </g>

          {/* Latitudinal Rings */}
          <ellipse cx="80" cy="55" rx="46" ry="11" className={styles.wireframePath} />
          <ellipse cx="80" cy="135" rx="46" ry="11" className={styles.wireframePath} />
        </svg>
      </div>

      <div className={styles.verticalCopyright} aria-hidden="true">
        © {currentYear} BINARY SEQUENCE // ALL RIGHTS RESERVED
      </div>
    </aside>
  );
}
