'use client';

import React, { useRef, useEffect } from 'react';
import { MethodStage } from '../../content';
import styles from './stage-detail-inspector.module.css';

interface StageDetailInspectorProps {
  stages: readonly MethodStage[];
  activeStage: number;
  onSelectStage: (index: number) => void;
  onPrevStage: () => void;
  onNextStage: () => void;
}

export function StageDetailInspector({
  stages,
  activeStage,
  onSelectStage,
  onPrevStage,
  onNextStage,
}: StageDetailInspectorProps): React.JSX.Element {
  const stage = stages[activeStage] ?? stages[0];
  const trackRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const isClickScrollingRef = useRef(false);
  const activeStageRef = useRef(activeStage);
  activeStageRef.current = activeStage;

  // Smoothly center the active card inside the pinned top bar without micro-jitter
  useEffect(() => {
    if (activeBtnRef.current && trackRef.current) {
      const container = trackRef.current;
      const btn = activeBtnRef.current;
      const leftOffset = btn.offsetLeft - container.offsetLeft;
      const btnWidth = btn.offsetWidth;
      const containerScroll = container.scrollLeft;
      const containerWidth = container.clientWidth;

      const idealScroll = leftOffset - containerWidth / 2 + btnWidth / 2;
      const scrollDelta = Math.abs(containerScroll - idealScroll);

      // Only scroll if we are noticeably off-center (> 35px) to prevent scroll jitter
      if (scrollDelta > 35) {
        container.scrollTo({ left: Math.max(0, idealScroll), behavior: 'smooth' });
      }
    }
  }, [activeStage]);

  // Deterministic, jitter-free scroll position listener with hysteresis
  useEffect(() => {
    let rafId: number | null = null;

    const updateActiveStageFromScroll = () => {
      if (isClickScrollingRef.current) return;

      const cards = cardRefs.current;
      if (!cards || cards.length === 0) return;

      // Focal line sits directly below the sticky top bar (~38% of viewport height)
      const focalY = Math.max(250, window.innerHeight * 0.38);
      const firstCard = cards[0];
      if (!firstCard) return;
      if (firstCard.getBoundingClientRect().top > focalY) {
        // User has not reached StageDetailInspector yet (currently above in intro or trajectory)
        if (activeStageRef.current !== 0) {
          activeStageRef.current = 0;
          onSelectStage(0);
        }
        return;
      }

      const currentActive = activeStageRef.current;

      let nextIdx = 0;

      // Continuous, deterministic inspection: find the card currently crossing the focal line
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;
        const rect = card.getBoundingClientRect();

        // Apply a small hysteresis margin (15px) to eliminate boundary blinking
        const boundaryThreshold = i === currentActive + 1 ? focalY : focalY + 15;

        if (rect.top <= boundaryThreshold) {
          nextIdx = i;
        } else {
          break;
        }
      }

      if (nextIdx !== activeStageRef.current) {
        activeStageRef.current = nextIdx;
        onSelectStage(nextIdx);
      }
    };

    const handleScroll = () => {
      if (isClickScrollingRef.current) return;
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateActiveStageFromScroll();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial positioning check
    updateActiveStageFromScroll();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [onSelectStage]);

  const handleStageCardSelect = (idx: number): void => {
    if (idx < 0 || idx >= stages.length) return;
    onSelectStage(idx);
    activeStageRef.current = idx;
    isClickScrollingRef.current = true;

    const targetCard = cardRefs.current[idx];
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Release lock after smooth scroll completes
      setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 750);
    } else {
      isClickScrollingRef.current = false;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number): void => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        if (index > 0) handleStageCardSelect(index - 1);
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        if (index < stages.length - 1) handleStageCardSelect(index + 1);
        break;
      case 'Home':
        e.preventDefault();
        handleStageCardSelect(0);
        break;
      case 'End':
        e.preventDefault();
        handleStageCardSelect(stages.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div
      id="stage-detail-inspector"
      className={styles.inspectorWrapper}
      role="region"
      aria-label="Method Stage Detail Inspector"
    >
      {/* ------------------------------------------------------------------
          1. Pinned Sticky "01. OBSERVE → 11. EVOLVE" Navigation Bar
          Stays pinned on top until the last stage is active
          ------------------------------------------------------------------ */}
      <nav className={styles.stickyBar} aria-label="Method sequence sticky stage index">
        <div className={styles.stickyBarHeader}>
          <div className={styles.stickyBarTitleGroup}>
            <span className={styles.stickyBarLabel}>01. OBSERVE → 11. EVOLVE</span>
            <span className={styles.stickyBarPosition}>
              STAGE [ {stage.index} / {String(stages.length).padStart(2, '0')} ]
            </span>
          </div>

          <div className={styles.stickyStepperControls}>
            <button
              type="button"
              className={styles.miniStepperBtn}
              onClick={() => {
                if (activeStage > 0) handleStageCardSelect(activeStage - 1);
              }}
              disabled={activeStage === 0}
              aria-label="Previous sequence stage"
            >
              ← PREV
            </button>
            <button
              type="button"
              className={styles.miniStepperBtn}
              onClick={() => {
                if (activeStage < stages.length - 1) handleStageCardSelect(activeStage + 1);
              }}
              disabled={activeStage === stages.length - 1}
              aria-label="Next sequence stage"
            >
              NEXT →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className={styles.scrollerTrack}
          role="tablist"
          aria-label="Sequence method stage cards"
        >
          {stages.map((s, idx) => {
            const isActive = idx <= activeStage;
            const isCurrent = activeStage === idx;

            return (
              <button
                key={s.index}
                ref={isCurrent ? activeBtnRef : null}
                type="button"
                role="tab"
                id={`method-nav-tab-${s.index}`}
                className={`${styles.navCardBtn} ${
                  isActive ? styles.navCardActive : ''
                } ${isCurrent ? styles.navCardCurrent : ''}`}
                onClick={() => handleStageCardSelect(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                aria-selected={isCurrent}
                aria-controls={`stage-card-${s.index}`}
                aria-label={`Stage ${s.index}: ${s.name} - ${s.category}`}
              >
                <div className={styles.navCardTopRow}>
                  <span className={styles.navCardIndex}>{s.index}</span>
                  <span className={styles.navCardName}>{s.name}</span>
                  <span className={styles.navCardIndicator} aria-hidden="true" />
                </div>
                <div className={styles.navCardCategory}>// {s.category}</div>
                <p className={styles.navCardSummary}>{s.summary}</p>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ------------------------------------------------------------------
          2. Complete Vertical Sequence of Stage Cards
          Each card renders the full 5-level progressive disclosure hierarchy
          ------------------------------------------------------------------ */}
      <div className={styles.cardsStream} aria-live="polite">
        {stages.map((s, idx) => {
          const isCurrentActive = activeStage === idx;

          return (
            <article
              key={s.index}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              id={`stage-card-${s.index}`}
              data-stage-index={idx}
              className={`${styles.stageCard} ${isCurrentActive ? styles.stageCardActive : ''}`}
              aria-labelledby={`stage-heading-${s.index}`}
            >
              {/* Stage Header */}
              <header className={styles.detailHeader}>
                <div className={styles.stageTelemetryRow}>
                  <span className={styles.stageIndexPill}>STAGE // {s.index}</span>
                  <span className={styles.stageCategoryBadge}>CATEGORY // {s.category.toUpperCase()}</span>
                </div>
                <h3 id={`stage-heading-${s.index}`} className={styles.stageHeading}>
                  {s.name}.
                </h3>
                <p className={styles.stageSubHeadline}>{s.headline}</p>
              </header>

              <div className={styles.detailSectionsGrid}>
                {/* Level 1 & 2: 60-Second Mental Model */}
                <section className={styles.detailCard} aria-labelledby={`stage-mental-model-title-${s.index}`}>
                  <h4 id={`stage-mental-model-title-${s.index}`} className={styles.detailCardTitle}>
                    <span>01 //</span> 60-SECOND MENTAL MODEL
                  </h4>
                  <p className={styles.signalSummary}>{s.summary}</p>
                  <p className={styles.detailCardProse}>{s.mentalModel}</p>
                </section>

                {/* Level 3: Operational Mechanism & Verbs */}
                <section className={styles.detailCard} aria-labelledby={`stage-mechanism-title-${s.index}`}>
                  <h4 id={`stage-mechanism-title-${s.index}`} className={styles.detailCardTitle}>
                    <span>02 //</span> OPERATIONAL MECHANISM & ACTION CHECKLIST
                  </h4>
                  <div className={styles.mechanismList}>
                    {s.mechanismSteps.map((step, stepIdx) => (
                      <div key={stepIdx} className={styles.mechanismItem}>
                        <span className={styles.mechanismNumber}>{String(stepIdx + 1).padStart(2, '0')}.</span>
                        <div className={styles.mechanismBody}>
                          <strong className={styles.mechanismVerb}>{step.verb} —</strong>{' '}
                          <span className={styles.mechanismDesc}>{step.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Level 4: Guiding Questions & Scrutiny */}
                <section className={styles.detailCard} aria-labelledby={`stage-scrutiny-title-${s.index}`}>
                  <h4 id={`stage-scrutiny-title-${s.index}`} className={styles.detailCardTitle}>
                    <span>03 //</span> GUIDING QUESTIONS & EMPIRICAL SCRUTINY
                  </h4>
                  <ul className={styles.guidingList}>
                    {s.guidingQuestions.map((q, qIdx) => (
                      <li key={qIdx} className={styles.guidingItem}>
                        <span className={styles.guidingBullet} aria-hidden="true">
                          ↳
                        </span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Level 5: Architectural Deliverable & Artifact */}
                <section className={styles.outputBadgeCard} aria-labelledby={`stage-deliverable-title-${s.index}`}>
                  <div id={`stage-deliverable-title-${s.index}`} className={styles.outputLabel}>
                    04 // ARCHITECTURAL DELIVERABLE & EVIDENCE ARTIFACT
                  </div>
                  <p className={styles.outputText}>{s.contributedOutput}</p>
                </section>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
