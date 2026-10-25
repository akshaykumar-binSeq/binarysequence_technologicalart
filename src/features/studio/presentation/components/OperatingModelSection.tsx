'use client';

import React, { useRef } from 'react';
import { STUDIO_CONTENT } from '../../content';
import { useContentProgression } from '@/core/interaction';
import styles from './operating-model-section.module.css';

interface ArtifactExample {
  id: string;
  name: string;
  role: string;
  purpose: string;
}

const ILLUSTRATIVE_ARTIFACTS: ArtifactExample[] = [
  {
    id: 'art-01',
    name: 'Domain Architecture Documentation',
    role: 'Domain Model Specification',
    purpose:
      'Formal bounded context specifications, entity relationships, and ubiquitous language definitions, enabling any qualified engineer to immediately comprehend system boundaries.',
  },
  {
    id: 'art-02',
    name: 'Infrastructure-as-Code Configuration',
    role: 'Automated Cloud Provisioning',
    purpose:
      'Declarative blueprints defining all cloud resources, networks, databases, and IAM policies, completely externalized from personal credentials and vendor-neutral.',
  },
  {
    id: 'art-03',
    name: 'Deterministic CI/CD Build Pipelines',
    role: 'Automated Delivery Engineering',
    purpose:
      'Push-button deployment scripts and reproducible container recipes ensuring software can be rebuilt, verified, and deployed from scratch without manual intervention.',
  },
  {
    id: 'art-04',
    name: 'Operational Handover & Recovery Runbooks',
    role: 'Operational Continuity Guide',
    purpose:
      'Exhaustive step-by-step procedures for backup verification, disaster recovery, secret rotation, and runtime health audits.',
  },
];

/**
 * OperatingModelSection — Combines Operating Architecture (Transmission Pipeline)
 * and the Continuity Protocol (Inspectable Technical Covenant).
 *
 * Section IDs: #operating-model and #continuity (Preserved)
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Architectural Rule: DEC-009 Mandatory UI Text Centralization
 */
export function OperatingModelSection(): React.JSX.Element {
  const continuityRef = useRef<HTMLDivElement>(null);
  const { eyebrow, headline, narrative, continuityProtocol } = STUDIO_CONTENT.operatingModel;

  const {
    activeStage: selectedArtifact,
    handleStageSelect,
    handleTabKeyDown,
  } = useContentProgression({
    stageCount: continuityProtocol.guarantees.length,
    initialStage: 0,
    containerRef: continuityRef,
    framing: {
      targetIdResolver: (idx) => `clause-card-${idx + 1}`,
      clearanceDesktop: 24,
      clearanceMobile: 16,
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

  return (
    <section id="operating-model" className={styles.section} aria-labelledby="operating-heading">
      <div className="bs-container">
        <div className={styles.sectionInner}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="operating-heading" className={styles.headline}>
              {headline}
            </h2>
            <p className={styles.leadNarrative}>{narrative}</p>
          </div>

          {/* Visual Transmission Pipeline: Partner Intent to Deployed Reality */}
          <div className={styles.pipelineFrame} role="region" aria-label="Direct Transmission Pipeline Diagram">
            <div className={styles.pipelineHeader}>
              <span className={styles.pipelineBadge}>DIRECT TRANSMISSION PIPELINE</span>
              <span className={styles.pipelineTelemetry}>ZERO TRANSLATION LOSS // DIRECT ARCHITECT DELIVERY</span>
            </div>

            <div className={styles.svgContainer}>
              <svg
                viewBox="0 0 800 240"
                className={styles.pipelineSvg}
                role="img"
                aria-label="Process diagram showing direct transmission path from Partner Intent, to Domain Modeling, to Production Code, to Deployed Cloud Infrastructure, and Handover."
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="transmissionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#D97706" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Coordinate Grid Background */}
                <line x1="40" y1="120" x2="760" y2="120" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />

                {/* Transmission Line */}
                <line x1="120" y1="120" x2="680" y2="120" stroke="url(#transmissionGrad)" strokeWidth="2" />

                {/* 5 Sequential Transmission Milestones */}
                {[
                  { x: 120, label: '01 INTENT', sub: 'Partner Strategy', active: true },
                  { x: 260, label: '02 MODEL', sub: 'Domain Architecture', active: true },
                  { x: 400, label: '03 CODE', sub: 'Production Engineering', active: true },
                  { x: 540, label: '04 CLOUD', sub: 'IaC Infrastructure', active: true },
                  { x: 680, label: '05 HANDOVER', sub: 'Client Sovereignty', active: true },
                ].map((node) => (
                  <g key={node.label} className={styles.pipelineNodeGroup}>
                    {/* Node Anchor */}
                    <circle cx={node.x} cy="120" r="18" fill="#12151B" stroke="#D97706" strokeWidth="1.5" />
                    <circle cx={node.x} cy="120" r="5" fill="#D97706" />

                    {/* Milestone Details */}
                    <text
                      x={node.x}
                      y="70"
                      textAnchor="middle"
                      fill="#D97706"
                      fontSize="10"
                      fontFamily="var(--font-technical)"
                      fontWeight="600"
                      letterSpacing="0.08em"
                    >
                      {node.label}
                    </text>
                    <text
                      x={node.x}
                      y="165"
                      textAnchor="middle"
                      fill="#F6F5F0"
                      fontSize="11"
                      fontFamily="var(--font-structural)"
                      fontWeight="500"
                    >
                      {node.sub}
                    </text>
                  </g>
                ))}

                {/* Directional Flow Arrows */}
                <polygon points="190,120 184,116 184,124" fill="#D97706" />
                <polygon points="330,120 324,116 324,124" fill="#D97706" />
                <polygon points="470,120 464,116 464,124" fill="#D97706" />
                <polygon points="610,120 604,116 604,124" fill="#10B981" />
              </svg>
            </div>
          </div>

          {/* Continuity Protocol: Sovereign Covenant Deed */}
          <div ref={continuityRef} className={styles.continuityTrack}>
            <div
              id="continuity"
              className={styles.continuityCard}
              role="region"
              aria-labelledby="continuity-title"
            >
            <div className={styles.continuityHeader}>
              <div className={styles.continuityBadgeRow}>
                <span className={styles.continuityBadge}>{continuityProtocol.badge}</span>
                <span className={styles.continuityTag}>OPERATIONAL SAFEGUARD</span>
              </div>
              <h3 id="continuity-title" className={styles.continuityTitle}>
                {continuityProtocol.title}
              </h3>
              <p className={styles.continuityDesc}>{continuityProtocol.description}</p>
            </div>

            {/* The Four Canonical Commitments as Numbered Clauses */}
            <div className={styles.clausesGrid}>
              {continuityProtocol.guarantees.map((guarantee, idx) => {
                const isSelected = selectedArtifact === idx;
                return (
                  <div
                    key={guarantee}
                    id={`clause-card-${idx + 1}`}
                    data-clause-id={idx + 1}
                    className={`${styles.clauseCard} ${isSelected ? styles.clauseSelected : ''}`}
                    onClick={() => handleStageSelect(idx, false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleStageSelect(idx, false);
                      } else {
                        handleTabKeyDown(e, idx);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isSelected}
                    aria-label={`Clause 0${idx + 1}: ${guarantee}`}
                  >
                    <div className={styles.clauseHeader}>
                      <span className={styles.clauseNumber}>CLAUSE // 0{idx + 1}</span>
                      <span className={styles.clauseCheck} aria-hidden="true">✓</span>
                    </div>
                    <p className={styles.clauseText}>{guarantee}</p>
                  </div>
                );
              })}
            </div>

            {/* Inspectable Illustrative Artifact Inspector */}
            <div className={styles.artifactInspector}>
              <div className={styles.inspectorHeader}>
                <span className={styles.inspectorLabel}>
                  ILLUSTRATIVE HANDOFF ARTIFACT // 0{selectedArtifact + 1} OF 04
                </span>
                <span className={styles.inspectorNotice}>
                  [ILLUSTRATIVE SPECIFICATION EXAMPLE]
                </span>
              </div>
              <div key={selectedArtifact} className={styles.inspectorBody}>
                <h4 className={styles.artifactTitle}>
                  {ILLUSTRATIVE_ARTIFACTS[selectedArtifact].name}
                </h4>
                <p className={styles.artifactRole}>
                  Role: {ILLUSTRATIVE_ARTIFACTS[selectedArtifact].role}
                </p>
                <p className={styles.artifactPurpose}>
                  {ILLUSTRATIVE_ARTIFACTS[selectedArtifact].purpose}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
