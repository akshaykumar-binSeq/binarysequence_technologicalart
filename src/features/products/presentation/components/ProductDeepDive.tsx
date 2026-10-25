'use client';

import React from 'react';
import { ProductTeardownItem } from '../../content';
import styles from './product-deep-dive.module.css';

interface ProductDeepDiveProps {
  product: ProductTeardownItem;
}

export function ProductDeepDive({ product }: ProductDeepDiveProps): React.JSX.Element {
  return (
    <div className={styles.deepDiveContainer}>
      {/* 1. The Problem It Solves */}
      <section className={styles.subSection} aria-labelledby="heading-problem">
        <h2 id="heading-problem" className={styles.sectionHeading}>
          The Problem It Solves
        </h2>
        <div className={styles.headingDivider} aria-hidden="true" />
        <p className={styles.sectionProse}>{product.theProblemItSolves}</p>
      </section>

      {/* 2. How It Fits Your Workflow */}
      <section className={styles.subSection} aria-labelledby="heading-workflow">
        <h2 id="heading-workflow" className={styles.sectionHeading}>
          How It Fits Your Workflow
        </h2>
        <div className={styles.headingDivider} aria-hidden="true" />
        <p className={styles.sectionProse}>{product.howItFitsYourWorkflow}</p>
      </section>

      {/* 3. What to Expect */}
      <section className={styles.subSection} aria-labelledby="heading-expect">
        <h2 id="heading-expect" className={styles.sectionHeading}>
          What to Expect
        </h2>
        <div className={styles.headingDivider} aria-hidden="true" />
        <ul className={styles.expectList}>
          {product.whatToExpect.map((item) => (
            <li key={item.title} className={styles.expectItem}>
              <strong className={styles.expectTitle}>{item.title}</strong>
              <span className={styles.dashSeparator}> — </span>
              <span className={styles.expectDesc}>{item.description}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contextual Editorial Link */}
      {product.editorialContext && (
        <div className={styles.contextRow}>
          <p className={styles.contextProse}>
            {product.editorialContext.prefix}
            <a
              href={product.editorialContext.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contextLink}
            >
              {product.editorialContext.linkText}
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
