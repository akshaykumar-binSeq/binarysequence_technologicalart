'use client';

import React from 'react';
import Link from 'next/link';
import { ProductItem } from '../../content';
import { useDisclosure } from '@/core/interaction';
import styles from './product-console-row.module.css';

interface ProductConsoleRowProps {
  product: ProductItem;
}

export function ProductConsoleRow({ product }: ProductConsoleRowProps): React.JSX.Element {
  const { isOpen, toggle, getButtonProps, getPanelProps } = useDisclosure({
    id: `disclosure-${product.id}`,
  });

  const getStatusClass = (status: ProductItem['status']): string => {
    switch (status) {
      case 'LIVE':
        return styles.statusLive;
      case 'IN DEVELOPMENT':
        return styles.statusInDevelopment;
      case 'IN DEVELOPMENT / PHYSICAL INITIATIVE':
        return styles.statusPhysical;
      case 'CONCEPT / PROTOTYPE':
      case 'CONCEPT / EXPERIMENTAL':
      default:
        return styles.statusConcept;
    }
  };

  const getCapabilitiesHeading = (status: ProductItem['status']): string => {
    switch (status) {
      case 'LIVE':
        return 'OPERATIONAL CAPABILITIES REGISTER';
      case 'IN DEVELOPMENT':
      case 'IN DEVELOPMENT / PHYSICAL INITIATIVE':
        return 'CORE CAPABILITIES IN ACTIVE ENGINEERING';
      case 'CONCEPT / PROTOTYPE':
      case 'CONCEPT / EXPERIMENTAL':
        return 'EXPLORATORY CAPABILITIES & RESEARCH BOUNDARIES';
      default:
        return 'SYSTEM CAPABILITIES & ARCHITECTURAL SCOPE';
    }
  };

  return (
    <article className={styles.consoleRow} id={`product-${product.id}`}>
      {/* --------------------------------------------------------------------
          Primary Row Summary (P4 Striped Tabular Format)
          -------------------------------------------------------------------- */}
      <div className={styles.rowMain}>
        {/* Column 1: Identity & Status */}
        <div className={styles.identityCol}>
          <div className={styles.indexTitleRow}>
            <span className={styles.productIndex}>{product.index}</span>
            <h4 className={styles.productName}>{product.name}</h4>
          </div>
          <p className={styles.productSubtitle}>{product.subtitle}</p>
          <span className={`${styles.statusBadge} ${getStatusClass(product.status)}`}>
            {product.statusBadge}
          </span>
        </div>

        {/* Column 2: Concise Verified Summary */}
        <div className={styles.summaryCol}>
          <p className={styles.summaryText}>{product.summary}</p>
        </div>

        {/* Column 3: Action Triggers (Direct Details Page Link & Quick In-Situ Overview) */}
        <div className={styles.actionCol}>
          <Link
            href={`/products/${product.id}`}
            className={styles.directLink}
            aria-label={`Inspect ${product.name} architecture specifications`}
          >
            <span>Inspect Architecture →</span>
          </Link>
          <button
            {...getButtonProps()}
            className={styles.disclosureBtn}
            aria-label={`Toggle quick overview for ${product.name}`}
          >
            <span>{isOpen ? 'Close' : 'Quick Overview'}</span>
            <span
              className={`${styles.chevron} ${isOpen ? styles.chevronExpanded : ''}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
        </div>
      </div>

      {/* --------------------------------------------------------------------
          Inline Disclosure Drawer (Revealed without Navigation Jump)
          -------------------------------------------------------------------- */}
      {isOpen && (
        <div {...getPanelProps()} className={styles.drawerPanel}>
          <div className={styles.drawerGrid}>
            {/* Left Block: Design & System Philosophy */}
            <div className={styles.drawerBlock}>
              <h5 className={styles.drawerBlockLabel}>PHILOSOPHY & INTENT</h5>
              <p className={styles.philosophyProse}>{product.philosophy}</p>

              <div className={styles.scopeBox}>
                <div className={styles.scopeLabel}>ARCHITECTURAL SCOPE</div>
                <p className={styles.scopeText}>{product.architecturalScope}</p>
              </div>

              <div className={styles.drawerLinkWrapper}>
                <Link
                  href={`/products/${product.id}`}
                  className={styles.drawerTeardownLink}
                  aria-label={`Open full specification sheet for ${product.name}`}
                >
                  <span>Open Full Architecture Teardown Sheet →</span>
                </Link>
              </div>
            </div>

            {/* Right Block: Status-Aware Capabilities Register */}
            <div className={styles.drawerBlock}>
              <h5 className={styles.drawerBlockLabel}>{getCapabilitiesHeading(product.status)}</h5>
              <ul className={styles.capabilitiesList}>
                {product.verifiedCapabilities.map((capability, idx) => (
                  <li key={idx} className={styles.capabilityItem}>
                    <span className={styles.capabilityBullet} aria-hidden="true">
                      ↳
                    </span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
