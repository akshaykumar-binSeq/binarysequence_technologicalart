'use client';

import React, { useRef } from 'react';
import { HOME_CONTENT } from '../../content';
import { useContentProgression } from '@/core/interaction';
import styles from './sequence-scrubber.module.css';

/**
 * 11-Stage Sequence Method Interactive Scrubber Component
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (§7.3, §3)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§25, §27, §40)
 * Authority: Level 4 DDD Architectural Guidelines (§5.4)
 *
 * Implements:
 * - Content-aware stage progression driven naturally by viewport scroll
 * - Accessible keyboard scrubbing within the tablist (ArrowLeft/Right, Home/End)
 * - Touch-friendly stage step selection with safe manual override
 * - Uninterrupted control button focus and CLS = 0 reserved inspector card
 * - ZERO scroll traps: uninterrupted document scrolling in both directions
 */
export function SequenceScrubber(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const { stages, controls } = HOME_CONTENT.sequenceOverview;

  const {
    activeStage: activeIndex,
    handleStageSelect,
    handlePrev,
    handleNext,
    handleTabKeyDown,
  } = useContentProgression({
    stageCount: stages.length,
    initialStage: 0,
    containerRef,
    framing: {
      clearanceDesktop: 24,
      clearanceMobile: 16,
    },
    scrollProgression: {
      enabled: true,
      startOffsetRatio: 0.65,
      endOffsetRatio: 0.25,
    },
  });

  const currentStage = stages[activeIndex];

  return (
    <div ref={containerRef} className={styles.scrubberTrack}>
      <div
        className={styles.scrubberContainer}
        aria-label={controls.scrubberAriaLabel}
      >
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
              onClick={() => handleStageSelect(idx, false)}
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
            onClick={handlePrev}
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
            onClick={handleNext}
            disabled={activeIndex === stages.length - 1}
            aria-label={controls.nextStage}
          >
            {controls.nextStage} →
          </button>
        </div>
      </div>
    </div>
  </div>
);
}
