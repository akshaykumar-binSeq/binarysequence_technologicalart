'use client';

import React, { useRef, useState, useEffect } from 'react';
import { MethodStage } from '../../content';
import styles from './curvilinear-trajectory.module.css';

interface CurvilinearTrajectoryProps {
  stages: readonly MethodStage[];
  activeStage?: number;
  onSelectStage?: (index: number) => void;
}

// Fixed normalized coordinates for desktop widescreen SVG trajectory (1200 x 520)
const STATION_COORDINATES = [
  { x: 110, y: 110, isTerminal: true },  // 01 OBSERVE (Origin)
  { x: 330, y: 95 },                     // 02 QUESTION
  { x: 570, y: 100 },                    // 03 UNDERSTAND
  { x: 810, y: 120 },                    // 04 MODEL
  { x: 1050, y: 180 },                   // 05 ARCHITECT (Turn 1)
  { x: 920, y: 280 },                    // 06 CREATE (Return run)
  { x: 670, y: 280 },                    // 07 ENGINEER
  { x: 420, y: 285 },                    // 08 MEASURE
  { x: 170, y: 360 },                    // 09 REFINE (Turn 2)
  { x: 480, y: 440 },                    // 10 OPERATE
  { x: 1050, y: 440, isTerminal: true }, // 11 EVOLVE (Destination)
];

const TRAJECTORY_PATH_D =
  'M 110 110 C 220 90, 450 90, 570 100 C 690 110, 950 110, 1050 180 ' +
  'C 1130 230, 1040 280, 920 280 C 800 280, 550 270, 420 285 ' +
  'C 280 300, 100 320, 170 370 C 230 420, 360 440, 480 440 ' +
  'C 660 440, 880 440, 1050 440';

export function CurvilinearTrajectory({
  stages,
  activeStage = 0,
}: CurvilinearTrajectoryProps): React.JSX.Element {
  const mobileItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [mobilePassedIndices, setMobilePassedIndices] = useState<number[]>([]);

  // Mobile & Tablet (< 900px): Activate vertical grid items when rect.top <= window.innerHeight * 0.65
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        if (window.innerWidth >= 900) return; // Desktop driven by scroll-pinned trajectory frame

        const items = mobileItemRefs.current;
        if (!items || items.length === 0) return;

        const thresholdLine = window.innerHeight * 0.65;
        const newlyPassed: number[] = [];

        items.forEach((item, idx) => {
          if (!item) return;
          const rect = item.getBoundingClientRect();
          if (rect.top <= thresholdLine) {
            newlyPassed.push(idx);
          }
        });

        setMobilePassedIndices((prev) => {
          if (
            prev.length === newlyPassed.length &&
            prev.every((val, i) => val === newlyPassed[i])
          ) {
            return prev;
          }
          return newlyPassed;
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const currentStage = stages[activeStage] ?? stages[0];

  return (
    <div className={styles.trajectoryContainer} aria-label="11-Stage Sequence Method Trajectory">
      {/* --------------------------------------------------------------------
          1. Desktop Widescreen Sinuous SVG Canvas (>= 900px)
          Non-interactive display stations activated on scroll from step 1 to 11
          -------------------------------------------------------------------- */}
      <div
        className={styles.desktopCanvas}
        role="region"
        aria-label="Widescreen Trajectory Track"
      >
        <svg
          className={styles.svgLayer}
          viewBox="0 0 1200 520"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path d={TRAJECTORY_PATH_D} className={styles.trajectoryPath} />
        </svg>

        <ol className={styles.stationsLayer}>
          {stages.map((stage, idx) => {
            const coord = STATION_COORDINATES[idx] ?? { x: 100 + idx * 80, y: 260 };
            const isCurrent = activeStage === idx;
            const isVisited = idx <= activeStage;
            const isTerminal = coord.isTerminal || idx === 0 || idx === stages.length - 1;

            return (
              <li
                key={stage.index}
                className={`${styles.stationNode} ${isCurrent ? styles.stationActive : ''} ${
                  isVisited ? styles.stationVisited : ''
                } ${isTerminal ? styles.terminalStation : ''}`}
                style={{
                  left: `${(coord.x / 1200) * 100}%`,
                  top: `${(coord.y / 520) * 100}%`,
                }}
              >
                {/* Non-interactive semantic station node */}
                <div
                  id={`desktop-trajectory-station-${stage.index}`}
                  className={styles.stationCard}
                  aria-label={`Stage ${stage.index}: ${stage.name} (${stage.category})`}
                >
                  <div className={styles.stationBadge}>
                    <span className={styles.stationIndex}>{stage.index}</span>
                  </div>
                  <div className={styles.stationLabel} aria-hidden="true">
                    <span className={styles.stationName}>{stage.name}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Floating Active Stage Telemetry Strip on Desktop */}
        <div className={styles.desktopActivePill} aria-live="polite">
          <div className={styles.desktopActivePip}>{currentStage.index}</div>
          <div className={styles.desktopActiveText}>
            <span className={styles.desktopActiveName}>{currentStage.name}</span>
            <span className={styles.desktopActiveCategory}>// {currentStage.category}</span>
            <span className={styles.desktopActiveSummary}>— {currentStage.summary}</span>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------
          2. Mobile & Tablet Vertical Progressive Track (< 900px)
          Non-interactive display grids: isActive = rect.top <= window.innerHeight * 0.65
          -------------------------------------------------------------------- */}
      <div
        className={styles.mobileTrack}
        role="region"
        aria-label="Progressive Trajectory Grids"
      >
        <ol className={styles.mobileList}>
          {stages.map((stage, idx) => {
            const isActive = mobilePassedIndices.includes(idx);

            return (
              <li
                key={stage.index}
                ref={(el) => {
                  mobileItemRefs.current[idx] = el;
                }}
                className={`${styles.mobileItem} ${isActive ? styles.mobileActive : ''}`}
              >
                <div
                  id={`mobile-trajectory-station-${stage.index}`}
                  className={styles.mobileCard}
                  aria-label={`Stage ${stage.index}: ${stage.name} - ${stage.category}`}
                >
                  <div className={styles.mobilePip} aria-hidden="true">
                    {stage.index}
                  </div>
                  <div className={styles.mobileContent}>
                    <div className={styles.mobileTitleRow}>
                      <span className={styles.mobileName}>{stage.name}</span>
                      <span className={styles.mobileCategory}>// {stage.category}</span>
                    </div>
                    <p className={styles.mobileSummary}>{stage.summary}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
