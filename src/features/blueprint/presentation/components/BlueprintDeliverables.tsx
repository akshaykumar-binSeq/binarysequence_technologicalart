'use client';

import React from 'react';
import { BLUEPRINT_CONTENT } from '../../content';
import styles from './blueprint-deliverables.module.css';

export function BlueprintDeliverables(): React.JSX.Element {
  const { deliverables } = BLUEPRINT_CONTENT;

  return (
    <section id="blueprint-deliverables" className={styles.section} aria-labelledby="deliverables-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>{deliverables.eyebrow}</span>
        <h2 id="deliverables-heading" className={styles.headline}>
          {deliverables.headline}
        </h2>
        <p className={styles.lead}>{deliverables.lead}</p>
      </div>

      <div className={styles.grid}>
        {deliverables.items.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.number}>{item.number}</span>
              <span className={styles.artifactTag}>ARTIFACT</span>
            </div>

            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.summary}>{item.summary}</p>

            <div className={styles.detailBlock}>
              <div className={styles.technicalSpec}>
                <span className={styles.specLabel}>DELIVERABLE // </span>
                <span className={styles.specValue}>{item.technicalArtifact}</span>
              </div>
              <div className={styles.clientValue}>
                <span className={styles.valueLabel}>CLIENT BENEFIT // </span>
                <span className={styles.valueText}>{item.clientValue}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
