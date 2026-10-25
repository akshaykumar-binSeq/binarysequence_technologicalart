'use client';

import React from 'react';
import type { NotebookEntry } from '../../content';
import styles from './notebook-entry-card.module.css';

export interface NotebookEntryCardProps {
  entry: NotebookEntry;
  onRead: (entry: NotebookEntry) => void;
  isExpanded?: boolean;
}

export function NotebookEntryCard({
  entry,
  onRead,
  isExpanded = false,
}: NotebookEntryCardProps): React.JSX.Element {
  const isVerified = entry.verificationStatus === 'VERIFIED';

  return (
    <article
      className={styles.card}
      aria-labelledby={`entry-title-${entry.id}`}
    >
      <header className={styles.metaRow}>
        <span className={styles.refId}>[{entry.referenceId}] // {entry.category}</span>
        <div className={styles.statusBadges}>
          <span
            className={isVerified ? styles.statusVerified : styles.statusDraft}
            aria-label={`Status: ${entry.verificationStatus}`}
          >
            {isVerified ? '● VERIFIED' : '▲ DRAFT IN VERIFICATION'}
          </span>
        </div>
      </header>

      <h3 id={`entry-title-${entry.id}`} className={styles.title}>
        {entry.title}
      </h3>
      <p className={styles.subtitle}>{entry.subtitle}</p>

      <p className={styles.abstract}>{entry.abstract}</p>

      <div className={styles.tagsRow} aria-label="Technical topics">
        {entry.tags.map((tag) => (
          <span key={tag} className={styles.tagPill}>
            #{tag}
          </span>
        ))}
      </div>

      <footer className={styles.footerRow}>
        <span className={styles.dispatchMeta}>
          {entry.publishedDate} • {entry.readingTime}
        </span>
        <button
          type="button"
          className={styles.readButton}
          onClick={() => onRead(entry)}
          aria-expanded={isExpanded}
          aria-controls={`reader-${entry.id}`}
        >
          <span>{isExpanded ? 'Collapse Dispatch ▲' : 'Read Full Dispatch →'}</span>
        </button>
      </footer>
    </article>
  );
}
