import React from 'react';
import { ProductCluster } from '../../content';
import { ProductConsoleRow } from './ProductConsoleRow';
import styles from './cluster-section.module.css';

interface ClusterSectionProps {
  cluster: ProductCluster;
}

export function ClusterSection({ cluster }: ClusterSectionProps): React.JSX.Element {
  return (
    <section
      id={`cluster-${cluster.id}`}
      className={styles.clusterWrapper}
      aria-labelledby={`cluster-heading-${cluster.id}`}
    >
      <header className={styles.clusterHeader}>
        <div className={styles.clusterEyebrowRow}>
          <span className={styles.clusterIndex}>CLUSTER // {cluster.clusterIndex}</span>
        </div>
        <h3 id={`cluster-heading-${cluster.id}`} className={styles.clusterName}>
          {cluster.name}
        </h3>
        <p className={styles.clusterLead}>{cluster.lead}</p>
      </header>

      {/* Archetype P4: Monolithic Striped Console Card */}
      <div className={styles.consoleContainer} role="region" aria-label={`${cluster.name} Directory`}>
        {cluster.products.map((product) => (
          <ProductConsoleRow key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
