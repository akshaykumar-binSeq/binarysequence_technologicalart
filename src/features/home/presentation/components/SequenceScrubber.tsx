'use client';

import { useState, useCallback, useRef } from 'react';
import { HOME_CONTENT } from '../../content';
import styles from './sequence-scrubber.module.css';

/**
 * 11-Stage Sequence Method Interactive Scrubber Component
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (§7.3, §3)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§25, §27, §40)
 * Authority: Level 4 DDD Architectural Guidelines (§5.4)
 *
 * Implements accessible keyboard scrubbing within the tablist (ArrowLeft/Right, Home/End),
 * touch-friendly stage step selection, un-interrupted control button focus,
 * and a dimensionally reserved inspector panel ensuring visual layout stability.
 */
export function SequenceScrubber() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const { stages, controls } = HOME_CONTENT.sequenceOverview;
  const currentStage = stages[activeIndex];

  // Control actions: update active index without stealing focus from the clicked button
  const handlePreviousClick = useCallback(() => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNextClick = useCallback(() => {
    setActiveIndex((prev) => Math.min(stages.length - 1, prev + 1));
  }, [stages.length]);

  // Tablist keyboard navigation: scoped strictly to tab buttons
  const handleTabKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      let targetIndex = -1;

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        targetIndex = Math.max(0, currentIndex - 1);
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        targetIndex = Math.min(stages.length - 1, currentIndex + 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        targetIndex = 0;
      } else if (event.key === 'End') {
        event.preventDefault();
        targetIndex = stages.length - 1;
      }

      if (targetIndex >= 0 && targetIndex !== currentIndex) {
        setActiveIndex(targetIndex);
        stepButtonRefs.current[targetIndex]?.focus();
      }
    },
    [stages.length]
  );

  return (
    <div className={styles.scrubberContainer} aria-label={controls.scrubberAriaLabel}>
      {/* 11-Step Interactive Stage Track (WAI-ARIA Tablist) */}
      <div
        className={styles.trackGrid}
        role="tablist"
        aria-label={controls.scrubberAriaLabel}
      >
        {stages.map((stage, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={stage.index}
              ref={(el) => {
                stepButtonRefs.current[idx] = el;
              }}
              type="button"
              role="tab"
              id={`stage-tab-${stage.index}`}
              aria-selected={isActive}
              aria-controls="stage-inspector-panel"
              tabIndex={isActive ? 0 : -1}
              className={`${styles.stepButton} ${isActive ? styles.stepActive : ''}`}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => handleTabKeyDown(e, idx)}
            >
              <span className={styles.stepIndex}>{stage.index}</span>
              <span className={styles.stepName}>{stage.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Inspector Card (WAI-ARIA Tabpanel) */}
      <div
        id="stage-inspector-panel"
        role="tabpanel"
        aria-labelledby={`stage-tab-${currentStage.index}`}
        tabIndex={0}
        className={styles.inspectorCard}
      >
        <div className={styles.inspectorHeader}>
          <div className={styles.badgeRow}>
            <span className={styles.activeBadge}>{controls.activeStageBadge}</span>
            <span className={styles.stageFraction}>
              {currentStage.index} / {stages.length.toString().padStart(2, '0')}
            </span>
          </div>
          <h3 className={styles.stageTitle}>
            {currentStage.index}. {currentStage.name} —{' '}
            <span className={styles.stageSubtitle}>{currentStage.subtitle}</span>
          </h3>
        </div>

        <p className={styles.stageDesc}>{currentStage.description}</p>

        {/* Scrubber Navigation Controls */}
        <div className={styles.controlsBar}>
          <button
            type="button"
            className={styles.navButton}
            onClick={handlePreviousClick}
            disabled={activeIndex === 0}
            aria-label={controls.previousStage}
          >
            ← {controls.previousStage}
          </button>

          <span className={styles.indicatorText} aria-live="polite">
            Stage {activeIndex + 1} of {stages.length}: {currentStage.name}
          </span>

          <button
            type="button"
            className={styles.navButton}
            onClick={handleNextClick}
            disabled={activeIndex === stages.length - 1}
            aria-label={controls.nextStage}
          >
            {controls.nextStage} →
          </button>
        </div>
      </div>
    </div>
  );
}
