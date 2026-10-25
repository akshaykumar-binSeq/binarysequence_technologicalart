'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { METHOD_CONTENT } from '../content';
import { useContentProgression, useSmoothAnchor } from '@/core/interaction';
import { CurvilinearTrajectory } from './components/CurvilinearTrajectory';
import { StageDetailInspector } from './components/StageDetailInspector';
import { MethodPrinciplesConsole } from './components/MethodPrinciplesConsole';
import styles from './method.module.css';

export function MethodScreen(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const trajectorySectionRef = useRef<HTMLElement>(null);
  const stickyFrameRef = useRef<HTMLDivElement>(null);
  const { handleAnchorClick } = useSmoothAnchor();
  const { header, trajectory, stages, closing } = METHOD_CONTENT;

  // 1. Trajectory animation active stage (0 to 10) driven by scroll pinning on desktop
  const [trajectoryActiveStage, setTrajectoryActiveStage] = useState(0);

  // 2. Stage Detail Inspector active stage (0 to 10) — independent of trajectory
  const {
    activeStage: inspectorActiveStage,
    handleStageSelect: handleInspectorSelect,
    handlePrev: handleInspectorPrev,
    handleNext: handleInspectorNext,
  } = useContentProgression({
    stageCount: stages.length,
    initialStage: 0,
    containerRef,
    gestures: { enabled: true },
    scrollProgression: { enabled: false },
  });

  // ---------------------------------------------------------------------------
  // Desktop Scroll-Pinned Trajectory Animation Driver
  // Pins the header + canvas while user scrolls through 1600px of travel,
  // activating steps 1 to 11. Once all steps are active, unpins to continue.
  // NOTE: Trajectory animation strictly controls trajectoryActiveStage only;
  // it does NOT alter the inspector's index below.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        if (window.innerWidth < 900) return; // Mobile handled natively by vertical track

        const section = trajectorySectionRef.current;
        const frame = stickyFrameRef.current;
        if (!section || !frame) return;

        const rect = section.getBoundingClientRect();
        const frameHeight = frame.offsetHeight;
        const stickyTop = window.innerWidth >= 1025 ? 96 : 88;
        const totalScrollableDistance = rect.height - frameHeight;

        if (totalScrollableDistance <= 0) return;

        // Scrolled distance inside the pinned zone
        const scrolledInside = stickyTop - rect.top;

        if (scrolledInside < 0) {
          if (trajectoryActiveStage !== 0) {
            setTrajectoryActiveStage(0);
          }
        } else if (scrolledInside >= totalScrollableDistance) {
          if (trajectoryActiveStage !== stages.length - 1) {
            setTrajectoryActiveStage(stages.length - 1);
          }
        } else {
          // Progress across the first 85% of pinned travel so all 11 steps are fully
          // active and observable before the container unpins to scroll down.
          const progress = Math.min(1, Math.max(0, scrolledInside / (totalScrollableDistance * 0.85)));
          const step = Math.min(stages.length - 1, Math.floor(progress * stages.length));
          if (step !== trajectoryActiveStage) {
            setTrajectoryActiveStage(step);
          }
        }
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
  }, [stages.length, trajectoryActiveStage]);

  return (
    <div ref={containerRef} className={styles.screenContainer}>
      <div className="bs-container">
        {/* ------------------------------------------------------------------
            1. Introduction Section
            ------------------------------------------------------------------ */}
        <section id="method-intro" className={styles.introSection} aria-labelledby="method-heading">
          <header className={styles.introHeader}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>{header.eyebrow}</span>
              <span className={styles.binaryTelemetry} aria-hidden="true">
                {header.binaryTelemetry}
              </span>
            </div>
            <h1 id="method-heading" className={styles.headline}>
              {header.headline}
            </h1>
            <p className={styles.subHeadline}>{header.subHeadline}</p>
            <p className={styles.narrative}>{header.narrative}</p>

            <a
              href="#trajectory"
              className={styles.anchorCta}
              onClick={handleAnchorClick}
              aria-label="Scroll to 11-stage trajectory explorer"
            >
              {header.scrollAnchorLabel}
            </a>
          </header>
        </section>

        {/* ------------------------------------------------------------------
            2. Interactive Eleven-Stage Trajectory (Scroll-Pinned Animation)
            Pins the header & canvas on desktop while scrolling steps 1 to 11.
            Once all steps are active, unpins and continues down the page.
            ------------------------------------------------------------------ */}
        <section
          id="trajectory"
          ref={trajectorySectionRef}
          className={styles.trajectorySection}
          aria-labelledby="trajectory-heading"
        >
          <div ref={stickyFrameRef} className={styles.trajectoryStickyFrame}>
            <header className={styles.trajectoryHeader}>
              <div className={styles.eyebrowRow}>
                <p className={styles.eyebrow}>{trajectory.eyebrow}</p>
                <span className={styles.trajectoryStepBadge} aria-live="polite">
                  STAGE [ {String(trajectoryActiveStage + 1).padStart(2, '0')} / 11 ] : {stages[trajectoryActiveStage]?.name}
                </span>
              </div>
              <h2 id="trajectory-heading" className={styles.headline}>
                {trajectory.headline}
              </h2>
              <p className={styles.lead}>{trajectory.lead}</p>
            </header>

            {/* Archetype P3: Connected Curvilinear Trajectory Canvas */}
            <CurvilinearTrajectory
              stages={stages}
              activeStage={trajectoryActiveStage}
            />
          </div>
        </section>

        {/* ------------------------------------------------------------------
            3. Master-Detail Stage Inspector Stream (Sticky "01. OBSERVE → 11. EVOLVE" + 11 Stage Cards)
            ------------------------------------------------------------------ */}
        <section id="stage-inspector" className={styles.inspectorSection} aria-label="Method Stage Inspection Stream">
          <StageDetailInspector
            stages={stages}
            activeStage={inspectorActiveStage}
            onSelectStage={handleInspectorSelect}
            onPrevStage={handleInspectorPrev}
            onNextStage={handleInspectorNext}
          />
        </section>

        {/* ------------------------------------------------------------------
            4. Architectural Principles (Archetype P4 Monolithic Striped Console)
            ------------------------------------------------------------------ */}
        <MethodPrinciplesConsole />

        {/* ------------------------------------------------------------------
            5. Closing Navigation
            ------------------------------------------------------------------ */}
        <section id="method-closing" className={styles.closingSection} aria-labelledby="closing-heading">
          <div className={styles.closingCard}>
            <p className={styles.eyebrow}>{closing.eyebrow}</p>
            <h2 id="closing-heading" className={styles.closingHeadline}>
              {closing.headline}
            </h2>
            <p className={styles.closingLead}>{closing.lead}</p>
            <div className={styles.closingActions}>
              <Link
                href={closing.actions.primary.href}
                className={styles.btnPrimary}
                aria-label={closing.actions.primary.ariaLabel}
              >
                {closing.actions.primary.label}
              </Link>
              <Link
                href={closing.actions.secondary.href}
                className={styles.btnSecondary}
                aria-label={closing.actions.secondary.ariaLabel}
              >
                {closing.actions.secondary.label}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
