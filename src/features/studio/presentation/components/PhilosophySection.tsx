'use client';

import React, { useState, useRef } from 'react';
import { STUDIO_CONTENT } from '../../content';
import { useContentProgression } from '@/core/interaction';
import styles from './philosophy-section.module.css';

/**
 * PhilosophySection — Presentation of Core Philosophy with scroll-triggered
 * conceptual transformation between Structured Clarity and Fragmented Sprawl.
 *
 * Section ID: #philosophy (Preserved)
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Architectural Rule: DEC-009 Mandatory UI Text Centralization
 */
export function PhilosophySection(): React.JSX.Element {
  const consoleRef = useRef<HTMLDivElement>(null);
  const [highlightedArg, setHighlightedArg] = useState<number | null>(null);

  const { eyebrow, headline, lead, arguments: args } = STUDIO_CONTENT.corePhilosophy;

  const {
    activeStage,
    handleStageSelect,
    handleTabKeyDown,
  } = useContentProgression({
    stageCount: 2,
    initialStage: 0,
    containerRef: consoleRef,
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

  const isStructured = activeStage === 0;

  return (
    <section id="philosophy" className={styles.section} aria-labelledby="philosophy-heading">
      <div className="bs-container">
        <div className={styles.sectionInner}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="philosophy-heading" className={styles.headline}>
              {headline}
            </h2>
            <p className={styles.leadText}>{lead}</p>
          </div>

          {/* Visual Transformation Console: Complexity to Clarity */}
          <div ref={consoleRef} className={styles.consoleTrack}>
            <div className={styles.visualConsole}>
              <div className={styles.consoleHeader}>
              <div className={styles.consoleTelemetry}>
                <span className={styles.telemetryPip} />
                <span className={styles.telemetryTag}>
                  CONCEPTUAL ARCHITECTURE // {isStructured ? 'ORDERED DISCIPLINE' : 'FRAGMENTED SPRAWL'}
                </span>
              </div>

              {/* Architecture Comparison View Mode Toggle */}
              <div className={styles.toggleGroup} role="group" aria-label="Architecture Comparison View">
                <button
                  type="button"
                  data-mode="structured"
                  aria-pressed={isStructured}
                  className={`${styles.toggleButton} ${isStructured ? styles.toggleActive : ''}`}
                  onClick={() => handleStageSelect(0, false)}
                  onKeyDown={(e) => handleTabKeyDown(e, isStructured ? 0 : 1)}
                >
                  Structured Clarity
                </button>
                <button
                  type="button"
                  data-mode="fragmented"
                  aria-pressed={!isStructured}
                  className={`${styles.toggleButton} ${!isStructured ? styles.toggleActive : ''}`}
                  onClick={() => handleStageSelect(1, false)}
                  onKeyDown={(e) => handleTabKeyDown(e, isStructured ? 0 : 1)}
                >
                  Fragmented Sprawl
                </button>
              </div>
            </div>

            {/* Restrained SVG Vector Illustration: Fragmented vs. Structured */}
            <div className={styles.svgFrame}>
              <svg
                viewBox="0 0 800 320"
                className={styles.svgDiagram}
                role="img"
                aria-label={`Architectural diagram illustrating ${
                  isStructured
                    ? 'structured system clarity where complexity is absorbed by architecture'
                    : 'fragmented arrangement of uncoordinated dependencies'
                }`}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="philGlowAmber" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D97706" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0B0C0E" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Grid Background Coordinates */}
                <g className={styles.gridLayer} opacity="0.3">
                  <line x1="40" y1="160" x2="760" y2="160" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="200" y1="20" x2="200" y2="300" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="400" y1="20" x2="400" y2="300" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="600" y1="20" x2="600" y2="300" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />
                </g>

                {/* State A: Structured Clarity */}
                <g className={`${styles.stateGroup} ${isStructured ? styles.stateVisible : styles.stateHidden}`}>
                  {/* Bounded Domain Modules */}
                  <rect x="80" y="60" width="180" height="200" rx="4" fill="#12151B" stroke="#1E293B" strokeWidth="1" />
                  <text x="95" y="85" fill="#94A3B8" fontSize="10" fontFamily="var(--font-technical)" letterSpacing="0.08em">
                    [DOMAIN CONTEXT]
                  </text>
                  <text x="95" y="110" fill="#F6F5F0" fontSize="12" fontFamily="var(--font-structural)" fontWeight="600">
                    Calculated Rigor
                  </text>
                  <rect x="95" y="130" width="150" height="24" rx="2" fill="#1E293B" opacity="0.6" />
                  <rect x="95" y="165" width="150" height="24" rx="2" fill="#1E293B" opacity="0.6" />
                  <rect x="95" y="200" width="150" height="24" rx="2" fill="#1E293B" opacity="0.6" />

                  {/* Clean Direct Interconnect Rails */}
                  <line x1="260" y1="142" x2="340" y2="142" stroke="#D97706" strokeWidth="1.5" />
                  <line x1="260" y1="212" x2="340" y2="212" stroke="#D97706" strokeWidth="1.5" />
                  <polygon points="340,142 334,138 334,146" fill="#D97706" />
                  <polygon points="340,212 334,208 334,216" fill="#D97706" />

                  {/* Central Architectural Hub */}
                  <rect x="340" y="80" width="160" height="160" rx="4" fill="#12151B" stroke="#D97706" strokeWidth="1.2" />
                  <text x="420" y="115" textAnchor="middle" fill="#D97706" fontSize="10" fontFamily="var(--font-technical)" letterSpacing="0.08em">
                    [CORE ENGINE]
                  </text>
                  <text x="420" y="140" textAnchor="middle" fill="#F6F5F0" fontSize="13" fontFamily="var(--font-structural)" fontWeight="600">
                    Zero Accidental
                  </text>
                  <text x="420" y="158" textAnchor="middle" fill="#F6F5F0" fontSize="13" fontFamily="var(--font-structural)" fontWeight="600">
                    Complexity
                  </text>
                  <circle cx="420" cy="195" r="14" fill="#1E293B" stroke="#D97706" strokeWidth="1" />
                  <circle cx="420" cy="195" r="4" fill="#D97706" />

                  {/* Direct Egress Line */}
                  <line x1="500" y1="160" x2="570" y2="160" stroke="#D97706" strokeWidth="1.5" />
                  <polygon points="570,160 564,156 564,164" fill="#D97706" />

                  {/* Human-Centered Resolution */}
                  <rect x="570" y="60" width="180" height="200" rx="4" fill="#12151B" stroke="#1E293B" strokeWidth="1" />
                  <text x="585" y="85" fill="#94A3B8" fontSize="10" fontFamily="var(--font-technical)" letterSpacing="0.08em">
                    [USER EXPERIENCE]
                  </text>
                  <text x="585" y="110" fill="#F6F5F0" fontSize="12" fontFamily="var(--font-structural)" fontWeight="600">
                    Human Attention
                  </text>
                  <circle cx="660" cy="180" r="38" fill="url(#philGlowAmber)" />
                  <circle cx="660" cy="180" r="24" fill="none" stroke="#D97706" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="660" cy="180" r="8" fill="#F6F5F0" />
                </g>

                {/* State B: Fragmented Sprawl (Illustrative contrast) */}
                <g className={`${styles.stateGroup} ${!isStructured ? styles.stateVisible : styles.stateHidden}`}>
                  {/* Entangled Crossing Lines */}
                  <line x1="120" y1="80" x2="450" y2="240" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <line x1="160" y1="230" x2="620" y2="90" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <line x1="260" y1="110" x2="680" y2="230" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <line x1="380" y1="70" x2="200" y2="260" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <line x1="520" y1="260" x2="350" y2="90" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                  {/* Scattered Uncoordinated Boxes */}
                  {[
                    { x: 90, y: 70, label: 'Proxy Intermediary' },
                    { x: 230, y: 190, label: 'Unbounded Service' },
                    { x: 340, y: 60, label: 'Speculative Cluster' },
                    { x: 480, y: 180, label: 'Ad-hoc Data Store' },
                    { x: 620, y: 80, label: 'Vendor Lock-in' },
                    { x: 600, y: 220, label: 'User Fatigue' },
                  ].map((node) => (
                    <g key={node.label}>
                      <rect x={node.x} y={node.y} width="120" height="44" rx="3" fill="#12151B" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                      <text x={node.x + 60} y={node.y + 26} textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="var(--font-technical)">
                        {node.label}
                      </text>
                    </g>
                  ))}
                  <text x="400" y="295" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="var(--font-technical)">
                    ILLUSTRATIVE: COMPLEXITY TRANSFERRED TO USER & MULTIPLE FRAGILE DEPENDENCIES
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* The Three Connected Canonical Arguments */}
          <div className={styles.argumentsGrid}>
            {args.map((arg, index) => {
              const isHighlighted = highlightedArg === index;
              return (
                <div
                  key={arg.id}
                  className={`${styles.argumentCard} ${isHighlighted ? styles.argumentCardHighlighted : ''}`}
                  onMouseEnter={() => setHighlightedArg(index)}
                  onMouseLeave={() => setHighlightedArg(null)}
                  onFocus={() => setHighlightedArg(index)}
                  onBlur={() => setHighlightedArg(null)}
                  tabIndex={0}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIndex}>ARG.0{index + 1}</span>
                    <span className={styles.cardBadge}>
                      {index === 0 && 'RIGOR'}
                      {index === 1 && 'ARCHITECTURE'}
                      {index === 2 && 'HUMAN'}
                    </span>
                  </div>
                  <h3 className={styles.argumentTitle}>{arg.title}</h3>
                  <p className={styles.argumentBody}>{arg.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
