'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/core/constants/routes';
import { SHELL_CONTENT } from '@/core/content/shell.content';
import styles from './footer-capabilities-dock.module.css';

/**
 * Footer Capabilities Dock Component
 *
 * Implements:
 * 1. Responsive 4x1 (desktop), 2x2 (tablet / tab view), 1x4 (mobile) layout
 * 2. Interactive keyboard-tabbable architectural gateway to /atlas
 * 3. Responsive header/badge positioning adapted to viewport
 */
export function FooterCapabilitiesDock(): React.JSX.Element {
  const { capabilitiesDock } = SHELL_CONTENT.footer;

  return (
    <div className={styles.dockContainer} aria-label={capabilitiesDock.ariaLabel}>
      <div className={styles.dockBadge} aria-hidden="true">
        <span>{capabilitiesDock.tag}</span>
      </div>

      <div className={styles.dockGrid}>
        {capabilitiesDock.items.map((item) => (
          <Link
            key={item.code}
            href={ROUTES.atlas}
            className={styles.dockItem}
            aria-label={`[${item.code}] ${item.title}: ${item.subtitle}. Explore in Topology Atlas.`}
          >
            <div className={styles.itemHeader}>
              <span className={styles.itemIcon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles.itemCode}>[{item.code}]</span>
              <span className={styles.itemLinkArrow} aria-hidden="true">
                ↗
              </span>
            </div>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.itemSubtitle}>{item.subtitle}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
