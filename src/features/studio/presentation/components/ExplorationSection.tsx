'use client';

import React from 'react';
import { STUDIO_CONTENT } from '../../content';
import styles from './exploration-section.module.css';

/**
 * ExplorationSection — Section 06: Technical Exploration & Field Inquiry
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Authority: Master Document v1.1 (Part VI §42–§44, Part II §19–§22)
 * Architectural Rule: DEC-009 Mandatory UI Text Centralization
 *
 * Communicates the studio's scientific curiosity, physical computing exploration,
 * and observational disciplines (photography, cinematography, natural rhythms).
 */
export function ExplorationSection(): React.JSX.Element {
  const { eyebrow, headline, narrative, facets } = STUDIO_CONTENT.exploration;

  return (
    <section id="exploration" className={styles.section} aria-labelledby="exploration-heading">
      <div className="bs-container">
        <div className={styles.sectionInner}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="exploration-heading" className={styles.headline}>
              {headline}
            </h2>
            <p className={styles.leadNarrative}>{narrative}</p>
          </div>

          {/* Three Inquiry Facets */}
          <div
            className={styles.facetsGrid}
            role="region"
            aria-label="Scientific and Observational Inquiries"
          >
            {facets.map((facet, idx) => (
              <article key={facet.title} className={styles.facetCard}>
                <div className={styles.cardTop}>
                  <span className={styles.facetNumber}>INQUIRY // 0{idx + 1}</span>
                  <span className={styles.facetGlyph} aria-hidden="true">
                    {idx === 0 && '⚡'}
                    {idx === 1 && '🌿'}
                    {idx === 2 && '◐'}
                  </span>
                </div>

                <h3 className={styles.facetTitle}>{facet.title}</h3>
                <p className={styles.facetDesc}>{facet.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
