'use client';

import React, { useRef, useEffect, useState } from 'react';
import { STUDIO_CONTENT } from '../../content';
import { useContentProgression } from '@/core/interaction';
import styles from './pillars-section.module.css';

/**
 * Seven Architectural Invariant Glyphs (Vector Inline SVGs)
 * Refined for both compact selector and detail instrumentation.
 */
function PillarGlyph({
  number,
  className,
}: {
  number: string;
  className?: string;
}): React.JSX.Element {
  switch (number) {
    case '01': // Maintainability: Modular Decoupled Blocks
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <rect x="4" y="4" width="10" height="10" rx="1.5" fill="none" stroke="#D97706" strokeWidth="1.2" />
          <rect x="18" y="4" width="10" height="10" rx="1.5" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="4" y="18" width="10" height="10" rx="1.5" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="18" y="18" width="10" height="10" rx="1.5" fill="none" stroke="#D97706" strokeWidth="1.2" />
          <line x1="14" y1="9" x2="18" y2="9" stroke="#D97706" strokeWidth="1" />
          <line x1="9" y1="14" x2="9" y2="18" stroke="#D97706" strokeWidth="1" />
        </svg>
      );
    case '02': // Data Authority & Privacy: Vault Perimeter
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <rect x="6" y="6" width="20" height="20" rx="2" fill="none" stroke="#1E293B" strokeWidth="1.5" />
          <rect x="10" y="10" width="12" height="12" rx="1" fill="none" stroke="#D97706" strokeWidth="1.2" />
          <circle cx="16" cy="16" r="2.5" fill="#D97706" />
        </svg>
      );
    case '03': // Reliability: Redundant Failover Loop
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <path d="M 6 16 L 12 8 L 20 8 L 26 16 L 20 24 L 12 24 Z" fill="none" stroke="#D97706" strokeWidth="1.2" />
          <circle cx="6" cy="16" r="2" fill="#F6F5F0" />
          <circle cx="26" cy="16" r="2" fill="#D97706" />
        </svg>
      );
    case '04': // Performance: Efficiency Gauge
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <circle cx="16" cy="16" r="11" fill="none" stroke="#1E293B" strokeWidth="1.5" />
          <path d="M 7 20 A 11 11 0 1 1 25 20" fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="16" y1="16" x2="22" y2="11" stroke="#F6F5F0" strokeWidth="1.2" />
          <circle cx="16" cy="16" r="2" fill="#D97706" />
        </svg>
      );
    case '05': // Resource & Cost Efficiency: Calibrated Balance
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <line x1="6" y1="26" x2="26" y2="26" stroke="#1E293B" strokeWidth="1.5" />
          <line x1="16" y1="6" x2="16" y2="26" stroke="#94A3B8" strokeWidth="1.2" />
          <line x1="8" y1="12" x2="24" y2="12" stroke="#D97706" strokeWidth="1.2" />
          <polygon points="16,6 13,12 19,12" fill="#D97706" />
          <rect x="7" y="14" width="4" height="6" fill="#1E293B" stroke="#D97706" strokeWidth="0.8" />
          <rect x="21" y="14" width="4" height="6" fill="#1E293B" stroke="#D97706" strokeWidth="0.8" />
        </svg>
      );
    case '06': // Continuity: Unbroken Git Commit Chain
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <circle cx="8" cy="16" r="3" fill="#0B0C0E" stroke="#D97706" strokeWidth="1.2" />
          <circle cx="16" cy="16" r="3" fill="#D97706" />
          <circle cx="24" cy="16" r="3" fill="#0B0C0E" stroke="#F6F5F0" strokeWidth="1.2" />
          <line x1="11" y1="16" x2="13" y2="16" stroke="#D97706" strokeWidth="1.2" />
          <line x1="19" y1="16" x2="21" y2="16" stroke="#D97706" strokeWidth="1.2" />
        </svg>
      );
    case '07': // Calm Ergonomics: Golden Proportion Caliper
      return (
        <svg viewBox="0 0 44 32" className={className} aria-hidden="true">
          <rect x="4" y="6" width="36" height="20" rx="3" fill="none" stroke="#D97706" strokeWidth="1.2" />
          <line x1="26" y1="6" x2="26" y2="26" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="15" cy="16" r="5" fill="none" stroke="#F6F5F0" strokeWidth="1" />
          <circle cx="15" cy="16" r="2" fill="#D97706" />
          <circle cx="33" cy="16" r="2.5" fill="#D97706" />
        </svg>
      );
    default:
      return <div className={className} />;
  }
}

/**
 * PillarsSection — Architectural Standards Interactive Explorer
 *
 * Route: /studio
 * Section ID: #seven-pillars (Preserved)
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Architectural Rule: DEC-009 Mandatory UI Text Centralization
 *
 * Features:
 * - Pinned Detail Card at top inside screen context to traverse through list items & descriptions.
 * - Entire Detail Card from "PILLAR // 02 Governance" to "Return to first principle ↗" is visible on mobile screens.
 * - INDEX // 01–07 grids use reduced height for optimal screen fit.
 * - Non-blocking scroll progression via useContentProgression.
 */
export function PillarsSection(): React.JSX.Element {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const {
    eyebrow,
    headline,
    lead,
    indicator,
    resetLabel,
    interactionHint,
    focusHeading,
    prevLabel,
    nextLabel,
    pillars,
  } = STUDIO_CONTENT.sevenPillars;

  const totalCount = pillars.length;

  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const prevIndexRef = useRef<number>(0);

  const {
    activeStage: selectedIndex,
    handleStageSelect,
  } = useContentProgression({
    stageCount: totalCount,
    initialStage: 0,
    containerRef: trackRef,
    onStageChange: (newStage) => {
      setPreviousIndex(prevIndexRef.current);
      prevIndexRef.current = newStage;
    },
    framing: {
      clearanceDesktop: 24,
      clearanceMobile: 12,
    },
    scrollProgression: {
      enabled: true,
      startOffsetRatio: 0.65,
      endOffsetRatio: 0.25,
    },
    gestures: {
      enabled: true,
      wheelThreshold: 25,
      touchThreshold: 40,
    },
  });

  const currentPillar = pillars[selectedIndex] ?? pillars[0];

  // Keep active button scrolled into view within the horizontal container
  useEffect(() => {
    const container = scrollContainerRef.current;
    const targetBtn = buttonRefs.current[selectedIndex];
    if (!container || !targetBtn) return;

    const containerLeft = container.scrollLeft;
    const containerRight = containerLeft + container.clientWidth;
    const btnLeft = targetBtn.offsetLeft;
    const btnRight = btnLeft + targetBtn.offsetWidth;

    if (btnLeft < containerLeft) {
      container.scrollTo({ left: btnLeft - 8, behavior: 'smooth' });
    } else if (btnRight > containerRight) {
      container.scrollTo({
        left: btnRight - container.clientWidth + 8,
        behavior: 'smooth',
      });
    }
  }, [selectedIndex]);

  const handleScrollLeft = (): void => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollRight = (): void => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrev = (): void => {
    handleStageSelect(Math.max(0, selectedIndex - 1));
  };

  const handleNext = (): void => {
    handleStageSelect(Math.min(totalCount - 1, selectedIndex + 1));
  };

  const handleReset = (): void => {
    handleStageSelect(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number): void => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault();
        const prevIdx = Math.max(0, index - 1);
        handleStageSelect(prevIdx);
        buttonRefs.current[prevIdx]?.focus();
        break;
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault();
        const nextIdx = Math.min(totalCount - 1, index + 1);
        handleStageSelect(nextIdx);
        buttonRefs.current[nextIdx]?.focus();
        break;
      }
      case 'Home': {
        e.preventDefault();
        handleStageSelect(0);
        buttonRefs.current[0]?.focus();
        break;
      }
      case 'End': {
        e.preventDefault();
        const lastIdx = totalCount - 1;
        handleStageSelect(lastIdx);
        buttonRefs.current[lastIdx]?.focus();
        break;
      }
      default:
        break;
    }
  };

  return (
    <section id="seven-pillars" className={styles.section} aria-labelledby="pillars-heading">
      <div className="bs-container">
        <div className={styles.sectionInner}>
          {/* Section Introduction */}
          <div className={styles.sectionHeader}>
            <h2 id="pillars-heading" className={styles.headline}>
              {headline}
            </h2>
            <p className={styles.leadText}>{lead}</p>
          </div>

          {/* Sticky Pinning Scroll Track */}
          <div ref={trackRef} className={styles.standardsTrack}>
            <div
              className={styles.explorerConsole}
              role="region"
              aria-label="Seven Architectural Standards Explorer"
            >
              {/* Pinned Header Bar: ARCHITECTURE / STANDARDS INDEX // 07 PRINCIPLES */}
              <div className={styles.pinnedHeaderBar}>
                <span className={styles.eyebrow}>{eyebrow}</span>
                <span className={styles.indicatorBadge}>{indicator}</span>
              </div>

              {/* Pinned Detail Card (order: 1): PILLAR // 02 Governance to Return to first principle ↗ is fully visible */}
              <div className={styles.detailColumn}>
                <article
                  id="pillar-detail-panel"
                  key={currentPillar.number}
                  className={`${styles.detailCard} ${
                    previousIndex !== null && selectedIndex > previousIndex
                      ? styles.detailTransitionForward
                      : previousIndex !== null && selectedIndex < previousIndex
                      ? styles.detailTransitionBackward
                      : ''
                  }`}
                  aria-live="polite"
                  aria-atomic="true"
                  aria-label={`Pillar ${currentPillar.number}: ${currentPillar.title}`}
                >
                  {/* Panel Header */}
                  <div className={styles.detailHeader}>
                    <div className={styles.detailMetaLeft}>
                      <span className={styles.detailPillarBadge}>
                        PILLAR // {currentPillar.number}
                      </span>
                      <span className={styles.detailDomainTag}>
                        {currentPillar.domainTag}
                      </span>
                      {'classification' in currentPillar && Boolean(currentPillar.classification) && (
                        <span className={styles.culminatingBadge}>
                          {String(currentPillar.classification).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div
                      className={styles.positionBadge}
                      aria-label={`Standard ${selectedIndex + 1} of ${totalCount}`}
                    >
                      0{selectedIndex + 1} / 0{totalCount}
                    </div>
                  </div>

                  {/* Title & Graphic Glyph */}
                  <div className={styles.detailTitleRow}>
                    <h3 className={styles.detailTitle}>{currentPillar.title}</h3>
                    <div className={styles.detailGlyphBox} aria-hidden="true">
                      <PillarGlyph number={currentPillar.number} className={styles.detailGlyph} />
                    </div>
                  </div>

                  {/* Full Description */}
                  <p className={styles.detailDescription}>{currentPillar.description}</p>

                  {/* Tactical Divider */}
                  <div className={styles.detailDivider} aria-hidden="true" />

                  {/* Engineering Focus Block */}
                  <div className={styles.focusBlock}>
                    <span className={styles.focusHeading}>{focusHeading}</span>
                    <p className={styles.focusText}>{currentPillar.engineeringFocus}</p>
                  </div>

                  {/* Domain Concept Tags */}
                  <div className={styles.tagsRow} aria-label="Key concepts">
                    {currentPillar.tags.map((tag) => (
                      <span key={tag} className={styles.tagChip}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Detail Footer Controls: Return to first principle ↗ is visible on screen */}
                  <div className={styles.detailFooter}>
                    <div className={styles.detailFooterLeft}>
                      <span className={styles.currentPositionReadout}>
                        0{selectedIndex + 1} of 0{totalCount}
                      </span>
                      <button
                        type="button"
                        className={styles.resetButtonInline}
                        onClick={handleReset}
                        aria-label="Return to first principle"
                      >
                        {resetLabel}
                      </button>
                    </div>
                    <div className={styles.navButtonGroup}>
                      <button
                        type="button"
                        className={styles.navButton}
                        disabled={selectedIndex === 0}
                        onClick={handlePrev}
                        aria-label="Previous standard"
                      >
                        <span aria-hidden="true">{'\u2190'}</span> {prevLabel}
                      </button>
                      <button
                        type="button"
                        className={styles.navButton}
                        disabled={selectedIndex === totalCount - 1}
                        onClick={handleNext}
                        aria-label="Next standard"
                      >
                        {nextLabel} <span aria-hidden="true">{'\u2192'}</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>

              {/* Selector Column (order: 2): INDEX // 01–07 02 / 07 Grids with LESS HEIGHT */}
              <div className={styles.selectorColumn}>
                {/* Selector Header Bar with Progress & Controls */}
                <div className={styles.selectorHeader}>
                  <div className={styles.selectorHeaderLeft}>
                    <span className={styles.selectorLabel}>INDEX // 01–07</span>
                    <span className={styles.selectorPosition}>
                      0{selectedIndex + 1} / 0{totalCount}
                    </span>
                  </div>

                  <div className={styles.selectorHeaderRight}>
                    {/* Visual Progress Bar */}
                    <div
                      className={styles.progressBarTrack}
                      role="progressbar"
                      aria-valuenow={selectedIndex + 1}
                      aria-valuemin={1}
                      aria-valuemax={totalCount}
                      aria-label="Principle selection progress"
                    >
                      <div
                        className={styles.progressBarFill}
                        style={{ width: `${((selectedIndex + 1) / totalCount) * 100}%` }}
                      />
                    </div>

                    {/* Horizontal Scroll Navigation Controls */}
                    <div className={styles.scrollNavControls}>
                      <button
                        type="button"
                        className={styles.scrollArrowBtn}
                        onClick={handleScrollLeft}
                        aria-label="Scroll standards left"
                      >
                        <span aria-hidden="true">{'\u2190'}</span>
                      </button>
                      <button
                        type="button"
                        className={styles.scrollArrowBtn}
                        onClick={handleScrollRight}
                        aria-label="Scroll standards right"
                      >
                        <span aria-hidden="true">{'\u2192'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Horizontal Scroll Track: Reduced Height Grids */}
                <div
                  ref={scrollContainerRef}
                  className={styles.horizontalScrollTrack}
                  role="group"
                  aria-label="Engineering Standards Selector"
                >
                  {pillars.map((pillar, idx) => {
                    const isSelected = selectedIndex === idx;
                    const isCulminating = pillar.number === '07';
                    return (
                      <button
                        key={pillar.number}
                        ref={(el) => {
                          buttonRefs.current[idx] = el;
                        }}
                        type="button"
                        className={`${styles.selectorBtn} ${
                          isSelected ? styles.selectorBtnActive : ''
                        } ${isCulminating ? styles.culminatingBtn : ''}`}
                        onClick={() => handleStageSelect(idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        aria-pressed={isSelected}
                        aria-controls="pillar-detail-panel"
                        aria-label={`Pillar ${pillar.number}: ${pillar.title} (${pillar.domainTag})`}
                      >
                        {/* Top Line: Pip, Number, Domain Tag, Mini Glyph */}
                        <div className={styles.btnHeaderRow}>
                          <div className={styles.btnMetaLeft}>
                            <div className={styles.btnIndicator} aria-hidden="true" />
                            <span className={styles.btnNumber}>{pillar.number}</span>
                            <span className={styles.btnDomain}>{pillar.domainTag}</span>
                          </div>
                          <div className={styles.btnGlyphWrapper} aria-hidden="true">
                            <PillarGlyph number={pillar.number} className={styles.btnGlyph} />
                          </div>
                        </div>

                        {/* Bottom Line: Title & Invariant Badge */}
                        <div className={styles.btnTitleRow}>
                          <span className={styles.btnTitle}>{pillar.title}</span>
                          {isCulminating && (
                            <span className={styles.btnCulminatingTag}>INVARIANT</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selector Footer */}
                <div className={styles.selectorFooter}>
                  <p className={styles.interactionHint}>{interactionHint}</p>
                  <button
                    type="button"
                    className={styles.resetButton}
                    onClick={handleReset}
                    aria-label="Return to first principle"
                  >
                    {resetLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
