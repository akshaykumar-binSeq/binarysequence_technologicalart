'use client';

import React from 'react';
import Link from 'next/link';
import { BLUEPRINT_CONTENT } from '../content';
import { BlueprintDeliverables } from './components/BlueprintDeliverables';
import { BlueprintTimeline } from './components/BlueprintTimeline';
import { BlueprintInquiryForm } from './components/BlueprintInquiryForm';
import styles from './blueprint.module.css';

export function BlueprintScreen(): React.JSX.Element {
  const { header, guaranteeBanner, closing } = BLUEPRINT_CONTENT;

  return (
    <div className={styles.page}>
      {/* 1. Hero Section */}
      <section className={styles.hero} aria-labelledby="blueprint-hero-heading">
        <div className={styles.heroInner}>
          <div className={styles.metaRow}>
            <span className={styles.eyebrow}>{header.eyebrow}</span>
            <span className={styles.binaryTicker} aria-hidden="true">
              {header.binaryTelemetry}
            </span>
          </div>

          <h1 id="blueprint-hero-heading" className={styles.headline}>
            {header.headline}
          </h1>

          <p className={styles.lead}>{header.lead}</p>
          <p className={styles.narrative}>{header.narrative}</p>

          <div className={styles.heroActions}>
            <a href="#blueprint-inquiry" className={styles.primaryCta}>
              Start Blueprint Inquiry ↓
            </a>
            <a href="#blueprint-deliverables" className={styles.secondaryCta}>
              Explore 6 Deliverables ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. The Standalone Guarantee Banner */}
      <section className={styles.guaranteeSection} aria-labelledby="guarantee-heading">
        <div className={styles.guaranteeCard}>
          <div className={styles.guaranteeBadge}>
            <span className={styles.shieldIcon} aria-hidden="true">
              🛡
            </span>
            <span>{guaranteeBanner.badge}</span>
          </div>

          <div className={styles.guaranteeContent}>
            <h2 id="guarantee-heading" className={styles.guaranteeHeadline}>
              {guaranteeBanner.headline}
            </h2>
            <p className={styles.guaranteeNarrative}>{guaranteeBanner.narrative}</p>

            <ul className={styles.covenantList}>
              <li className={styles.covenantItem}>
                <span className={styles.covenantCheck} aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>Zero Vendor Lock-In:</strong> Complete repository, diagram models, and
                  specification files transferred with full IP ownership.
                </div>
              </li>
              <li className={styles.covenantItem}>
                <span className={styles.covenantCheck} aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>Objective Technology Neutrality:</strong> Recommendations chosen solely for
                  operational fit, not agency bias or recurring affiliate margins.
                </div>
              </li>
              <li className={styles.covenantItem}>
                <span className={styles.covenantCheck} aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>Implementation Ready:</strong> Formatted so any competent engineering team can
                  pick up the sprint backlog and begin coding immediately.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Six Tangible Deliverables Bento Grid */}
      <BlueprintDeliverables />

      {/* 4. 10-Day Engagement Lifecycle Timeline */}
      <BlueprintTimeline />

      {/* 5. The Three Core Inquiries Stepped Intake Form */}
      <BlueprintInquiryForm />

      {/* 6. Closing / Alternative Pathways */}
      <section className={styles.closingSection} aria-labelledby="closing-heading">
        <div className={styles.closingCard}>
          <span className={styles.closingEyebrow}>{closing.eyebrow}</span>
          <h2 id="closing-heading" className={styles.closingHeadline}>
            {closing.headline}
          </h2>
          <p className={styles.closingLead}>{closing.lead}</p>
          <Link
            href={closing.action.href}
            className={styles.closingLink}
            aria-label={closing.action.ariaLabel}
          >
            {closing.action.label}
          </Link>
        </div>
      </section>
    </div>
  );
}
