'use client';

import React from 'react';
import Link from 'next/link';
import { ProductTeardownItem } from '../../content';
import styles from './product-spec-sheet.module.css';

interface ProductSpecSheetProps {
  product: ProductTeardownItem;
}

export function ProductSpecSheet({ product }: ProductSpecSheetProps): React.JSX.Element {
  const specRows = [
    { label: 'Category', value: product.category },
    { label: 'Publisher', value: product.publisher },
    { label: 'Pricing', value: product.pricing },
    { label: 'Inputs', value: product.inputs },
    { label: 'Output', value: product.output },
    { label: 'Availability', value: product.availability },
  ];

  const isExternal = product.sourceUrl.startsWith('http');

  return (
    <section className={styles.specSection} aria-label={`${product.name} Specifications and Overview`}>
      <div className={styles.specGrid}>
        {/* Left Column: Structured Specification Table */}
        <div className={styles.tableCol}>
          <div className={styles.specTable} role="table" aria-label={`${product.name} Technical Attributes`}>
            {specRows.map((row) => (
              <div key={row.label} className={styles.specRow} role="row">
                <div className={styles.specLabel} role="rowheader">
                  {row.label}
                </div>
                <div className={styles.specValue} role="cell">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Executive Synthesis & Call to Action */}
        <div className={styles.summaryCol}>
          <p className={styles.summaryProse}>{product.summary}</p>

          <div className={styles.sourceBtnWrapper}>
            {isExternal ? (
              <a
                href={product.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceBtn}
                aria-label={product.sourceLabel}
              >
                <span>{product.sourceLabel}</span>
              </a>
            ) : (
              <Link
                href={product.sourceUrl}
                className={styles.sourceBtn}
                aria-label={product.sourceLabel}
              >
                <span>{product.sourceLabel}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
