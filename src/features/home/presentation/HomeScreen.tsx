import Link from 'next/link';
import { ROUTES } from '@/core/constants/routes';
import { HOME_CONTENT } from '../content';
import { SequenceScrubber } from './components/SequenceScrubber';
import { ComplexityModal } from './components/ComplexityModal';
import styles from './home.module.css';

/**
 * FEAT-02-HOME — Presentation Component
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (Screen 01: Home, §37)
 * Authority: Level 2 Audience-Facing Content Specification v1.1
 * Decision: DEC-DR04 Direct Home Landing (No blocking modal, immediate hero render)
 * Decision: DEC-009 Mandatory UI Text Centralization
 *
 * Rendered directly on route `/` with static server prerender for core content
 * and progressive interactive components (SequenceScrubber, ComplexityModal).
 */
export function HomeScreen() {
  const {
    hero,
    complexityAbsorption,
    serviceDisciplines,
    featuredEcosystem,
    sequenceOverview,
    terminalAction,
  } = HOME_CONTENT;

  return (
    <div className={styles.homeContainer}>
      {/* 1. Hero Section */}
      <section id="hero" className={styles.heroSection} aria-label={hero.eyebrow}>
        <div className="bs-container">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 className={styles.heroHeadline}>{hero.headline}</h1>
            <p className={styles.subHeadline}>{hero.subHeadline}</p>
            <p className={styles.heroNarrative}>{hero.narrative}</p>

            {/* Binary Sequence Philosophy Monospace Indicator */}
            <div className={styles.binaryIndicator} aria-hidden="true">
              <span>{hero.binaryPhilosophy}</span>
            </div>

            <div className={styles.heroActions}>
              <Link
                href={ROUTES.blueprint}
                className={styles.btnPrimary}
                aria-label={hero.actions.primary.ariaLabel}
              >
                {hero.actions.primary.label}
              </Link>
              <Link
                href={ROUTES.products}
                className={styles.btnSecondary}
                aria-label={hero.actions.secondary.ariaLabel}
              >
                {hero.actions.secondary.label}
              </Link>
            </div>
            <a
              href="#complexity-absorption"
              className={styles.manifestoAnchor}
              aria-label={hero.actions.manifestoAnchor.ariaLabel}
            >
              {hero.actions.manifestoAnchor.label}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Complexity Absorption (Architectural Discipline & Principles) */}
      <section
        id="complexity-absorption"
        className={styles.section}
        aria-label={complexityAbsorption.eyebrow}
      >
        <div className="bs-container">
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <p className={styles.eyebrow}>{complexityAbsorption.eyebrow}</p>
              <h2 className={styles.headline}>{complexityAbsorption.headline}</h2>
              <p className={styles.sectionLead}>{complexityAbsorption.body}</p>
              {/* Interactive 4:3 Architecture Modal Trigger */}
              <ComplexityModal />
            </header>

            <div className={styles.principlesGrid}>
              {complexityAbsorption.principles.map((principle) => (
                <article key={principle.number} className={styles.principleCard}>
                  <span className={styles.principleNumber}>{principle.number}</span>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleDesc}>{principle.description}</p>
                </article>
              ))}
            </div>

            <Link
              href={ROUTES.studio}
              className={styles.actionLink}
              aria-label={complexityAbsorption.actionLink.ariaLabel}
            >
              {complexityAbsorption.actionLink.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Capabilities & Service Disciplines */}
      <section
        id="service-disciplines"
        className={styles.section}
        aria-label={serviceDisciplines.eyebrow}
      >
        <div className="bs-container">
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <p className={styles.eyebrow}>{serviceDisciplines.eyebrow}</p>
              <h2 className={styles.headline}>{serviceDisciplines.headline}</h2>
              <p className={styles.sectionLead}>{serviceDisciplines.description}</p>
            </header>

            <div className={styles.disciplinesGrid}>
              {serviceDisciplines.disciplines.map((discipline) => (
                <article key={discipline.id} className={styles.disciplineCard}>
                  <h3 className={styles.disciplineTitle}>{discipline.title}</h3>
                  <p className={styles.disciplineDesc}>{discipline.description}</p>
                </article>
              ))}
            </div>

            <Link
              href={ROUTES.method}
              className={styles.actionLink}
              aria-label={serviceDisciplines.actionLink.ariaLabel}
            >
              {serviceDisciplines.actionLink.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Ecosystem Snapshot */}
      <section
        id="featured-ecosystem"
        className={styles.section}
        aria-label={featuredEcosystem.eyebrow}
      >
        <div className="bs-container">
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <p className={styles.eyebrow}>{featuredEcosystem.eyebrow}</p>
              <h2 className={styles.headline}>{featuredEcosystem.headline}</h2>
              <p className={styles.sectionLead}>{featuredEcosystem.description}</p>
            </header>

            <div className={styles.ecosystemGrid}>
              {featuredEcosystem.products.map((product) => (
                <article key={product.id} className={styles.ecosystemCard}>
                  <div className={styles.ecosystemCardHeader}>
                    <span className={styles.statusBadge}>{product.statusBadge}</span>
                    <h3 className={styles.ecosystemTitle}>{product.title}</h3>
                    <p className={styles.ecosystemDesc}>{product.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <Link
              href={ROUTES.products}
              className={styles.actionLink}
              aria-label={featuredEcosystem.actionLink.ariaLabel}
            >
              {featuredEcosystem.actionLink.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 11-Stage Sequence Overview with Interactive Scrubber */}
      <section
        id="sequence-overview"
        className={styles.section}
        aria-label={sequenceOverview.eyebrow}
      >
        <div className="bs-container">
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <p className={styles.eyebrow}>{sequenceOverview.eyebrow}</p>
              <h2 className={styles.headline}>{sequenceOverview.headline}</h2>
              <p className={styles.sequenceCaption}>{sequenceOverview.caption}</p>
            </header>

            {/* Interactive 11-Stage Scrubber with CLS = 0 Inspector Card */}
            <SequenceScrubber />

            <Link
              href={ROUTES.method}
              className={styles.actionLink}
              aria-label={sequenceOverview.actionLink.ariaLabel}
            >
              {sequenceOverview.actionLink.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Terminal Action */}
      <section
        id="terminal-action"
        className={styles.section}
        aria-label={terminalAction.headline}
      >
        <div className="bs-container">
          <div className={styles.terminalCard}>
            <h2 className={styles.terminalHeadline}>{terminalAction.headline}</h2>
            <p className={styles.terminalDesc}>{terminalAction.description}</p>
            <div className={styles.terminalActions}>
              <Link
                href={ROUTES.blueprint}
                className={styles.btnPrimary}
                aria-label={terminalAction.actions.primary.ariaLabel}
              >
                {terminalAction.actions.primary.label}
              </Link>
              <Link
                href={ROUTES.contact}
                className={styles.btnSecondary}
                aria-label={terminalAction.actions.secondary.ariaLabel}
              >
                {terminalAction.actions.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
