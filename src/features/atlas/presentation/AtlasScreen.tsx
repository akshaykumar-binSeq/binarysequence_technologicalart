'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ATLAS_CONTENT, type TopologyNode } from '../content';
import { TopologyCanvas } from './components/TopologyCanvas';
import { NodeInspector } from './components/NodeInspector';
import { MatrixView } from './components/MatrixView';
import styles from './atlas.module.css';

type ViewMode = 'graph' | 'matrix';

export function AtlasScreen(): React.JSX.Element {
  const { hero, layers, nodes, guarantees } = ATLAS_CONTENT;
  const [activeLayer, setActiveLayer] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('graph');
  const [selectedNode, setSelectedNode] = useState<TopologyNode | null>(nodes[0]); // Default to first node

  const handleSelectNode = (node: TopologyNode) => {
    setSelectedNode((prev) => (prev?.id === node.id ? null : node));
  };

  return (
    <div className="bs-container">
      <div className={styles.screen}>
        {/* 1. Hero */}
        <section className={styles.heroSection} aria-labelledby="atlas-headline">
          <div className={styles.heroContent}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>{hero.badge}</span>
              <span className={styles.binaryTelemetry} aria-hidden="true">
                {hero.binaryTelemetry}
              </span>
            </div>
            <h1 id="atlas-headline" className={styles.headline}>
              {hero.headline}
            </h1>
            <p className={styles.lead}>{hero.lead}</p>
          </div>
        </section>

        {/* 2. Controls & Filter Bar */}
        <section className={styles.controlSection} aria-label="Atlas layer filter and view controls">
          <div className={styles.controlBar}>
            <div className={styles.layerPills} role="radiogroup" aria-label="Architecture layer filter">
              {layers.map((layer) => (
                <button
                  key={layer.id}
                  type="button"
                  role="radio"
                  aria-checked={activeLayer === layer.id}
                  className={`${styles.layerPill} ${activeLayer === layer.id ? styles.layerActive : ''}`}
                  onClick={() => setActiveLayer(layer.id)}
                >
                  {layer.label}
                </button>
              ))}
            </div>

            <div className={styles.viewToggleGroup} role="group" aria-label="Topology layout mode">
              <button
                type="button"
                className={`${styles.toggleBtn} ${viewMode === 'graph' ? styles.toggleBtnActive : ''}`}
                onClick={() => setViewMode('graph')}
                aria-pressed={viewMode === 'graph'}
              >
                ◫ Graph View
              </button>
              <button
                type="button"
                className={`${styles.toggleBtn} ${viewMode === 'matrix' ? styles.toggleBtnActive : ''}`}
                onClick={() => setViewMode('matrix')}
                aria-pressed={viewMode === 'matrix'}
              >
                ≡ Matrix Table
              </button>
            </div>
          </div>
        </section>

        {/* 3. Main Atlas Presentation */}
        <section className={styles.atlasSection} aria-label="Architecture Topology Interactive Map">
          {viewMode === 'graph' ? (
            <TopologyCanvas
              nodes={nodes}
              selectedNode={selectedNode}
              onSelectNode={handleSelectNode}
              activeLayerFilter={activeLayer}
            />
          ) : (
            <MatrixView
              nodes={nodes}
              selectedNode={selectedNode}
              onSelectNode={handleSelectNode}
              activeLayerFilter={activeLayer}
            />
          )}

          {/* Node Inspector Drawer */}
          {selectedNode && (
            <NodeInspector
              node={selectedNode}
              allNodes={nodes}
              onSelectNode={(n) => setSelectedNode(n)}
              onClose={() => setSelectedNode(null)}
            />
          )}
        </section>

        {/* 4. Architectural Guarantees Grid */}
        <section className={styles.guaranteesSection} aria-labelledby="guarantees-headline">
          <span className={styles.guaranteesEyebrow}>ARCHITECTURAL ASSURANCES</span>
          <h2 id="guarantees-headline" style={{ display: 'none' }}>
            System Architecture Guarantees
          </h2>
          <div className={styles.guaranteesGrid}>
            {guarantees.map((g, idx) => (
              <div key={idx} className={styles.guaranteeCard}>
                <h3 className={styles.guaranteeTitle}>{g.title}</h3>
                <p className={styles.guaranteeDesc}>{g.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Direct Action CTA */}
        <section className={styles.ctaSection} aria-label="Technical Inquiry Pathway">
          <div className={styles.ctaText}>
            <span className={styles.ctaTitle}>Ready to Map Your Architecture Substrate?</span>
            <span className={styles.ctaSubtitle}>
              Commission a 10-day Sequence Blueprint to inspect and modernize your operational stack.
            </span>
          </div>
          <div className={styles.ctaActions}>
            <Link
              href="/blueprint"
              className={styles.ctaBtnPrimary}
              aria-label="Commission a 10-day Sequence Blueprint"
            >
              Explore Blueprint →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
