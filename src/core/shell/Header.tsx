'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/core/constants/routes';
import { SHELL_CONTENT } from '@/core/content/shell.content';
import { useDialogLifecycle, useNavigationProvenance } from '@/core/interaction';
import styles from './header.module.css';

/**
 * Reusable Global Navigation Header Component
 *
 * Authority: Core App Shell, Layout & Routing Contract (§3.2)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§3.2, §24)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 *
 * Provides sticky desktop navigation and an accessible mobile slide-over drawer
 * with keyboard escape handling, non-restrictive drawer navigation traversal,
 * scroll locking, GPU-composited enter/exit lifecycle transitions, and explicit ARIA semantics.
 */
export function Header() {
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const { header, landmarks } = SHELL_CONTENT;
  const { currentPath } = useNavigationProvenance();

  const {
    isOpen,
    isMounted,
    animationPhase,
    dialogRef: drawerPanelRef,
    requestClose: closeMenu,
    toggle: toggleMenu,
  } = useDialogLifecycle({
    enterDurationMs: 300,
    exitDurationMs: 200,
    triggerRef: toggleButtonRef,
    initialFocusRef: closeButtonRef,
    trapFocus: false, // Distinguish mobile drawer navigation from modal dialog focus containment
  });

  return (
    <header className={styles.header}>
      <div className={styles.appBar}>
        <div className="bs-container">
          <div className={styles.headerInner}>
            {/* Brand Identity & Wordmark (Home Anchor) */}
            <Link
              href={ROUTES.home}
              className={styles.wordmarkLink}
              aria-label={header.wordmarkAriaLabel}
              onClick={(e) => {
                if (isOpen) closeMenu();
                if (currentPath === ROUTES.home) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className={styles.logoFrame}>
                <Image
                  src={header.logo.src}
                  alt={header.logo.alt}
                  width={header.logo.width}
                  height={header.logo.height}
                  className={styles.headerLogo}
                  priority
                  aria-hidden="true"
                />
              </span>
              <span className={styles.wordmarkText}>
                <span className={styles.wordmarkPrimary}>{header.wordmarkPrimary}</span>
                <span className={styles.wordmarkSecondary}>{header.wordmarkSecondary}</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className={styles.desktopNav}
              aria-label={landmarks.primaryNav}
            >
              <ul className={styles.navList}>
                {header.navItems.map((item) => {
                  const targetPath = ROUTES[item.routeKey];
                  const isCurrent = currentPath === targetPath;
                  return (
                    <li key={item.routeKey}>
                      <Link
                        href={targetPath}
                        className={`${styles.navLink} ${isCurrent ? styles.activeNavLink : ''}`}
                        aria-label={item.ariaLabel}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop Primary CTA */}
            <Link
              href={ROUTES[header.primaryAction.routeKey]}
              className={`${styles.ctaButton} ${styles.desktopCta}`}
              aria-label={header.primaryAction.ariaLabel}
            >
              {header.primaryAction.label}
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              ref={toggleButtonRef}
              type="button"
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isOpen ? header.mobile.closeMenu : header.mobile.openMenu}
            >
              <span className={styles.menuToggleIcon} aria-hidden="true">
                <span className={styles.menuBar} />
                <span className={styles.menuBar} />
                <span className={styles.menuBar} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Slide-Over Drawer with Lifecycle Transitions */}
      {isMounted && (
        <div
          className={`${styles.drawerContainer} ${
            animationPhase === 'entered' ? styles.drawerContainerEntered : ''
          } ${animationPhase === 'exiting' ? styles.drawerContainerExiting : ''}`}
        >
          <div
            className={styles.drawerBackdrop}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <section
            ref={drawerPanelRef as React.RefObject<HTMLElement>}
            id="mobile-navigation-drawer"
            className={`${styles.drawerPanel} ${
              animationPhase === 'entered' ? styles.panelEntered : ''
            } ${animationPhase === 'exiting' ? styles.panelExiting : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label={landmarks.mobileNav}
          >
            <div className={styles.drawerHeader}>
              <div className={styles.drawerBrand}>
                <Image
                  src={header.logo.src}
                  alt={header.logo.alt}
                  width={60}
                  height={60}
                  className={styles.drawerLogo}
                  aria-hidden="true"
                />
                <span className={styles.wordmarkText}>
                  <span className={styles.wordmarkPrimary}>{header.wordmarkPrimary}</span>
                  <span className={styles.wordmarkSecondary}>{header.wordmarkSecondary}</span>
                </span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label={header.mobile.closeMenu}
              >
                ✕
              </button>
            </div>

            <nav aria-label={landmarks.primaryNav}>
              <ul className={styles.drawerNavList}>
                {header.navItems.map((item) => {
                  const targetPath = ROUTES[item.routeKey];
                  const isCurrent = currentPath === targetPath;
                  return (
                    <li key={item.routeKey}>
                      <Link
                        href={targetPath}
                        className={`${styles.drawerNavLink} ${isCurrent ? styles.activeDrawerNavLink : ''}`}
                        aria-label={item.ariaLabel}
                        aria-current={isCurrent ? 'page' : undefined}
                        onClick={closeMenu}
                      >
                        <span>{item.label}</span>
                        <span className={styles.drawerNavIndicator}>
                          {isCurrent ? '[CURRENT]' : '➔'}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.drawerFooter}>
              <Link
                href={ROUTES[header.primaryAction.routeKey]}
                className={styles.ctaButton}
                aria-label={header.primaryAction.ariaLabel}
                onClick={closeMenu}
              >
                {header.primaryAction.label}
              </Link>
            </div>
          </section>
        </div>
      )}
    </header>
  );
}
