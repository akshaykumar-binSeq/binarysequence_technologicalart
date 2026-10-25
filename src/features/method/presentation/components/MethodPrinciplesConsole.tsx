import React from 'react';
import { METHOD_CONTENT } from '../../content';
import styles from './method-principles-console.module.css';

export function MethodPrinciplesConsole(): React.JSX.Element {
  const { principles } = METHOD_CONTENT;

  return (
    <section id="method-principles" className={styles.consoleSection} aria-labelledby="principles-heading">
      <header className={styles.consoleHeader}>
        <p className={styles.eyebrow}>{principles.eyebrow}</p>
        <h2 id="principles-heading" className={styles.headline}>
          {principles.headline}
        </h2>
        <p className={styles.lead}>{principles.lead}</p>
      </header>

      <div className={styles.consoleCard} role="region" aria-label="Seven Architectural Standards">
        {principles.items.map((item) => (
          <article key={item.number} className={styles.consoleRow}>
            <div className={styles.rowTitleColumn}>
              <span className={styles.rowIndex}>{item.number}</span>
              <div className={styles.rowTitleBlock}>
                <h3 className={styles.rowTitle}>{item.title}</h3>
                <span className={styles.rowDomainTag}>// {item.domainTag}</span>
              </div>
            </div>

            <div className={styles.rowContentColumn}>
              <p className={styles.rowDescription}>{item.description}</p>
              <p className={styles.rowRule}>
                <span>INVARIANT // </span>
                {item.architecturalRule}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
