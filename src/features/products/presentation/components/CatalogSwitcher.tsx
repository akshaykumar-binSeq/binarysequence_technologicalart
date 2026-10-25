'use client';

import React from 'react';
import styles from './catalog-switcher.module.css';

interface CatalogItem {
  id: string;
  name: string;
  badge: string;
  publisher: string;
}

interface CatalogSwitcherProps {
  catalog: readonly CatalogItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function CatalogSwitcher({
  catalog,
  activeId,
  onSelect,
}: CatalogSwitcherProps): React.JSX.Element {
  return (
    <div className={styles.switcherContainer} role="region" aria-label="Ecosystem Product Directory Selector">
      <div className={styles.labelRow}>
        <span className={styles.registerLabel}>ARCHITECTURE REGISTER // SYSTEM SELECTOR</span>
        <span className={styles.countBadge}>{catalog.length} ARCHITECTURES</span>
      </div>

      <div className={styles.pillsScrollTrack} role="tablist">
        {catalog.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(item.id)}
              className={`${styles.pillBtn} ${isActive ? styles.pillActive : ''}`}
            >
              <span className={styles.pillBadge}>{item.badge}</span>
              <span className={styles.pillName}>{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
