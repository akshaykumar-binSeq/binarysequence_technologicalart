'use client';

import React from 'react';
import type { NotebookEntry } from '../../content';
import styles from './notebook-reader.module.css';

export interface NotebookReaderProps {
  entry: NotebookEntry;
  onClose: () => void;
}

export function NotebookReader({
  entry,
  onClose,
}: NotebookReaderProps): React.JSX.Element {
  return (
    <article
      id={`reader-${entry.id}`}
      className={styles.reader}
      aria-label={`Full dispatch: ${entry.title}`}
    >
      <header className={styles.header}>
        <div className={styles.headerMeta}>
          <span className={styles.refId}>
            [{entry.referenceId}] // {entry.category} • {entry.publishedDate} • {entry.verificationStatus}
          </span>
          <h4 className={styles.title}>{entry.title}</h4>
        </div>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close dispatch reader"
        >
          ✕ Close Dispatch
        </button>
      </header>

      <div className={styles.proseContainer}>
        {entry.sections.map((section, sIdx) => (
          <div key={sIdx} className={styles.sectionBlock}>
            <h5 className={styles.sectionTitle}>{section.heading}</h5>
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className={styles.paragraph}>
                {p}
              </p>
            ))}

            {section.metricHighlight && (
              <div className={styles.metricCallout}>
                <span className={styles.metricValue}>
                  {section.metricHighlight.label}: {section.metricHighlight.value}
                </span>
                <span className={styles.metricComparison}>
                  {section.metricHighlight.comparison}
                </span>
              </div>
            )}

            {section.codeBlock && (
              <div className={styles.codeFrame}>
                <div className={styles.codeHeader}>
                  <span>{section.codeBlock.filename}</span>
                  <span>{section.codeBlock.language.toUpperCase()}</span>
                </div>
                <pre className={styles.codePre} tabIndex={0}>
                  <code>{section.codeBlock.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}

        {entry.references.length > 0 && (
          <div className={styles.referencesSection}>
            <span className={styles.referencesTitle}>Empirical Citations & Source Artifacts</span>
            <ul className={styles.referencesList}>
              {entry.references.map((ref, rIdx) => (
                <li key={rIdx} className={styles.referenceItem}>
                  [{rIdx + 1}] {ref}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
