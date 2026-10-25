'use client';

import React from 'react';
import type { TopologyNode } from '../../content';
import styles from './node-inspector.module.css';

export interface NodeInspectorProps {
  node: TopologyNode;
  allNodes: readonly TopologyNode[];
  onSelectNode: (node: TopologyNode) => void;
  onClose: () => void;
}

export function NodeInspector({
  node,
  allNodes,
  onSelectNode,
  onClose,
}: NodeInspectorProps): React.JSX.Element {
  const upstreamNodes = allNodes.filter((n) => node.upstreamNodeIds.includes(n.id));
  const downstreamNodes = allNodes.filter((n) => node.downstreamNodeIds.includes(n.id));

  return (
    <article
      id="node-inspector-panel"
      className={styles.inspector}
      aria-label={`Detailed telemetry inspector for node ${node.shortCode}: ${node.name}`}
    >
      <header className={styles.header}>
        <div className={styles.headerMeta}>
          <span className={styles.eyebrow}>
            {node.shortCode} // {node.layerName}
          </span>
          <h4 className={styles.title}>{node.name}</h4>
        </div>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close node inspector"
        >
          ✕ Close Inspector
        </button>
      </header>

      {/* Telemetry Grid */}
      <div className={styles.telemetryGrid}>
        <div className={styles.telemetryBlock}>
          <span className={styles.telemetryLabel}>Operational Status</span>
          <span className={styles.telemetryValue} style={{ color: '#4ADE80' }}>
            ● {node.status}
          </span>
        </div>
        <div className={styles.telemetryBlock}>
          <span className={styles.telemetryLabel}>Transport Protocol</span>
          <span className={styles.telemetryValue}>{node.protocol}</span>
        </div>
        <div className={styles.telemetryBlock}>
          <span className={styles.telemetryLabel}>Throughput Capacity</span>
          <span className={styles.telemetryValue}>{node.throughput}</span>
        </div>
        <div className={styles.telemetryBlock}>
          <span className={styles.telemetryLabel}>Latency SLA</span>
          <span className={styles.telemetryValue}>{node.latencySla}</span>
        </div>
      </div>

      <p className={styles.description}>{node.description}</p>

      <div className={styles.detailsGrid}>
        {/* Hardware Anchor & Resilience */}
        <div className={styles.detailCard}>
          <span className={styles.detailHeading}>Hardware & Kernel Anchor</span>
          <p className={styles.detailText}>{node.hardwareAnchor}</p>
        </div>

        <div className={styles.detailCard}>
          <span className={styles.detailHeading}>Failure Resilience Policy</span>
          <p className={styles.detailText}>{node.resiliencePolicy}</p>
        </div>

        {/* Upstream Dependencies */}
        <div className={styles.detailCard}>
          <span className={styles.detailHeading}>
            Upstream Inputs ({upstreamNodes.length})
          </span>
          {upstreamNodes.length === 0 ? (
            <p className={styles.detailText} style={{ color: 'var(--text-muted)' }}>
              Root substrate node (Zero upstream dependencies)
            </p>
          ) : (
            <div className={styles.linksList}>
              {upstreamNodes.map((up) => (
                <button
                  key={up.id}
                  type="button"
                  className={styles.nodeLink}
                  onClick={() => onSelectNode(up)}
                >
                  ← {up.shortCode}: {up.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Downstream Consumers */}
        <div className={styles.detailCard}>
          <span className={styles.detailHeading}>
            Downstream Consumers ({downstreamNodes.length})
          </span>
          {downstreamNodes.length === 0 ? (
            <p className={styles.detailText} style={{ color: 'var(--text-muted)' }}>
              Terminal edge surface (Zero downstream dependencies)
            </p>
          ) : (
            <div className={styles.linksList}>
              {downstreamNodes.map((down) => (
                <button
                  key={down.id}
                  type="button"
                  className={styles.nodeLink}
                  onClick={() => onSelectNode(down)}
                >
                  → {down.shortCode}: {down.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
