import React from 'react';
import { STUDIO_CONTENT } from '../content';
import { FoundationLivingNarrative } from './components/FoundationLivingNarrative';
import { ProductsEcosystemSection } from './components/ProductsEcosystemSection';
import { PhilosophySection } from './components/PhilosophySection';
import { PillarsSection } from './components/PillarsSection';
import { OperatingModelSection } from './components/OperatingModelSection';
import { ExplorationSection } from './components/ExplorationSection';
import { ExploreFurtherSection } from './components/ExploreFurtherSection';
import styles from './studio.module.css';

/**
 * StudioScreen — Feature presentation component for FEAT-03-STUDIO.
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (Screen 02: Studio)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§38)
 * Architectural Rule: DEC-009 Mandatory UI Text Centralization (Zero Raw Strings)
 *
 * Editorial Structure:
 * 01. Studio Overview (Header + Capabilities + Founder Attribution)
 * 02. The Engineering Foundation (Living Narrative: Binary → Sequence → Technology → Art)
 * 03. Products & Systems Ecosystem (6 Concrete Systems with Verified Statuses)
 * 04. Core Philosophy & Calibrated Rigor (Ordered Discipline vs Fragmented Sprawl)
 * 05. Architectural Standards (Seven Invariant Engineering Pillars)
 * 06. Operating Model & Continuity Protocol (Direct Delivery & Sovereign Covenant)
 * 07. Technical Exploration (Scientific Inquiry, Physical Computing, Optics)
 * 08. Explore Further (Directional Gateways to Method, Products, Blueprint)
 */
export function StudioScreen(): React.JSX.Element {
  return (
    <article className={styles.studioContainer}>
      {/* 1. Studio Header Section */}
      <header className={styles.headerSection}>
        <div className="bs-container">
          <div className={styles.headerContent}>
            <div>
              <span className={styles.badge}>{STUDIO_CONTENT.header.badge}</span>
            </div>
            <span className={styles.eyebrow}>{STUDIO_CONTENT.header.eyebrow}</span>
            <h1 className={styles.headline}>{STUDIO_CONTENT.header.headline}</h1>
            <p className={styles.headerNarrative}>{STUDIO_CONTENT.header.narrative}</p>

            {/* Core Technical Capabilities */}
            <div className={styles.capabilitiesList} aria-label="Studio Capabilities">
              {STUDIO_CONTENT.header.capabilities.map((cap) => (
                <span key={cap} className={styles.capabilityPill}>
                  {cap}
                </span>
              ))}
            </div>

            {/* Founder Attribution */}
            <div className={styles.founderBox}>
              <span className={styles.founderLabel}>
                {STUDIO_CONTENT.header.founderAttribution.label} // {STUDIO_CONTENT.header.founderAttribution.name}
              </span>
              <p className={styles.founderBio}>
                {STUDIO_CONTENT.header.founderAttribution.biography}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Etymology Section: Scroll-Driven Living Foundation */}
      <section
        id="etymology"
        className={styles.section}
        aria-labelledby="etymology-heading"
      >
        <div className="bs-container">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>{STUDIO_CONTENT.etymology.eyebrow}</span>
              <h2 id="etymology-heading" className={styles.headline}>
                {STUDIO_CONTENT.etymology.headline}
              </h2>
              <p className={styles.subHeadline}>{STUDIO_CONTENT.etymology.subHeadline}</p>
            </div>

            {/* Scroll-Driven Living Foundation Narrative (Binary → Sequence → Technology → Art) */}
            <FoundationLivingNarrative />

            {/* Editorial Culmination Moment */}
            <aside
              className={styles.culminationSection}
              aria-label={STUDIO_CONTENT.etymology.calloutBanner.headline}
            >
              <div className={styles.culminationRule} aria-hidden="true">
                <span className={styles.culminationPip} />
              </div>
              <div className={styles.culminationFrame}>
                <blockquote className={styles.culminationHeadline}>
                  {STUDIO_CONTENT.etymology.calloutBanner.headline}
                </blockquote>
                <p className={styles.culminationDetail}>
                  {STUDIO_CONTENT.etymology.calloutBanner.detail}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Products & Systems Ecosystem */}
      <ProductsEcosystemSection />

      {/* 4. Core Philosophy: Calibrated Architectural Approach */}
      <PhilosophySection />

      {/* 5. Seven Pillars of Software Quality: Bento Architecture Console */}
      <PillarsSection />

      {/* 6. Operating Architecture & Continuity Protocol: Transmission Pipeline & Sovereign Covenant */}
      <OperatingModelSection />

      {/* 7. Technical Exploration: Field Observation & Scientific Inquiry */}
      <ExplorationSection />

      {/* 8. Explore Further: Directional Gateways */}
      <ExploreFurtherSection />
    </article>
  );
}
