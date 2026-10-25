'use client';

import React from 'react';
import { SHELL_CONTENT } from '@/core/content/shell.content';
import styles from './footer-telemetry-bar.module.css';

export function FooterTelemetryBar(): React.JSX.Element {
  const { telemetry } = SHELL_CONTENT.footer;

  return (
    <div className={styles.telemetryBar} aria-label="System status and operational telemetry">
      <div className={styles.itemGroup}>
        <span className={styles.label}>SYSTEM STATUS</span>
        <span className={`${styles.value} ${styles.statusLive}`}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span>{telemetry.statusLabel}</span>
        </span>
      </div>

      <div className={styles.itemGroup}>
        <span className={styles.label}>ENTERPRISE MISSION</span>
        <span className={styles.value}>{telemetry.missionLabel}</span>
      </div>

      <div className={styles.itemGroup}>
        <span className={styles.label}>PRODUCTION HORIZON</span>
        <span className={styles.value}>{telemetry.versionLabel}</span>
      </div>

      <div className={styles.itemGroup}>
        <span className={styles.label}>STUDIO ANCHOR</span>
        <span className={styles.value}>{telemetry.anchorLabel}</span>
      </div>
    </div>
  );
}
