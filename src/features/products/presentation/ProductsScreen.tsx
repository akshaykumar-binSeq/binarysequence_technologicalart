import React from 'react';
import Link from 'next/link';
import { PRODUCTS_CONTENT } from '../content';
import { ClusterSection } from './components/ClusterSection';
import styles from './products.module.css';

export function ProductsScreen(): React.JSX.Element {
  const { header, clusters, closing } = PRODUCTS_CONTENT;

  return (
    <div className={styles.screenContainer}>
      <div className="bs-container">
        {/* ------------------------------------------------------------------
            1. Introduction Section
            ------------------------------------------------------------------ */}
        <section id="products-intro" className={styles.introSection} aria-labelledby="products-heading">
          <header className={styles.introHeader}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>{header.eyebrow}</span>
              <span className={styles.binaryTelemetry} aria-hidden="true">
                {header.binaryTelemetry}
              </span>
            </div>
            <h1 id="products-heading" className={styles.headline}>
              {header.headline}
            </h1>
            <p className={styles.subHeadline}>{header.subHeadline}</p>
            <p className={styles.narrative}>{header.narrative}</p>
          </header>
        </section>

        {/* ------------------------------------------------------------------
            2. Ecosystem Directory (Clusters 01, 02, 03 via P4 Monolithic Console)
            ------------------------------------------------------------------ */}
        <div id="products-directory" className={styles.directorySection} role="region" aria-label="Ecosystem Directory">
          {clusters.map((cluster) => (
            <ClusterSection key={cluster.id} cluster={cluster} />
          ))}

          {/* Ecosystem Cohesion Callout */}
          <aside className={styles.cohesionBox} aria-label="Architecture Cohesion Principle">
            <h4 className={styles.cohesionHeading}>SYSTEMIC COHESION // THE UNDERLYING FABRIC</h4>
            <p className={styles.cohesionProse}>
              Each product in this directory solves a distinct business or human problem, yet all share the same
              foundational DNA: client data sovereignty, zero dark patterns, resilient offline-first capabilities, and
              complexity absorbed within the architecture.
            </p>
          </aside>
        </div>

        {/* ------------------------------------------------------------------
            3. Closing Navigation
            ------------------------------------------------------------------ */}
        <section id="products-closing" className={styles.closingSection} aria-labelledby="closing-heading">
          <div className={styles.closingCard}>
            <p className={styles.eyebrow}>{closing.eyebrow}</p>
            <h2 id="closing-heading" className={styles.closingHeadline}>
              {closing.headline}
            </h2>
            <p className={styles.closingLead}>{closing.lead}</p>
            <div className={styles.closingActions}>
              <Link
                href={closing.actions.primary.href}
                className={styles.btnPrimary}
                aria-label={closing.actions.primary.ariaLabel}
              >
                {closing.actions.primary.label}
              </Link>
              <Link
                href={closing.actions.secondary.href}
                className={styles.btnSecondary}
                aria-label={closing.actions.secondary.ariaLabel}
              >
                {closing.actions.secondary.label}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
