'use client';

import React from 'react';
import type { TopologyNode } from '../../content';
import styles from './matrix-view.module.css';

export interface MatrixViewProps {
  nodes: readonly TopologyNode[];
  selectedNode: TopologyNode | null;
  onSelectNode: (node: TopologyNode) => void;
  activeLayerFilter: string;
}

export function MatrixView({
  nodes,
  selectedNode,
  onSelectNode,
  activeLayerFilter,
}: MatrixViewProps): React.JSX.Element {
  const filteredNodes =
    activeLayerFilter === 'all'
      ? nodes
      : nodes.filter((n) => n.layer === activeLayerFilter);

  return (
    <div className={styles.tableContainer} aria-label="Structured topology matrix">
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Substrate Node</th>
            <th scope="col">Architectural Tier</th>
            <th scope="col">State</th>
            <th scope="col">Transport Protocol</th>
            <th scope="col">Throughput</th>
            <th scope="col">Latency SLA</th>
            <th scope="col" className={styles.actionCell}>
              Inspection
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredNodes.map((node) => {
            const isSelected = selectedNode?.id === node.id;
            return (
              <tr
                key={node.id}
                className={isSelected ? styles.rowSelected : ''}
              >
                <td className={styles.codeCell}>{node.shortCode}</td>
                <td className={styles.nameCell}>{node.name}</td>
                <td className={styles.layerCell}>{node.layerName}</td>
                <td className={styles.statusCell}>● {node.status}</td>
                <td className={styles.protocolCell}>{node.protocol}</td>
                <td className={styles.throughputCell}>{node.throughput}</td>
                <td className={styles.latencyCell}>{node.latencySla}</td>
                <td className={styles.actionCell}>
                  <button
                    type="button"
                    className={styles.inspectBtn}
                    onClick={() => onSelectNode(node)}
                    aria-label={`Inspect ${node.shortCode}: ${node.name}`}
                  >
                    {isSelected ? 'Inspecting ◫' : 'Inspect →'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
