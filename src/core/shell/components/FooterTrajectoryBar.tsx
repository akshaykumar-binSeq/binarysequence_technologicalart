'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/core/constants/routes';
import { SHELL_CONTENT } from '@/core/content/shell.content';
import styles from './footer-trajectory-bar.module.css';

export function FooterTrajectoryBar(): React.JSX.Element {
  const pathname = usePathname();
  const sequence = SHELL_CONTENT.footer.trajectorySequence;

  // Find index of current route in canonical sequence
  const currentIndex = sequence.findIndex((item) => {
    const targetPath = ROUTES[item.routeKey as keyof typeof ROUTES];
    return targetPath === pathname;
  });

  const validIndex = currentIndex >= 0 ? currentIndex : 0;
  const prevIndex = validIndex === 0 ? sequence.length - 1 : validIndex - 1;
  const nextIndex = validIndex === sequence.length - 1 ? 0 : validIndex + 1;

  const prevItem = sequence[prevIndex];
  const nextItem = sequence[nextIndex];

  return (
    <nav className={styles.trajectoryBar} aria-label="Sequential Architecture Trajectory">
      <Link
        href={ROUTES[prevItem.routeKey as keyof typeof ROUTES]}
        className={`${styles.navLink} ${styles.prevLink}`}
        aria-label={`Previous route: ${prevItem.fullLabel}`}
      >
        <span className={styles.arrow} aria-hidden="true">
          ←
        </span>
        <span>
          PREVIOUS: <span className={styles.label}>{prevItem.label}</span>
        </span>
      </Link>

      <Link
        href={ROUTES[nextItem.routeKey as keyof typeof ROUTES]}
        className={`${styles.navLink} ${styles.nextLink}`}
        aria-label={`Next route: ${nextItem.fullLabel}`}
      >
        <span>
          NEXT: <span className={styles.label}>{nextItem.label}</span>
        </span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </Link>
    </nav>
  );
}
