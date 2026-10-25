'use client';

import React, { useRef, useCallback } from 'react';
import { STUDIO_CONTENT } from '../../content';
import { useContentProgression } from '@/core/interaction';
import styles from './foundation-living-narrative.module.css';

type StageIndex = 0 | 1 | 2 | 3;

interface NodeDef {
  id: string;
  bit: 0 | 1;
  tag: string;
  // Deterministic positions across 4 stages [x, y]
  p0: [number, number]; // 01 Binary (4x4 Matrix)
  p1: [number, number]; // 02 Sequence (4 Pipeline Lanes)
  p2: [number, number]; // 03 Technology (4 System Modules)
  p3: [number, number]; // 04 Art (Concentric Resonant Halo)
}

/**
 * 16 Stable Visual Nodes with deterministic coordinate geometry across all 4 stages.
 * Canvas: 800 × 500 (Center: 400, 245)
 */
const NODES: NodeDef[] = [
  // Quadrant 1 / Row 0
  { id: 'n00', bit: 0, tag: 'B00', p0: [230, 110], p1: [140, 120], p2: [150, 130], p3: [660, 245] },
  { id: 'n01', bit: 1, tag: 'B01', p0: [340, 110], p1: [310, 120], p2: [230, 130], p3: [584, 365] },
  { id: 'n02', bit: 1, tag: 'B02', p0: [460, 110], p1: [490, 120], p2: [570, 130], p3: [400, 405] },
  { id: 'n03', bit: 0, tag: 'B03', p0: [570, 110], p1: [660, 120], p2: [650, 130], p3: [216, 365] },

  // Quadrant 2 / Row 1
  { id: 'n04', bit: 1, tag: 'B04', p0: [230, 200], p1: [140, 200], p2: [150, 210], p3: [520, 278] },
  { id: 'n05', bit: 0, tag: 'B05', p0: [340, 200], p1: [310, 200], p2: [230, 210], p3: [450, 323] },
  { id: 'n06', bit: 1, tag: 'B06', p0: [460, 200], p1: [490, 200], p2: [570, 210], p3: [350, 323] },
  { id: 'n07', bit: 1, tag: 'B07', p0: [570, 200], p1: [660, 200], p2: [650, 210], p3: [280, 278] },

  // Quadrant 3 / Row 2
  { id: 'n08', bit: 0, tag: 'B08', p0: [230, 290], p1: [140, 280], p2: [150, 300], p3: [140, 245] },
  { id: 'n09', bit: 1, tag: 'B09', p0: [340, 290], p1: [310, 280], p2: [230, 300], p3: [216, 125] },
  { id: 'n10', bit: 0, tag: 'B10', p0: [460, 290], p1: [490, 280], p2: [570, 300], p3: [400, 85] },
  { id: 'n11', bit: 1, tag: 'B11', p0: [570, 290], p1: [660, 280], p2: [650, 300], p3: [584, 125] },

  // Quadrant 4 / Row 3
  { id: 'n12', bit: 1, tag: 'B12', p0: [230, 380], p1: [140, 360], p2: [150, 380], p3: [280, 212] },
  { id: 'n13', bit: 0, tag: 'B13', p0: [340, 380], p1: [310, 360], p2: [230, 380], p3: [350, 167] },
  { id: 'n14', bit: 1, tag: 'B14', p0: [460, 380], p1: [490, 360], p2: [570, 380], p3: [450, 167] },
  { id: 'n15', bit: 0, tag: 'B15', p0: [570, 380], p1: [660, 360], p2: [650, 380], p3: [520, 212] },
];

/**
 * FoundationLivingNarrative — Scroll-driven living visual narrative demonstrating
 * the four-stage evolutionary transformation: Binary → Sequence → Technology → Art.
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§38)
 * Architectural Rule: DEC-009 Mandatory UI Text Centralization
 */
export function FoundationLivingNarrative(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const steps = STUDIO_CONTENT.etymology.steps;

  const [previousStage, setPreviousStage] = React.useState<number | null>(null);
  const prevStageRef = useRef<number>(0);

  const {
    activeStage,
    handleStageSelect,
    handlePrev,
    handleNext,
  } = useContentProgression({
    stageCount: steps.length,
    containerRef,
    trackRef,
    onStageChange: (newStage) => {
      setPreviousStage(prevStageRef.current);
      prevStageRef.current = newStage;
    },
    framing: {
      targetIdResolver: (stageIdx) => `foundation-stage-0${stageIdx + 1}`,
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

  const currentStep = steps[activeStage as StageIndex];

  // Sync active stage on content-wise swipe / horizontal scroll
  const handleTrackScroll = useCallback(() => {
    if (!trackRef.current) return;
    const clientWidth = trackRef.current.clientWidth;
    if (clientWidth === 0) return;
    const newIdx = Math.round(trackRef.current.scrollLeft / clientWidth);
    if (newIdx >= 0 && newIdx <= 3 && newIdx !== activeStage) {
      handleStageSelect(newIdx, false);
    }
  }, [activeStage, handleStageSelect]);

  // Keyboard navigation for stage tabs and track
  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent, currentIndex: number) => {
      let targetIndex = -1;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        targetIndex = Math.max(0, currentIndex - 1);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        targetIndex = Math.min(steps.length - 1, currentIndex + 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetIndex = steps.length - 1;
      }

      if (targetIndex >= 0 && targetIndex !== currentIndex) {
        handleStageSelect(targetIndex, true);
        tabRefs.current[targetIndex]?.focus();
      }
    },
    [handleStageSelect, steps.length]
  );

  return (
    <div ref={containerRef} className={styles.storyTrack}>
      <div className={styles.storyContainer}>
        {/* 1. Narrative Column: Content-Wise Stage Navigator & Track */}
      <div className={styles.narrativeColumn}>
        {/* Stage Progress Navigator Tabs */}
        <nav className={styles.stageProgressNav} aria-label="Foundation Transformation Progress">
          <div className={styles.stageNavList} role="tablist">
            {steps.map((step, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={step.number}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`stage-nav-tab-${step.number}`}
                  aria-selected={isActive}
                  aria-controls={`foundation-stage-${step.number}`}
                  className={`${styles.stageNavButton} ${isActive ? styles.activeNavButton : ''}`}
                  onClick={() => handleStageSelect(idx as StageIndex, true)}
                  onKeyDown={(e) => handleTabKeyDown(e, idx)}
                >
                  <span className={styles.stageNavNumber}>{step.number}</span>
                  <span className={styles.stageNavLabel}>{step.term}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Content-Wise Horizontal Scroll-Snap Narrative Track */}
        <div
          ref={trackRef}
          className={styles.narrativeTrack}
          onScroll={handleTrackScroll}
          onKeyDown={(e) => handleTabKeyDown(e, activeStage)}
          role="region"
          aria-label="Foundation Transformation Content Track"
          tabIndex={0}
        >
          {steps.map((step, idx) => {
            const isActive = activeStage === idx;
            return (
              <article
                key={step.number}
                id={`foundation-stage-${step.number}`}
                data-stage-index={idx}
                data-active={isActive}
                aria-current={isActive ? 'step' : undefined}
                className={`${styles.narrativeStep} ${
                  isActive ? styles.activeStep : styles.dormantStep
                } ${
                  isActive && previousStage !== null && activeStage > previousStage
                    ? styles.stepTransitionForward
                    : isActive && previousStage !== null && activeStage < previousStage
                    ? styles.stepTransitionBackward
                    : ''
                }`}
              >
                <div className={styles.stepHeader}>
                  <span className={styles.stepBadge}>STAGE {step.number} // 04</span>
                  <span className={styles.stepSubtitle}>{step.subtitle}</span>
                </div>

                <h3 className={styles.stepTitle}>{step.term}</h3>
                <p className={styles.stepDescription}>{step.description}</p>

                <div className={styles.stepTelemetry}>
                  <span className={styles.telemetryTag}>
                    {idx === 0 && 'CLARITY // DETERMINISTIC OPERATIONAL INTEGRITY'}
                    {idx === 1 && 'STRUCTURE // CHRONOLOGICAL EVENT PIPELINES'}
                    {idx === 2 && 'OBSERVABLE // RESILIENT DISTRIBUTED SYSTEM'}
                    {idx === 3 && 'HARMONY // HUMAN-CENTERED SENSORY EXPERIENCE'}
                  </span>
                  <span className={styles.stepIndicatorState}>
                    {isActive ? '● ACTIVE STAGE' : '○ SWIPE OR SELECT'}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sequential Stepper Controls */}
        <div className={styles.stageActions}>
          <button
            type="button"
            className={styles.stageStepButton}
            onClick={handlePrev}
            disabled={activeStage === 0}
            aria-label="Navigate to previous stage"
          >
            ← PREV
          </button>

          <div className={styles.stagePipIndicators} role="tablist" aria-label="Transformation Stages">
            {steps.map((st, pIdx) => (
              <button
                key={`pip-${st.number}`}
                type="button"
                role="tab"
                aria-selected={activeStage === pIdx}
                aria-label={`Jump to Stage ${st.number} ${st.term}`}
                className={`${styles.stagePip} ${activeStage === pIdx ? styles.activePip : ''}`}
                onClick={() => handleStageSelect(pIdx as StageIndex, true)}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.stageStepButton}
            onClick={handleNext}
            disabled={activeStage === steps.length - 1}
            aria-label="Navigate to next stage"
          >
            NEXT →
          </button>
        </div>
      </div>

      {/* 2. Persistent Visual Instrument Column (Sticky on both Mobile & Desktop) */}
      <div className={styles.visualColumn}>
        <div className={styles.stickyVisualFrame}>
          {/* HUD Header */}
          <div className={styles.frameHeader}>
            <span className={styles.frameTelemetry}>
              LIVING INSTRUMENT // SYS.GEO.04
            </span>
            <span key={`hud-state-${activeStage}`} className={styles.frameStageLabel}>
              STATE: {currentStep.term.toUpperCase()}
            </span>
          </div>

          {/* Persistent Scalable Vector Geometry Canvas */}
          <svg
            viewBox="0 0 800 500"
            className={styles.svgCanvas}
            role="img"
            aria-labelledby="living-visual-title living-visual-description"
            preserveAspectRatio="xMidYMid meet"
          >
            <title id="living-visual-title">
              Binary Sequence Technological Art Scroll-Driven Living Foundation
            </title>
            <desc id="living-visual-description">
              A continuous, scroll-driven visual instrument demonstrating the evolution of discrete
              binary units into ordered execution pipelines, an engineered resilient architecture,
              and a human-centered art composition. Currently displaying {currentStep.term}: {currentStep.subtitle}.
            </desc>

            <defs>
              {/* Amber Core Glow */}
              <radialGradient id="livingAmberCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#D97706" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0B0C0E" stopOpacity="0" />
              </radialGradient>

              {/* Node Ambient Base Fill */}
              <radialGradient id="livingNodeBaseGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0B0C0E" stopOpacity="0.95" />
              </radialGradient>

              {/* Amber Active Fill */}
              <radialGradient id="livingNodeActiveGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1E293B" stopOpacity="0.9" />
              </radialGradient>
            </defs>

            {/* =================================================================
                LAYER 1: Background Structural Grid & Coordinate Marks
                ================================================================= */}
            <g
              className={styles.gridGroup}
              style={{
                opacity: activeStage === 0 ? 0.9 : 0.22,
                transition: 'opacity 1.15s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Outer Coordinate Bounds */}
              <rect
                x="50"
                y="40"
                width="700"
                height="410"
                fill="none"
                stroke="#1E293B"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              {/* Coordinate Crosshairs */}
              <line x1="400" y1="30" x2="400" y2="460" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="2 4" />
              <line x1="40" y1="245" x2="760" y2="245" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="2 4" />

              {/* Binary Matrix Latent Grid (Active in Stage 0) */}
              <g
                style={{
                  opacity: activeStage === 0 ? 0.6 : 0.05,
                  transition: 'opacity 1.15s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <line x1="230" y1="100" x2="230" y2="390" stroke="#F6F5F0" strokeWidth="0.5" strokeOpacity="0.15" />
                <line x1="340" y1="100" x2="340" y2="390" stroke="#F6F5F0" strokeWidth="0.5" strokeOpacity="0.15" />
                <line x1="460" y1="100" x2="460" y2="390" stroke="#F6F5F0" strokeWidth="0.5" strokeOpacity="0.15" />
                <line x1="570" y1="100" x2="570" y2="390" stroke="#F6F5F0" strokeWidth="0.5" strokeOpacity="0.15" />
                <line x1="220" y1="110" x2="580" y2="110" stroke="#F6F5F0" strokeWidth="0.5" strokeOpacity="0.15" />
                <line x1="220" y1="200" x2="580" y2="200" stroke="#F6F5F0" strokeWidth="0.5" strokeOpacity="0.15" />
                <line x1="220" y1="290" x2="580" y2="290" stroke="#F6F5F0" strokeWidth="0.5" strokeOpacity="0.15" />
                <line x1="220" y1="380" x2="580" y2="380" stroke="#F6F5F0" strokeWidth="0.5" strokeOpacity="0.15" />
              </g>

              {/* Telemetry Corner Brackets */}
              <path d="M 45 55 L 45 45 L 55 45" fill="none" stroke="#D97706" strokeWidth="1.2" opacity="0.6" />
              <path d="M 755 55 L 755 45 L 745 45" fill="none" stroke="#D97706" strokeWidth="1.2" opacity="0.6" />
              <path d="M 45 435 L 45 445 L 55 445" fill="none" stroke="#D97706" strokeWidth="1.2" opacity="0.6" />
              <path d="M 755 435 L 755 445 L 745 445" fill="none" stroke="#D97706" strokeWidth="1.2" opacity="0.6" />
            </g>

            {/* =================================================================
                LAYER 2: Sequence Execution Rails (Active in Stage 1)
                ================================================================= */}
            <g
              className={styles.sequenceGroup}
              style={{
                opacity: activeStage === 1 ? 1 : activeStage > 1 ? 0.18 : 0,
                transition: 'opacity 1.15s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: activeStage === 1 ? 'auto' : 'none',
              }}
            >
              {/* 4 Vertical Execution Columns */}
              <line x1="140" y1="90" x2="140" y2="390" stroke="#D97706" strokeWidth="1.2" strokeOpacity="0.4" />
              <line x1="310" y1="90" x2="310" y2="390" stroke="#D97706" strokeWidth="1.2" strokeOpacity="0.4" />
              <line x1="490" y1="90" x2="490" y2="390" stroke="#D97706" strokeWidth="1.2" strokeOpacity="0.4" />
              <line x1="660" y1="90" x2="660" y2="390" stroke="#D97706" strokeWidth="1.2" strokeOpacity="0.4" />

              {/* Pipeline Stage Column Labels */}
              <text x="140" y="80" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="var(--font-technical)" letterSpacing="0.08em">
                01 // INTAKE
              </text>
              <text x="310" y="80" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="var(--font-technical)" letterSpacing="0.08em">
                02 // LOGIC
              </text>
              <text x="490" y="80" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="var(--font-technical)" letterSpacing="0.08em">
                03 // BUS
              </text>
              <text x="660" y="80" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="var(--font-technical)" letterSpacing="0.08em">
                04 // EGRESS
              </text>

              {/* Horizontal Chronological Connector Streams */}
              {[120, 200, 280, 360].map((y) => (
                <g key={`living-stream-${y}`}>
                  <line
                    x1="140"
                    y1={y}
                    x2="660"
                    y2={y}
                    stroke="#D97706"
                    strokeWidth="1"
                    strokeOpacity="0.35"
                    className={styles.executionLine}
                  />
                  {/* Directional Flow Markers */}
                  <polygon points={`225,${y - 3} 230,${y} 225,${y + 3}`} fill="#D97706" opacity="0.8" />
                  <polygon points={`400,${y - 3} 405,${y} 400,${y + 3}`} fill="#D97706" opacity="0.8" />
                  <polygon points={`575,${y - 3} 580,${y} 575,${y + 3}`} fill="#D97706" opacity="0.8" />
                </g>
              ))}
            </g>

            {/* =================================================================
                LAYER 3: Technology Architectural Modules (Active in Stage 2)
                ================================================================= */}
            <g
              className={styles.technologyGroup}
              style={{
                opacity: activeStage === 2 ? 1 : activeStage === 3 ? 0.12 : 0,
                transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: activeStage === 2 ? 'auto' : 'none',
              }}
            >
              {/* Module 1: Ingress / Security (Top-Left) */}
              <rect x="105" y="85" width="180" height="170" rx="4" fill="#12151B" stroke="#1E293B" strokeWidth="1" opacity="0.85" />
              <text x="115" y="103" fill="#D97706" fontSize="9" fontFamily="var(--font-technical)" letterSpacing="0.1em">
                [INGRESS // SECURITY]
              </text>
              <text x="115" y="245" fill="#94A3B8" fontSize="8" fontFamily="var(--font-technical)">
                ZERO TRUST // TLS
              </text>

              {/* Module 2: Domain Engine (Top-Right) */}
              <rect x="515" y="85" width="180" height="170" rx="4" fill="#12151B" stroke="#1E293B" strokeWidth="1" opacity="0.85" />
              <text x="525" y="103" fill="#D97706" fontSize="9" fontFamily="var(--font-technical)" letterSpacing="0.1em">
                [DOMAIN // ENGINE]
              </text>
              <text x="525" y="245" fill="#94A3B8" fontSize="8" fontFamily="var(--font-technical)">
                DDD KERNEL // BOUNDED
              </text>

              {/* Module 3: Event Stream (Bottom-Left) */}
              <rect x="105" y="255" width="180" height="170" rx="4" fill="#12151B" stroke="#1E293B" strokeWidth="1" opacity="0.85" />
              <text x="115" y="273" fill="#D97706" fontSize="9" fontFamily="var(--font-technical)" letterSpacing="0.1em">
                [STREAM // BUS]
              </text>
              <text x="115" y="415" fill="#94A3B8" fontSize="8" fontFamily="var(--font-technical)">
                OBSERVABLE // TELEMETRY
              </text>

              {/* Module 4: Data Authority (Bottom-Right) */}
              <rect x="515" y="255" width="180" height="170" rx="4" fill="#12151B" stroke="#1E293B" strokeWidth="1" opacity="0.85" />
              <text x="525" y="273" fill="#D97706" fontSize="9" fontFamily="var(--font-technical)" letterSpacing="0.1em">
                [DATA // AUTHORITY]
              </text>
              <text x="525" y="415" fill="#94A3B8" fontSize="8" fontFamily="var(--font-technical)">
                RESILIENT // ACID
              </text>

              {/* Central System Bus Interconnect Rails */}
              <line x1="285" y1="170" x2="515" y2="170" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <line x1="285" y1="340" x2="515" y2="340" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

              {/* Central Resilience Diamond Hub */}
              <g transform="translate(400, 255)">
                <polygon points="0,-25 25,0 0,25 -25,0" fill="#0B0C0E" stroke="#D97706" strokeWidth="1.2" />
                <circle cx="0" cy="0" r="4" fill="#D97706" />
                <text x="0" y="38" textAnchor="middle" fill="#F6F5F0" fontSize="8" fontFamily="var(--font-technical)" letterSpacing="0.1em">
                  SYSTEM ROUTER
                </text>
              </g>
            </g>

            {/* =================================================================
                LAYER 4: Art Concentric Resonant Aperture (Active in Stage 3)
                ================================================================= */}
            <g
              className={styles.artGroup}
              style={{
                opacity: activeStage === 3 ? 1 : 0,
                transform: activeStage === 3 ? 'scale(1)' : 'scale(0.88)',
                transformOrigin: '400px 245px',
                transition: 'opacity 1.25s cubic-bezier(0.16, 1, 0.3, 1), transform 1.25s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: activeStage === 3 ? 'auto' : 'none',
              }}
            >
              {/* Ambient Radial Bloom */}
              <circle cx="400" cy="245" r="220" fill="url(#livingAmberCoreGlow)" opacity="0.38" />

              {/* Concentric Golden Aperture Rings */}
              <circle cx="400" cy="245" r="170" fill="none" stroke="#D97706" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 8" />
              <circle cx="400" cy="245" r="115" fill="none" stroke="#D97706" strokeWidth="1" strokeOpacity="0.4" />
              <circle cx="400" cy="245" r="65" fill="none" stroke="#D97706" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="6 4" />
              <circle cx="400" cy="245" r="30" fill="none" stroke="#F6F5F0" strokeWidth="1.5" strokeOpacity="0.8" />

              {/* Harmonic Rotating Radial Ticks */}
              <g className={styles.aperturePulse}>
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                  <line
                    key={`deg-${deg}`}
                    x1="400"
                    y1="130"
                    x2="400"
                    y2="140"
                    stroke="#D97706"
                    strokeWidth="1"
                    strokeOpacity="0.6"
                    transform={`rotate(${deg} 400 245)`}
                  />
                ))}
              </g>

              {/* Radiant Golden Center Jewel */}
              <circle cx="400" cy="245" r="6" fill="#D97706" filter="drop-shadow(0 0 8px #D97706)" />
              <circle cx="400" cy="245" r="2.5" fill="#F6F5F0" />

              <text x="400" y="445" textAnchor="middle" fill="#D97706" fontSize="10" fontFamily="var(--font-technical)" letterSpacing="0.14em">
                SENSORY HARMONY // RESOLVED IN EXPERIENCE
              </text>
            </g>

            {/* =================================================================
                LAYER 5: Persistent Shared Visual Nodes (All 4 Stages with Organic Wave Motion)
                ================================================================= */}
            <g className={styles.nodesGroup}>
              {NODES.map((node, i) => {
                const pos =
                  activeStage === 0
                    ? node.p0
                    : activeStage === 1
                    ? node.p1
                    : activeStage === 2
                    ? node.p2
                    : node.p3;

                const isBitOne = node.bit === 1;

                return (
                  <g
                    key={node.id}
                    className={styles.nodeGroup}
                    style={{
                      transform: `translate3d(${pos[0]}px, ${pos[1]}px, 0)`,
                      transitionProperty: 'transform, opacity',
                      transitionDuration: '1.15s',
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                      transitionDelay: `${i * 24}ms`,
                    }}
                  >
                    {/* Outer Node Halo & Border */}
                    <circle
                      className={styles.nodeCircle}
                      cx="0"
                      cy="0"
                      r={activeStage === 3 ? (i < 8 ? 7.5 : 5.5) : 15}
                      fill={isBitOne ? 'url(#livingNodeActiveGradient)' : 'url(#livingNodeBaseGradient)'}
                      stroke={
                        activeStage === 3
                          ? '#D97706'
                          : isBitOne
                          ? '#D97706'
                          : '#1E293B'
                      }
                      strokeWidth={activeStage === 3 ? 1.2 : isBitOne ? 1.5 : 1}
                      style={{
                        transition: 'r 1.1s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.9s ease, fill 0.9s ease, stroke-width 0.9s ease',
                        transitionDelay: `${i * 20}ms`,
                      }}
                    />

                    {/* Node Central Content: Binary Bit (Smoothly Dissolves in Stage 3) */}
                    <text
                      className={`${styles.nodeBitText} ${isBitOne ? styles.nodeBitTextActive : ''}`}
                      x="0"
                      y="0"
                      style={{
                        opacity: activeStage < 3 ? 1 : 0,
                        transform: activeStage < 3 ? 'scale(1)' : 'scale(0.35)',
                        transformOrigin: '0px 0px',
                        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                        transitionDelay: activeStage === 3 ? `${(15 - i) * 12}ms` : `${i * 18}ms`,
                        pointerEvents: 'none',
                      }}
                    >
                      {node.bit}
                    </text>

                    {/* Art State Spark (Smoothly Blooms in Stage 3) */}
                    <circle
                      className={styles.nodeSpark}
                      cx="0"
                      cy="0"
                      r={activeStage === 3 ? 2.5 : 0}
                      fill={isBitOne ? '#F6F5F0' : '#D97706'}
                      style={{
                        opacity: activeStage === 3 ? 1 : 0,
                        transform: activeStage === 3 ? 'scale(1)' : 'scale(0)',
                        transformOrigin: '0px 0px',
                        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), r 0.8s ease',
                        transitionDelay: activeStage === 3 ? `${i * 22}ms` : '0ms',
                        pointerEvents: 'none',
                      }}
                    />
                  </g>
                );
              })}
            </g>
          </svg>

          {/* HUD Footer with Status Telemetry & Quick-Switch Stage Pills */}
          <div className={styles.frameFooter}>
            <div className={styles.frameFooterLeft}>
              <span className={styles.frameFooterText}>
                TRANSFORMATION: {currentStep.number} OF 04
              </span>
              <span key={`hud-indicator-${activeStage}`} className={styles.frameModeIndicator}>
                {activeStage === 0 && 'DISCRETE COMPUTATION FIELD'}
                {activeStage === 1 && 'ORDERED EXECUTION PIPELINE'}
                {activeStage === 2 && 'OBSERVABLE RESILIENT SYSTEM'}
                {activeStage === 3 && 'HARMONIZED SENSORY APERTURE'}
              </span>
            </div>

            {/* Quick Interactive Stage Selector on Sticky Instrument */}
            <div className={styles.framePills} role="tablist" aria-label="Direct Stage Selector">
              {steps.map((st, sIdx) => {
                const isPillActive = activeStage === sIdx;
                return (
                  <button
                    key={`frame-pill-${st.number}`}
                    type="button"
                    role="tab"
                    aria-selected={isPillActive}
                    aria-label={`Jump directly to Stage ${st.number} ${st.term}`}
                    className={`${styles.framePill} ${isPillActive ? styles.framePillActive : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStageSelect(sIdx as StageIndex, true);
                    }}
                  >
                    {st.number}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
