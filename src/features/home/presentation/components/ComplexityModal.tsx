'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HOME_CONTENT } from '../../content';
import { useDialogLifecycle } from '@/core/interaction';
import styles from './complexity-modal.module.css';

/**
 * Complexity Absorption 4:3 Central Architecture Preview Modal
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§37)
 * Authority: Level 4 DDD Architectural Guidelines (§5.4)
 * Authority: FEATURE_SPEC.toml ([[sections]] id = "complexity-absorption")
 *
 * Implements an accessible dialog demonstrating the dual-plane architecture model
 * (User Experience Surface vs. Absorbed Architectural Substrate) in a 4:3 central frame
 * with 4-phase lifecycle transitions, strict Tab/Shift+Tab focus containment,
 * Escape dismissal, and focus restoration.
 */
export function ComplexityModal() {
  const [isClient, setIsClient] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { modalTrigger, modal } = HOME_CONTENT.complexityAbsorption;

  const {
    isOpen,
    isMounted,
    animationPhase,
    dialogRef,
    open,
    requestClose,
  } = useDialogLifecycle({
    enterDurationMs: 300,
    exitDurationMs: 200,
    triggerRef: triggerButtonRef,
    initialFocusRef: closeButtonRef,
    trapFocus: true,
  });

  const dialogElement =
    isMounted && isClient ? (
      <div
        className={`${styles.modalOverlay} ${
          animationPhase === 'entered' ? styles.overlayEntered : ''
        } ${animationPhase === 'exiting' ? styles.overlayExiting : ''}`}
      >
        <div
          className={styles.modalBackdrop}
          onClick={requestClose}
          aria-hidden="true"
        />

        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="complexity-modal-title"
          aria-describedby="complexity-modal-desc"
          className={`${styles.modalDialog} ${
            animationPhase === 'entered' ? styles.dialogEntered : ''
          } ${animationPhase === 'exiting' ? styles.dialogExiting : ''}`}
        >
          <div className={styles.modalHeader}>
            <div>
              <span className={styles.modalBadge}>
                {HOME_CONTENT.complexityAbsorption.eyebrow}
              </span>
              <h2 id="complexity-modal-title" className={styles.modalTitle}>
                {modal.title}
              </h2>
              <p id="complexity-modal-desc" className={styles.modalSubtitle}>
                {modal.subtitle}
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              className={styles.closeButton}
              onClick={requestClose}
              aria-label={modal.closeAriaLabel}
            >
              ✕
            </button>
          </div>

          {/* 4:3 Central Architecture Frame: Dual-Plane Grid */}
          <div className={styles.fovealFrame}>
            <div className={styles.planeCard}>
              <div className={styles.planeBadgeUser}>
                {modal.userPlane.badge}
              </div>
              <h3 className={styles.planeTitle}>{modal.userPlane.title}</h3>
              <p className={styles.planeDesc}>{modal.userPlane.description}</p>
            </div>

            <div className={styles.planeCard}>
              <div className={styles.planeBadgeArch}>
                {modal.architecturePlane.badge}
              </div>
              <h3 className={styles.planeTitle}>
                {modal.architecturePlane.title}
              </h3>
              <p className={styles.planeDesc}>
                {modal.architecturePlane.description}
              </p>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <p className={styles.fallbackNotice}>{modal.fallbackText}</p>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerButtonRef}
        type="button"
        className={styles.triggerButton}
        onClick={open}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={modalTrigger.ariaLabel}
      >
        <span className={styles.triggerIcon} aria-hidden="true">
          ◫
        </span>
        <span>{modalTrigger.label}</span>
      </button>

      {/* Accessible Dialog Overlay with GPU-Composited Lifecycle Transitions Portaled to Body */}
      {dialogElement && typeof document !== 'undefined'
        ? createPortal(dialogElement, document.body)
        : null}
    </>
  );
}
