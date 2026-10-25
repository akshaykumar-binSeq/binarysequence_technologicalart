'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { HOME_CONTENT } from '../../content';
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
 * with strict Tab/Shift+Tab focus containment, Escape dismissal, and focus restoration.
 */
export function ComplexityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const { modalTrigger, modal } = HOME_CONTENT.complexityAbsorption;

  const closeModal = useCallback(() => {
    setIsOpen(false);
    triggerButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
        return;
      }

      // Tab and Shift+Tab focus containment inside modal
      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, closeModal]);

  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerButtonRef}
        type="button"
        className={styles.triggerButton}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={modalTrigger.ariaLabel}
      >
        <span className={styles.triggerIcon} aria-hidden="true">
          ◫
        </span>
        <span>{modalTrigger.label}</span>
      </button>

      {/* Accessible Dialog Overlay */}
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div
            className={styles.modalBackdrop}
            onClick={closeModal}
            aria-hidden="true"
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="complexity-modal-title"
            aria-describedby="complexity-modal-desc"
            className={styles.modalDialog}
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
                onClick={closeModal}
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
      )}
    </>
  );
}
