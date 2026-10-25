'use client';

import React, { useState } from 'react';
import type { CaseStudy } from '../../content';
import styles from './case-study-inspector.module.css';

export interface CaseStudyInspectorProps {
  caseStudy: CaseStudy;
  onClose: () => void;
}

type TabKey = 'executive' | 'architecture' | 'telemetry' | 'security';

export function CaseStudyInspector({
  caseStudy,
  onClose,
}: CaseStudyInspectorProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<TabKey>('executive');

  return (
    <section
      id={`inspector-${caseStudy.id}`}
      className={styles.inspector}
      aria-label={`Architectural Teardown: ${caseStudy.title}`}
    >
      <header className={styles.header}>
        <div className={styles.headerMeta}>
          <span className={styles.headerEyebrow}>ARCHITECTURAL TEARDOWN // {caseStudy.slug}</span>
          <h4 className={styles.headerTitle}>{caseStudy.title}</h4>
        </div>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close architectural teardown"
        >
          ✕ Close Teardown
        </button>
      </header>

      {/* Tabs Bar */}
      <div className={styles.tabsBar} role="tablist" aria-label="Teardown investigation views">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'executive'}
          className={`${styles.tabButton} ${activeTab === 'executive' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('executive')}
        >
          01 // Executive Diagnosis
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'architecture'}
          className={`${styles.tabButton} ${activeTab === 'architecture' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('architecture')}
        >
          02 // Architecture Before vs After
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'telemetry'}
          className={`${styles.tabButton} ${activeTab === 'telemetry' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('telemetry')}
        >
          03 // Latency & Benchmarks
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'security'}
          className={`${styles.tabButton} ${activeTab === 'security' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('security')}
        >
          04 // Zero-Trust Security
        </button>
      </div>

      {/* TAB 1: Executive Diagnosis */}
      {activeTab === 'executive' && (
        <div className={styles.panel} role="tabpanel" aria-label="Executive Diagnosis">
          <div className={styles.narrativeBlock}>
            <h5 className={styles.sectionHeading}>{caseStudy.challenge.heading}</h5>
            <p className={styles.prose}>{caseStudy.challenge.narrative}</p>
            <ul className={styles.pointList}>
              {caseStudy.challenge.painPoints.map((point, idx) => (
                <li key={idx} className={styles.pointItem}>
                  <span className={styles.pointMarker}>[FAIL-{idx + 1}]</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.narrativeBlock}>
            <h5 className={styles.sectionHeading}>{caseStudy.solution.heading}</h5>
            <p className={styles.prose}>{caseStudy.solution.narrative}</p>
            <ul className={styles.pointList}>
              {caseStudy.solution.keyInnovations.map((innovation, idx) => (
                <li key={idx} className={styles.pointItem}>
                  <span className={styles.pointMarker} style={{ color: '#4ADE80' }}>
                    [SPEC-{idx + 1}]
                  </span>
                  <span>{innovation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.narrativeBlock}>
            <h5 className={styles.sectionHeading}>Delivered Production Artifacts</h5>
            <div className={styles.artifactsList}>
              {caseStudy.deliveredArtifacts.map((artifact, idx) => (
                <div key={idx} className={styles.artifactItem}>
                  <span className={styles.artifactIcon}>✔</span>
                  <span>{artifact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Architecture Before vs After */}
      {activeTab === 'architecture' && (
        <div className={styles.panel} role="tabpanel" aria-label="Architecture Comparison">
          <div className={styles.comparisonTableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th scope="col">Dimension</th>
                  <th scope="col">Legacy Monolithic Architecture</th>
                  <th scope="col">Engineered Substrate</th>
                  <th scope="col">Observed Enterprise Impact</th>
                </tr>
              </thead>
              <tbody>
                {caseStudy.architectureComparison.map((row, idx) => (
                  <tr key={idx}>
                    <td className={styles.tableDimension}>{row.dimension}</td>
                    <td className={styles.legacyCol}>{row.legacyArchitecture}</td>
                    <td className={styles.substrateCol}>{row.engineeredSubstrate}</td>
                    <td className={styles.impactCol}>{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: Latency & Benchmarks */}
      {activeTab === 'telemetry' && (
        <div className={styles.panel} role="tabpanel" aria-label="Latency Benchmarks">
          <div className={styles.telemetryGrid}>
            {caseStudy.latencyTelemetry.map((item, idx) => (
              <div key={idx} className={styles.telemetryCard}>
                <span className={styles.telemetryLabel}>{item.label}</span>
                <div className={styles.telemetryDelta}>
                  <span className={styles.telemetryBefore}>{item.before}</span>
                  <span className={styles.telemetryArrow}>→</span>
                  <span className={styles.telemetryAfter}>{item.after}</span>
                </div>
                <span className={styles.telemetryBadge}>{item.improvement}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: Zero-Trust Security */}
      {activeTab === 'security' && (
        <div className={styles.panel} role="tabpanel" aria-label="Security Mitigations">
          <div className={styles.securityGrid}>
            {caseStudy.securityMitigations.map((sec, idx) => (
              <div key={idx} className={styles.securityCard}>
                <span className={styles.threatTitle}>Threat Vector: {sec.threatVector}</span>
                <p className={styles.threatStrategy}>{sec.mitigationStrategy}</p>
                <span className={styles.threatStandard}>Standard: {sec.verifiedStandard}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
