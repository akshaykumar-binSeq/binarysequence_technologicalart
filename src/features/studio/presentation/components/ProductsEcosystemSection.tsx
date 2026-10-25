'use client';

import React from 'react';
import { STUDIO_CONTENT } from '../../content';
import styles from './products-ecosystem-section.module.css';

/**
 * ProductsEcosystemSection — Section 03: Products & Systems Ecosystem
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (Screen 03 Directory Integration)
 * Architectural Rule: DEC-009 Mandatory UI Text Centralization
 *
 * Presents the 6 core systems and exploratory prototypes with verified statuses:
 * - Time (AI Conversational System)
 * - Alert Wave (Product Telemetry & Feedback Platform)
 * - HREWEMS (Enterprise Management System)
 * - Supermarket (Omnichannel Retail Engine)
 * - Resonance (Community & Exploration Platform)
 * - Just Breathe Valley (Mountain Living Physical-Digital Interface)
 */
export function ProductsEcosystemSection(): React.JSX.Element {
  const { eyebrow, headline, lead, products } = STUDIO_CONTENT.ecosystem;

  return (
    <section id="ecosystem" className={styles.section} aria-labelledby="ecosystem-heading">
      <div className="bs-container">
        <div className={styles.sectionInner}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="ecosystem-heading" className={styles.headline}>
              {headline}
            </h2>
            <p className={styles.leadText}>{lead}</p>
          </div>

          {/* Products & Systems Grid */}
          <div
            className={styles.productsGrid}
            role="region"
            aria-label="Products and Systems Directory Preview"
          >
            {products.map((product) => {
              const isPrototype = product.status.includes('Prototype') || product.status.includes('Concept');
              return (
                <article
                  key={product.id}
                  className={styles.productCard}
                  aria-labelledby={`product-title-${product.id}`}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.categoryBadge}>{product.category}</span>
                    <span
                      className={`${styles.statusBadge} ${
                        isPrototype ? styles.statusPrototype : styles.statusDevelopment
                      }`}
                    >
                      <span className={styles.statusDot} aria-hidden="true" />
                      {product.status}
                    </span>
                  </div>

                  <h3 id={`product-title-${product.id}`} className={styles.productName}>
                    {product.name}
                  </h3>

                  <p className={styles.productDesc}>{product.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.telemetryNote}>
                      FOCUS // {product.statusNote}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
