'use client';

import React, { useState, useCallback, useRef } from 'react';
import { STUDIO_CONTENT } from '../../content';
import styles from './foundation-interactive-instrument.module.css';

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
 * FoundationInteractiveInstrument — Interactive visual instrument demonstrating
 * the four-stage evolutionary transformation: Binary → Sequence → Technology → Art.
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§38)
 * Architectural Rule: DEC-009 Mandatory UI Text Centralization
 */
export function FoundationInteractiveInstrument(): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState<StageIndex>(0);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const steps = STUDIO_CONTENT.etymology.steps;
  const currentStep = steps[activeIndex];

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (Math.max(0, prev - 1) as StageIndex));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (Math.min(steps.length - 1, prev + 1) as StageIndex));
  }, [steps.length]);

  const handleTabKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      let targetIndex = -1;

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        targetIndex = Math.max(0, currentIndex - 1);
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        targetIndex = Math.min(steps.length - 1, currentIndex + 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        targetIndex = 0;
      } else if (event.key === 'End') {
        event.preventDefault();
        targetIndex = steps.length - 1;
      }

      if (targetIndex >= 0 && targetIndex !== currentIndex) {
        setActiveIndex(targetIndex as StageIndex);
        tabButtonRefs.current[targetIndex]?.focus();
      }
    },
    [steps.length]
  );

  return (
    <div className={styles.instrumentContainer}>
      {/* 1. Left Controller & Narrative Panel */}
      <div className={styles.controllerPanel}>
        {/* Accessible Stage Selector Tabs */}
        <div
          className={styles.stageSelector}
          role="tablist"
          aria-label="Foundation Transformation Stages"
        >
          {steps.map((step, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={step.number}
                ref={(el) => {
                  tabButtonRefs.current[idx] = el;
                }}
                role="tab"
                id={`foundation-tab-${step.number}`}
                aria-selected={isSelected}
                aria-controls={`foundation-panel-${step.number}`}
                tabIndex={isSelected ? 0 : -1}
                className={`${styles.stageTab} ${isSelected ? styles.activeTab : ''}`}
                onClick={() => setActiveIndex(idx as StageIndex)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
              >
                <span className={styles.tabNumber}>{step.number}</span>
                <span className={styles.tabTerm}>{step.term}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Tabpanel */}
        <div
          role="tabpanel"
          id={`foundation-panel-${currentStep.number}`}
          aria-labelledby={`foundation-tab-${currentStep.number}`}
          className={styles.stagePanel}
        >
          <div className={styles.stageMeta}>
            <span className={styles.stageIndexBadge}>STAGE {currentStep.number} // 04</span>
            <span className={styles.stageSubtitle}>{currentStep.subtitle}</span>
          </div>

          <h3 className={styles.stageTitle}>{currentStep.term}</h3>
          <p className={styles.stageDescription}>{currentStep.description}</p>

          {/* Progressive Navigation Controls */}
          <div className={styles.navigationControls}>
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={styles.navButton}
              aria-label="Navigate to previous transformation stage"
            >
              <span aria-hidden="true">←</span> Previous
            </button>

            <div className={styles.stageIndicators} aria-hidden="true">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.indicatorDot} ${i === activeIndex ? styles.activeDot : ''}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === steps.length - 1}
              className={styles.navButton}
              aria-label="Navigate to next transformation stage"
            >
              Next <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Right Canvas: Persistent Shared SVG Visual Instrument */}
      <div className={styles.canvasWrapper}>
        <div className={styles.canvasHeader}>
          <span className={styles.canvasTelemetry}>
            INSTRUMENT // SYS.TRANSFORMATION.04
          </span>
          <span className={styles.canvasStageLabel}>
            STATE: {currentStep.term.toUpperCase()}
          </span>
        </div>

        <svg
          viewBox="0 0 800 500"
          className={styles.svgCanvas}
          role="img"
          aria-labelledby="foundation-visual-title foundation-visual-description"
          preserveAspectRatio="xMidYMid meet"
        >
          <title id="foundation-visual-title">
            Binary Sequence Technological Art Transformation Instrument
          </title>
          <desc id="foundation-visual-description">
            An interactive visual instrument demonstrating the evolution of discrete binary states
            into ordered execution sequences, engineered resilient systems, and an intentional
            human-centered art composition. Currently displaying {currentStep.term}: {currentStep.subtitle}.
          </desc>

          <defs>
            {/* Amber Radial Glow */}
            <radialGradient id="amberCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#D97706" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0B0C0E" stopOpacity="0" />
            </radialGradient>

            {/* Subtle Node Ambient Fill */}
            <radialGradient id="nodeBaseGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0B0C0E" stopOpacity="0.95" />
            </radialGradient>

            {/* Amber Active Node Fill */}
            <radialGradient id="nodeActiveGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#1E293B" stopOpacity="0.9" />
            </radialGradient>
          </defs>

          {/* =================================================================
              LAYER 1: Background Structural Grid & Coordinate Marks
              ================================================================= */}
          <g className={styles.gridGroup} opacity={activeIndex === 0 ? 0.9 : 0.25}>
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
            <g opacity={activeIndex === 0 ? 0.6 : 0.05}>
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
          <g className={styles.sequenceGroup} opacity={activeIndex === 1 ? 1 : activeIndex > 1 ? 0.2 : 0}>
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
              <g key={`seq-stream-${y}`}>
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
          <g className={styles.technologyGroup} opacity={activeIndex === 2 ? 1 : activeIndex === 3 ? 0.15 : 0}>
            {/* Module 1: Ingress / Gateway (Top-Left) */}
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
            <line x1="195" y1="255" x2="195" y2="255" stroke="#D97706" strokeWidth="1" opacity="0.6" />
            <line x1="605" y1="255" x2="605" y2="255" stroke="#D97706" strokeWidth="1" opacity="0.6" />

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
          <g className={styles.artGroup} opacity={activeIndex === 3 ? 1 : 0}>
            {/* Ambient Radial Bloom */}
            <circle cx="400" cy="245" r="220" fill="url(#amberCoreGlow)" opacity="0.35" />

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
              LAYER 5: Persistent Shared Visual Nodes (All 4 Stages)
              ================================================================= */}
          <g className={styles.nodesGroup}>
            {NODES.map((node, i) => {
              // Select target position based on current active stage
              const pos =
                activeIndex === 0
                  ? node.p0
                  : activeIndex === 1
                  ? node.p1
                  : activeIndex === 2
                  ? node.p2
                  : node.p3;

              const isBitOne = node.bit === 1;

              return (
                <g
                  key={node.id}
                  className={styles.nodeGroup}
                  style={{
                    transform: `translate(${pos[0]}px, ${pos[1]}px)`,
                  }}
                >
                  {/* Outer Node Halo & Border */}
                  <circle
                    className={styles.nodeCircle}
                    cx="0"
                    cy="0"
                    r={activeIndex === 3 ? (i < 8 ? 8 : 6) : 15}
                    fill={isBitOne ? 'url(#nodeActiveGradient)' : 'url(#nodeBaseGradient)'}
                    stroke={
                      activeIndex === 3
                        ? '#D97706'
                        : isBitOne
                        ? '#D97706'
                        : '#1E293B'
                    }
                    strokeWidth={isBitOne ? 1.5 : 1}
                  />

                  {/* Node Central Content: Binary Bit (Visible in Stages 0, 1, 2) */}
                  {activeIndex < 3 && (
                    <text
                      className={`${styles.nodeBitText} ${isBitOne ? styles.nodeBitTextActive : ''}`}
                      x="0"
                      y="0"
                    >
                      {node.bit}
                    </text>
                  )}

                  {/* Art State Spark (Visible in Stage 3) */}
                  {activeIndex === 3 && (
                    <circle
                      cx="0"
                      cy="0"
                      r="2"
                      fill={isBitOne ? '#F6F5F0' : '#D97706'}
                    />
                  )}
                </g>
              );
            })}
          </g>
        </svg>

        <div className={styles.canvasFooter}>
          <span className={styles.canvasFooterText}>
            TRANSFORMATION PROGRESSION: {currentStep.number} OF 04
          </span>
          <span className={styles.canvasModeIndicator}>
            {activeIndex === 0 && 'DISCRETE COMPUTATION FIELD'}
            {activeIndex === 1 && 'ORDERED EXECUTION PIPELINE'}
            {activeIndex === 2 && 'OBSERVABLE RESILIENT SYSTEM'}
            {activeIndex === 3 && 'HARMONIZED SENSORY APERTURE'}
          </span>
        </div>
      </div>
    </div>
  );
}
