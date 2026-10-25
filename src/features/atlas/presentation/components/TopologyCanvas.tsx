'use client';

import React from 'react';
import type { TopologyNode, ArchitectureLayerId } from '../../content';
import styles from './topology-canvas.module.css';

export interface TopologyCanvasProps {
  nodes: readonly TopologyNode[];
  selectedNode: TopologyNode | null;
  onSelectNode: (node: TopologyNode) => void;
  activeLayerFilter: string;
}

const LAYER_CONFIG: { id: ArchitectureLayerId; title: string; subtitle: string }[] = [
  {
    id: 'substrate',
    title: 'LAYER 01 // FOUNDATIONAL SUBSTRATE',
    subtitle: 'Physical Hardware, Non-Swappable Memory Rings & NVMe WAL',
  },
  {
    id: 'engines',
    title: 'LAYER 02 // CORE ENGINES & PROTOCOLS',
    subtitle: 'Consensus Clusters, Chronometric Wheels & Stream Dispatchers',
  },
  {
    id: 'domains',
    title: 'LAYER 03 // BOUNDED DOMAIN CONTEXTS',
    subtitle: 'Domain Invariants, Event-Sourced Ledgers & Temporal Rules',
  },
  {
    id: 'gateways',
    title: 'LAYER 04 // APPLICATION GATEWAYS',
    subtitle: 'Dual-Mode Intake Routers, WebSocket Brokers & Edge Runtime APIs',
  },
  {
    id: 'surfaces',
    title: 'LAYER 05 // SENSORY & UI SURFACES',
    subtitle: 'Swiss Laboratory Design System & Ambient Mathematical Mesh',
  },
];

export function TopologyCanvas({
  nodes,
  selectedNode,
  onSelectNode,
  activeLayerFilter,
}: TopologyCanvasProps): React.JSX.Element {
  const visibleLayers =
    activeLayerFilter === 'all'
      ? LAYER_CONFIG
      : LAYER_CONFIG.filter((l) => l.id === activeLayerFilter);

  const isUpstream = (id: string) => selectedNode?.upstreamNodeIds.includes(id) ?? false;
  const isDownstream = (id: string) => selectedNode?.downstreamNodeIds.includes(id) ?? false;

  return (
    <div className={styles.container} aria-label="Interactive architecture topology diagram">
      <div className={styles.graphLayout}>
        {visibleLayers.map((layer) => {
          const layerNodes = nodes.filter((n) => n.layer === layer.id);
          return (
            <section
              key={layer.id}
              className={styles.layerGroup}
              aria-label={layer.title}
            >
              <div className={styles.layerHeader}>
                <span className={styles.layerName}>{layer.title}</span>
                <span className={styles.layerDesc}>{layer.subtitle}</span>
              </div>

              <div className={styles.nodesRow}>
                {layerNodes.map((node) => {
                  const isSelected = selectedNode?.id === node.id;
                  const upstream = isUpstream(node.id);
                  const downstream = isDownstream(node.id);

                  let stateClass = '';
                  if (isSelected) stateClass = styles.nodeSelected;
                  else if (upstream) stateClass = styles.nodeUpstream;
                  else if (downstream) stateClass = styles.nodeDownstream;

                  return (
                    <button
                      key={node.id}
                      type="button"
                      className={`${styles.nodeCard} ${stateClass}`}
                      onClick={() => onSelectNode(node)}
                      aria-pressed={isSelected}
                      aria-label={`${node.shortCode}: ${node.name}. Status: ${node.status}. Throughput: ${node.throughput}`}
                    >
                      <div className={styles.nodeTop}>
                        <span className={styles.nodeCode}>{node.shortCode}</span>
                        <span className={styles.nodeStatus}>● {node.status}</span>
                      </div>
                      <span className={styles.nodeName}>{node.name}</span>
                      <div className={styles.nodeMeta}>
                        <span>{node.protocol}</span>
                        <span>{node.throughput}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Legend */}
        <div className={styles.legendBar} aria-label="Topology map legend">
          <div className={styles.legendItem}>
            <span className={styles.legendDotSelected} aria-hidden="true" />
            <span>Active Inspected Node</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDotUpstream} aria-hidden="true" />
            <span>Upstream Dependency (Input)</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDotDownstream} aria-hidden="true" />
            <span>Downstream Consumer (Output)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
