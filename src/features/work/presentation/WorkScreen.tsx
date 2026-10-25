'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { WORK_CONTENT, type CaseStudy } from '../content';
import { CaseStudyCard } from './components/CaseStudyCard';
import { CaseStudyInspector } from './components/CaseStudyInspector';
import styles from './work.module.css';

export function WorkScreen(): React.JSX.Element {
  const { hero, filters, caseStudies, cta } = WORK_CONTENT;
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [expandedCaseStudyId, setExpandedCaseStudyId] = useState<string | null>(null);

  const filteredStudies =
    selectedDomain === 'all'
      ? caseStudies
      : caseStudies.filter((cs) => cs.domain === selectedDomain);

  const handleToggleInspector = (cs: CaseStudy) => {
    setExpandedCaseStudyId((prev) => (prev === cs.id ? null : cs.id));
  };

  return (
    <div className="bs-container">
      <div className={styles.screen}>
        {/* 1. Hero Section */}
        <section className={styles.heroSection} aria-labelledby="work-headline">
          <div className={styles.heroContent}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>{hero.badge}</span>
              <span className={styles.binaryTelemetry} aria-hidden="true">
                {hero.binaryTelemetry}
              </span>
            </div>
            <h1 id="work-headline" className={styles.headline}>
              {hero.headline}
            </h1>
            <p className={styles.lead}>{hero.lead}</p>
            <div className={styles.heroActions}>
              <Link
                href={hero.actionContact.href}
                className={styles.btnPrimary}
                aria-label={hero.actionContact.ariaLabel}
              >
                {hero.actionContact.label}
              </Link>
              <Link
                href={hero.actionBlueprint.href}
                className={styles.btnSecondary}
                aria-label={hero.actionBlueprint.ariaLabel}
              >
                {hero.actionBlueprint.label}
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Filter Bar */}
        <section className={styles.filterSection} aria-label="Filter case studies by architectural discipline">
          <div className={styles.filterBar} role="radiogroup" aria-label="Architectural discipline filter">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="radio"
                aria-checked={selectedDomain === f.id}
                className={`${styles.filterPill} ${selectedDomain === f.id ? styles.filterActive : ''}`}
                onClick={() => setSelectedDomain(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* 3. Case Studies List */}
        <section className={styles.caseStudiesSection} aria-label="Production case studies">
          <div className={styles.caseStudiesList}>
            {filteredStudies.map((cs) => {
              const isSelected = expandedCaseStudyId === cs.id;
              return (
                <div key={cs.id} className={styles.caseStudyWrapper}>
                  <CaseStudyCard
                    caseStudy={cs}
                    onSelect={handleToggleInspector}
                    isSelected={isSelected}
                  />
                  {isSelected && (
                    <CaseStudyInspector
                      caseStudy={cs}
                      onClose={() => setExpandedCaseStudyId(null)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Strategic CTA Block */}
        <section className={styles.ctaSection} aria-labelledby="work-cta-headline">
          <div className={styles.ctaInner}>
            <span className={styles.ctaEyebrow}>{cta.eyebrow}</span>
            <h2 id="work-cta-headline" className={styles.ctaHeadline}>
              {cta.headline}
            </h2>
            <p className={styles.ctaBody}>{cta.body}</p>
            <div className={styles.ctaActions}>
              <Link
                href={cta.actionBlueprint.href}
                className={styles.btnPrimary}
                aria-label={cta.actionBlueprint.ariaLabel}
              >
                {cta.actionBlueprint.label}
              </Link>
              <Link
                href={cta.actionContact.href}
                className={styles.btnSecondary}
                aria-label={cta.actionContact.ariaLabel}
              >
                {cta.actionContact.label}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
