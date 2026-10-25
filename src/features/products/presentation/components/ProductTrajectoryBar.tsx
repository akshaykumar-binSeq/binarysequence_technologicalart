'use client';

import React from 'react';
import Link from 'next/link';
import styles from './product-trajectory-bar.module.css';

interface TrajectoryTarget {
  id: string;
  name: string;
}

interface ProductTrajectoryBarProps {
  previous?: TrajectoryTarget;
  next?: TrajectoryTarget;
}

export function ProductTrajectoryBar({
  previous,
  next,
}: ProductTrajectoryBarProps): React.JSX.Element {
  return (
    <nav className={styles.trajectoryNav} aria-label="Product sequence pagination">
      <div className={styles.trajectoryDivider} aria-hidden="true" />

      <div className={styles.trajectoryRow}>
        {/* Previous Link */}
        <div className={styles.prevCol}>
          {previous ? (
            <Link
              href={`/products/${previous.id}`}
              className={styles.trajectoryBtn}
              aria-label={`Previous product: ${previous.name}`}
            >
              <span className={styles.stepLabel}>← Previous</span>
              <span className={styles.productTitle}>{previous.name}</span>
            </Link>
          ) : (
            <div className={styles.emptySlot} aria-hidden="true" />
          )}
        </div>

        {/* Next Link */}
        <div className={styles.nextCol}>
          {next ? (
            <Link
              href={`/products/${next.id}`}
              className={`${styles.trajectoryBtn} ${styles.btnRight}`}
              aria-label={`Next product: ${next.name}`}
            >
              <span className={styles.stepLabel}>Next →</span>
              <span className={styles.productTitle}>{next.name}</span>
            </Link>
          ) : (
            <div className={styles.emptySlot} aria-hidden="true" />
          )}
        </div>
      </div>
    </nav>
  );
}
