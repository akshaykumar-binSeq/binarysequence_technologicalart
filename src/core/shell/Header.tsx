'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/core/constants/routes';
import { SHELL_CONTENT } from '@/core/content/shell.content';
import styles from './header.module.css';

/**
 * Reusable Global Navigation Header Component
 *
 * Authority: Core App Shell, Layout & Routing Contract (§3.2)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§3.2, §24)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 *
 * Provides sticky desktop navigation and an accessible mobile slide-over drawer
 * with keyboard escape handling, Tab/Shift+Tab focus containment, scroll locking,
 * and explicit ARIA semantics.
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const drawerPanelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const { header, landmarks } = SHELL_CONTENT;

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    toggleButtonRef.current?.focus();
  }, []);

  // Handle Escape key and Tab focus trap for mobile drawer
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        return;
      }

      // Tab / Shift+Tab focus trap inside drawer
      if (event.key === 'Tab' && drawerPanelRef.current) {
        const focusableElements = drawerPanelRef.current.querySelectorAll<HTMLElement>(
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

    // Lock background scroll when drawer is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, closeMenu]);

  return (
    <header className={styles.header}>
      <div className="bs-container">
        <div className={styles.headerInner}>
          {/* Brand Identity & Wordmark (Home Anchor) */}
          <Link
            href={ROUTES.home}
            className={styles.wordmarkLink}
            aria-label={header.wordmarkAriaLabel}
            onClick={() => isOpen && closeMenu()}
          >
            <Image
              src={header.logo.src}
              alt={header.logo.alt}
              width={header.logo.width}
              height={header.logo.height}
              className={styles.headerLogo}
              priority
              aria-hidden="true"
            />
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
              {header.navItems.map((item) => (
                <li key={item.routeKey}>
                  <Link
                    href={ROUTES[item.routeKey]}
                    className={styles.navLink}
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
            onClick={() => setIsOpen((prev) => !prev)}
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

      {/* Accessible Mobile Slide-Over Drawer */}
      {isOpen && (
        <div className={styles.drawerContainer}>
          <div
            className={styles.drawerBackdrop}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <section
            ref={drawerPanelRef}
            id="mobile-navigation-drawer"
            className={styles.drawerPanel}
            role="dialog"
            aria-modal="true"
            aria-label={landmarks.mobileNav}
          >
            <div className={styles.drawerHeader}>
              <div className={styles.drawerBrand}>
                <Image
                  src={header.logo.src}
                  alt={header.logo.alt}
                  width={36}
                  height={36}
                  className={styles.headerLogo}
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
                {header.navItems.map((item) => (
                  <li key={item.routeKey}>
                    <Link
                      href={ROUTES[item.routeKey]}
                      className={styles.drawerNavLink}
                      aria-label={item.ariaLabel}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
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
