'use client';

import React from 'react';
import type { CaseStudy } from '../../content';
import styles from './case-study-card.module.css';

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onSelect: (caseStudy: CaseStudy) => void;
  isSelected?: boolean;
}

export function CaseStudyCard({
  caseStudy,
  onSelect,
  isSelected = false,
}: CaseStudyCardProps): React.JSX.Element {
  return (
    <article
      className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
      aria-labelledby={`cs-title-${caseStudy.id}`}
    >
      <header className={styles.header}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrow}>{caseStudy.eyebrow}</span>
          <span className={styles.statusBadge} aria-label={`Status: ${caseStudy.statusBadge}`}>
            <span aria-hidden="true">●</span> {caseStudy.statusBadge}
          </span>
        </div>
        <h3 id={`cs-title-${caseStudy.id}`} className={styles.title}>
          {caseStudy.title}
        </h3>
        <p className={styles.subtitle}>{caseStudy.subtitle}</p>
      </header>

      {/* Primary Scale & Telemetry Metrics */}
      <div className={styles.metricsRow}>
        <div className={styles.metricBlock}>
          <span className={styles.metricValue}>{caseStudy.scaleMetric.primaryValue}</span>
          <span className={styles.metricLabel}>{caseStudy.scaleMetric.primaryLabel}</span>
        </div>
        <div className={styles.metricBlock}>
          <span className={styles.metricValue}>{caseStudy.scaleMetric.secondaryValue}</span>
          <span className={styles.metricLabel}>{caseStudy.scaleMetric.secondaryLabel}</span>
        </div>
        <div className={styles.metricBlock}>
          <span className={styles.metricValue}>{caseStudy.timeframe}</span>
          <span className={styles.metricLabel}>Delivery Horizon</span>
        </div>
      </div>

      <p className={styles.summary}>{caseStudy.executiveSummary}</p>

      <footer className={styles.footerRow}>
        <span className={styles.clientMeta}>{caseStudy.clientContext}</span>
        <button
          type="button"
          className={styles.inspectButton}
          onClick={() => onSelect(caseStudy)}
          aria-expanded={isSelected}
          aria-controls={`inspector-${caseStudy.id}`}
        >
          <span>{isSelected ? 'Collapse Teardown ▲' : 'Inspect Architectural Teardown ◫'}</span>
        </button>
      </footer>
    </article>
  );
}
