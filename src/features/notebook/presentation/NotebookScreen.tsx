'use client';

import React, { useState } from 'react';
import { NOTEBOOK_CONTENT, type NotebookEntry, type NotebookCategory } from '../content';
import { NotebookEntryCard } from './components/NotebookEntryCard';
import { NotebookReader } from './components/NotebookReader';
import styles from './notebook.module.css';

export function NotebookScreen(): React.JSX.Element {
  const { hero, categories, entries } = NOTEBOOK_CONTENT;
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);

  const filteredEntries = entries.filter((entry) => {
    const matchesCategory =
      selectedCategory === 'ALL' || entry.category === (selectedCategory as NotebookCategory);
    const matchesSearch =
      searchQuery.trim() === '' ||
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.referenceId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleToggleReader = (entry: NotebookEntry) => {
    setExpandedEntryId((prev) => (prev === entry.id ? null : entry.id));
  };

  return (
    <div className="bs-container">
      <div className={styles.screen}>
        {/* 1. Hero */}
        <section className={styles.heroSection} aria-labelledby="notebook-headline">
          <div className={styles.heroContent}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>{hero.badge}</span>
              <span className={styles.binaryTelemetry} aria-hidden="true">
                {hero.binaryTelemetry}
              </span>
            </div>
            <h1 id="notebook-headline" className={styles.headline}>
              {hero.headline}
            </h1>
            <p className={styles.lead}>{hero.lead}</p>
          </div>
        </section>

        {/* 2. Filter & Search Controls */}
        <section className={styles.filterSection} aria-label="Filter notebook dispatches">
          <div className={styles.filterControls}>
            <div className={styles.categoryGroup} role="radiogroup" aria-label="Dispatch category">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="radio"
                  aria-checked={selectedCategory === cat.id}
                  className={`${styles.filterPill} ${selectedCategory === cat.id ? styles.filterActive : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className={styles.filterCount}>({cat.count})</span>
                </button>
              ))}
            </div>

            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search EDRs, telemetry, benchmarks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search notebook entries by title, keyword, or tag"
            />
          </div>
        </section>

        {/* 3. Entries List */}
        <section className={styles.entriesSection} aria-label="Notebook dispatches list">
          {filteredEntries.length === 0 ? (
            <div className={styles.emptyState}>
              No dispatches match the query &ldquo;{searchQuery}&rdquo;. Try another category or keyword.
            </div>
          ) : (
            <div className={styles.entriesList}>
              {filteredEntries.map((entry) => {
                const isExpanded = expandedEntryId === entry.id;
                return (
                  <div key={entry.id} className={styles.entryWrapper}>
                    <NotebookEntryCard
                      entry={entry}
                      onRead={handleToggleReader}
                      isExpanded={isExpanded}
                    />
                    {isExpanded && (
                      <NotebookReader
                        entry={entry}
                        onClose={() => setExpandedEntryId(null)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
