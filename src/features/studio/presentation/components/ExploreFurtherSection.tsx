'use client';

import React from 'react';
import Link from 'next/link';
import { STUDIO_CONTENT } from '../../content';
import styles from './explore-further-section.module.css';

/**
 * Three Directional Gateway Glyphs (Inline Vector SVGs)
 */
function GatewayGlyph({ type }: { type: 'method' | 'products' | 'blueprint' }): React.JSX.Element {
  switch (type) {
    case 'method': // The Sequence Method: 11-Phase Lifecycle Pipeline
      return (
        <svg viewBox="0 0 36 36" className={styles.gatewaySvg} aria-hidden="true">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#1E293B" strokeWidth="1.5" />
          <path d="M 18 4 A 14 14 0 0 1 32 18" fill="none" stroke="#D97706" strokeWidth="1.8" />
          <circle cx="18" cy="4" r="2.5" fill="#D97706" />
          <circle cx="32" cy="18" r="2.5" fill="#D97706" />
          <circle cx="18" cy="32" r="2" fill="#94A3B8" />
          <circle cx="4" cy="18" r="2" fill="#94A3B8" />
          <line x1="18" y1="12" x2="18" y2="24" stroke="#D97706" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );
    case 'products': // Products & Systems: 3-Cluster Ecosystem
      return (
        <svg viewBox="0 0 36 36" className={styles.gatewaySvg} aria-hidden="true">
          <rect x="4" y="4" width="12" height="12" rx="2" fill="none" stroke="#D97706" strokeWidth="1.2" />
          <rect x="20" y="4" width="12" height="12" rx="2" fill="none" stroke="#94A3B8" strokeWidth="1" />
          <rect x="12" y="20" width="12" height="12" rx="2" fill="none" stroke="#1E293B" strokeWidth="1.2" />
          <circle cx="10" cy="10" r="2" fill="#D97706" />
          <circle cx="26" cy="10" r="2" fill="#94A3B8" />
          <circle cx="18" cy="26" r="2" fill="#F6F5F0" />
        </svg>
      );
    case 'blueprint': // Sequence Blueprint: Architectural Caliper / Drafting Angle
      return (
        <svg viewBox="0 0 36 36" className={styles.gatewaySvg} aria-hidden="true">
          <line x1="6" y1="30" x2="30" y2="30" stroke="#1E293B" strokeWidth="1.5" />
          <line x1="6" y1="30" x2="18" y2="6" stroke="#D97706" strokeWidth="1.2" />
          <line x1="30" y1="30" x2="18" y2="6" stroke="#D97706" strokeWidth="1.2" />
          <path d="M 12 18 Q 18 14 24 18" fill="none" stroke="#F6F5F0" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="18" cy="6" r="2.5" fill="#D97706" />
        </svg>
      );
    default:
      return <div />;
  }
}

/**
 * ExploreFurtherSection — Section 05: Three Directional Navigation Gateways
 *
 * Section ID: #transitions (Preserved)
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Architectural Rule: DEC-009 Mandatory UI Text Centralization
 */
export function ExploreFurtherSection(): React.JSX.Element {
  const { eyebrow, headline, caption, actions } = STUDIO_CONTENT.transitions;

  return (
    <section id="transitions" className={styles.section} aria-labelledby="transitions-heading">
      <div className="bs-container">
        <div className={styles.transitionsCard}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="transitions-heading" className={styles.headline}>
              {headline}
            </h2>
            <p className={styles.captionText}>{caption}</p>
          </div>

          {/* Tri-Gateway Navigation Grid */}
          <div className={styles.gatewaysGrid} role="navigation" aria-label="Explore Further Directions">
            {/* Gateway 1: Sequence Method */}
            <Link
              href={actions.method.route}
              className={styles.gatewayCard}
              aria-label={actions.method.ariaLabel}
            >
              <div className={styles.cardTop}>
                <span className={styles.gatewayTelemetry}>01 // METHODOLOGY</span>
                <GatewayGlyph type="method" />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.gatewayTitle}>{actions.method.label}</h3>
                <p className={styles.gatewaySubtitle}>
                  How is the work engineered? An 11-stage rigorous engineering lifecycle from specification to maintenance.
                </p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.actionPrompt}>Explore Method</span>
                <span className={styles.actionArrow} aria-hidden="true">→</span>
              </div>
            </Link>

            {/* Gateway 2: Products & Systems */}
            <Link
              href={actions.products.route}
              className={styles.gatewayCard}
              aria-label={actions.products.ariaLabel}
            >
              <div className={styles.cardTop}>
                <span className={styles.gatewayTelemetry}>02 // PORTFOLIO</span>
                <GatewayGlyph type="products" />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.gatewayTitle}>{actions.products.label}</h3>
                <p className={styles.gatewaySubtitle}>
                  What has been built? A directory of utility software, community applications, and public technological artifacts.
                </p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.actionPrompt}>View Systems</span>
                <span className={styles.actionArrow} aria-hidden="true">→</span>
              </div>
            </Link>

            {/* Gateway 3: Sequence Blueprint */}
            <Link
              href={actions.blueprint.route}
              className={styles.gatewayCard}
              aria-label={actions.blueprint.ariaLabel}
            >
              <div className={styles.cardTop}>
                <span className={styles.gatewayTelemetry}>03 // ENGAGEMENT</span>
                <GatewayGlyph type="blueprint" />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.gatewayTitle}>{actions.blueprint.label}</h3>
                <p className={styles.gatewaySubtitle}>
                  How do we begin? A bounded 10-day fixed-scope Phase 0 architecture engagement before committing to build.
                </p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.actionPrompt}>Engage Blueprint</span>
                <span className={styles.actionArrow} aria-hidden="true">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
