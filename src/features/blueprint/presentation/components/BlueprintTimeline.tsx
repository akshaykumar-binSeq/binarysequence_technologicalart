'use client';

import React from 'react';
import { BLUEPRINT_CONTENT } from '../../content';
import styles from './blueprint-timeline.module.css';

export function BlueprintTimeline(): React.JSX.Element {
  const { timeline } = BLUEPRINT_CONTENT;

  return (
    <section id="blueprint-timeline" className={styles.section} aria-labelledby="timeline-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>{timeline.eyebrow}</span>
        <h2 id="timeline-heading" className={styles.headline}>
          {timeline.headline}
        </h2>
        <p className={styles.lead}>{timeline.lead}</p>
      </div>

      <div className={styles.timelineTrack} role="region" aria-label="10-Day Discovery Stages">
        <ol className={styles.stagesList}>
          {timeline.stages.map((stage, idx) => (
            <li key={idx} className={styles.stageItem}>
              <div className={styles.spine}>
                <span className={styles.pip} aria-hidden="true" />
                <span className={styles.spineLine} aria-hidden="true" />
              </div>

              <div className={styles.stageBody}>
                <div className={styles.stageHeader}>
                  <span className={styles.dayRange}>{stage.dayRange}</span>
                  <h3 className={styles.stageTitle}>{stage.stageTitle}</h3>
                </div>

                <p className={styles.objective}>{stage.objective}</p>

                <ul className={styles.activitiesList}>
                  {stage.activities.map((act, actIdx) => (
                    <li key={actIdx} className={styles.activityItem}>
                      <span className={styles.activityPip} aria-hidden="true">↳</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
