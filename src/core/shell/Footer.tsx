'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/core/constants/routes';
import { SHELL_CONTENT } from '@/core/content/shell.content';
import { MailIcon, PhoneIcon, WhatsAppIcon } from '@/core/icons';
import { FooterTrajectoryBar } from './components/FooterTrajectoryBar';
import { FooterTelemetryBar } from './components/FooterTelemetryBar';
import { FooterCapabilitiesDock } from './components/FooterCapabilitiesDock';
import { FooterWireframeCapsule } from './components/FooterWireframeCapsule';
import styles from './footer.module.css';

/**
 * Global Site Footer Component — Pinned Curtain Parallax Architecture
 *
 * Authority: Core App Shell, Layout & Routing Contract (§3.3)
 * Authority: Level 3 Information Architecture v2.0 (§2.4)
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (§7.2)
 *
 * Core Mechanics:
 * - Pinned static at viewport bottom underneath main content (`position: fixed; bottom: 0; z-index: 1`).
 * - Main content scrolls above the footer (`z-index: 10`), with `margin-bottom: var(--footer-height)`.
 * - As the user scrolls past the last content of main, main slides upwards, revealing the stationary
 *   footer beneath like a theatre curtain opening.
 * - Dynamic ResizeObserver measures actual rendered footer height and updates `--footer-height` in real-time.
 */
export function Footer(): React.JSX.Element {
  const { footer, landmarks } = SHELL_CONTENT;
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const syncHeight = () => {
      const height = el.offsetHeight;
      if (height > 0) {
        document.documentElement.style.setProperty('--footer-height', `${height}px`);
      }
    };

    syncHeight();

    const ro = new ResizeObserver(() => {
      syncHeight();
    });
    ro.observe(el);

    window.addEventListener('resize', syncHeight, { passive: true });

    // Bidirectional scroll trajectory and window-content synchronization
    const handleWheel = (e: WheelEvent) => {
      if (!e.deltaY) return;

      const maxWindowScroll = document.documentElement.scrollHeight - window.innerHeight;
      const isWindowAtBottom = window.scrollY >= maxWindowScroll - 4;
      const hasOverflow = el.scrollHeight > el.clientHeight + 2;
      const isHoveredOnFooter = el.contains(e.target as Node) || e.target === el;

      if (e.deltaY < 0) {
        // Scrolling UP
        if (hasOverflow && el.scrollTop > 0) {
          // 1. If footer has internal scroll and is scrolled down, scroll footer to top first
          el.scrollTop = Math.max(0, el.scrollTop + e.deltaY);
          e.preventDefault();
        } else if (isHoveredOnFooter || isWindowAtBottom) {
          // 2. If footer is at top (scrollTop <= 0), scrolling up MUST scroll the window!
          // This smoothly slides main#main-content back down over the footer.
          window.scrollBy({ top: e.deltaY, behavior: 'auto' });
          e.preventDefault();
        }
      } else if (e.deltaY > 0) {
        // Scrolling DOWN
        if (!isWindowAtBottom) {
          // 1. If window has not reached the bottom yet and user is over footer, scroll the window!
          window.scrollBy({ top: e.deltaY, behavior: 'auto' });
          e.preventDefault();
        } else if (hasOverflow) {
          // 2. Window is fully at bottom, scroll inside footer
          const maxFooterScroll = el.scrollHeight - el.clientHeight;
          if (el.scrollTop < maxFooterScroll) {
            el.scrollTop = Math.min(maxFooterScroll, el.scrollTop + e.deltaY);
            e.preventDefault();
          }
        }
      }
    };

    // Mobile touch gesture synchronization on footer area
    let touchStartY = 0;
    let touchPrevY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
        touchPrevY = touchStartY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchPrevY - currentY; // positive = swipe up (scroll down), negative = swipe down (scroll up)
      touchPrevY = currentY;

      const maxWindowScroll = document.documentElement.scrollHeight - window.innerHeight;
      const isWindowAtBottom = window.scrollY >= maxWindowScroll - 4;
      const hasOverflow = el.scrollHeight > el.clientHeight + 2;

      if (deltaY < 0) {
        // Swiping down to scroll content UP / slide main back down
        if (hasOverflow && el.scrollTop > 0) {
          el.scrollTop = Math.max(0, el.scrollTop + deltaY);
          e.preventDefault();
        } else {
          // Footer is at top: scroll window up, smoothly sliding main back down!
          window.scrollBy({ top: deltaY, behavior: 'auto' });
          e.preventDefault();
        }
      } else if (deltaY > 0) {
        // Swiping up to scroll DOWN
        if (!isWindowAtBottom) {
          window.scrollBy({ top: deltaY, behavior: 'auto' });
          e.preventDefault();
        } else if (hasOverflow) {
          const maxFooterScroll = el.scrollHeight - el.clientHeight;
          if (el.scrollTop < maxFooterScroll) {
            el.scrollTop = Math.min(maxFooterScroll, el.scrollTop + deltaY);
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncHeight);
      window.removeEventListener('wheel', handleWheel);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={styles.footer}
      aria-label={landmarks.footer}
    >
      {/* Laser Top Accent Rule */}
      <div className={styles.laserTopRule} aria-hidden="true" />

      {/* Row 1: Pinned Sequential Architecture Trajectory Bar (Stays pinned when footer scrolls) */}
      <div className={styles.pinnedTrajectoryWrapper}>
        <div className="bs-container">
          <FooterTrajectoryBar />
        </div>
      </div>

      <div className="bs-container">
        <div className={styles.footerInner}>
          {/* Row 2: Live Operational Telemetry Bar */}
          <FooterTelemetryBar />

          {/* Row 3: Primary Architectural Matrix Grid */}
          <div className={styles.mainGrid}>
            {/* Left Column: Brand Identity, Ethos & Direct Action Pill */}
            <div className={styles.brandBlock}>
              <div className={styles.brandIdentity}>
                <Image
                  src={footer.logo.src}
                  alt={footer.logo.alt}
                  width={80}
                  height={80}
                  className={styles.footerLogo}
                  aria-hidden="true"
                />
                <div className={styles.wordmarkContainer}>
                  <p className={styles.wordmark}>{footer.wordmark}</p>
                  <span className={styles.practiceDescriptor}>
                    HIGH-ASSURANCE COMPUTING PRACTICE
                  </span>
                </div>
              </div>

              <div className={styles.ethosContainer}>
                <p className={styles.ethos}>{footer.ethos}</p>
                <p className={styles.subEthos}>{footer.subEthos}</p>
              </div>

              <div className={styles.directActionBlock}>
                <div className={styles.directContactHeader}>
                  <span className={styles.directContactLabel}>DIRECT CHANNELS</span>
                </div>

                <div className={styles.iconButtonsRow} role="group" aria-label="Direct communication channels">
                  <a
                    href={footer.directAction.href}
                    className={styles.iconButton}
                    title={`Email: ${footer.contact.email}`}
                    aria-label={`Send email to ${footer.contact.email}`}
                  >
                    <MailIcon className={styles.iconButtonSvg} />
                    <span className={styles.iconButtonTitle}>EMAIL</span>
                    <span className={styles.iconButtonArrow} aria-hidden="true">
                      ↗
                    </span>
                  </a>

                  <a
                    href={footer.directAction.phoneHref}
                    className={styles.iconButton}
                    title={`Call: ${footer.contact.phone}`}
                    aria-label={`Call direct line ${footer.contact.phone}`}
                  >
                    <PhoneIcon className={styles.iconButtonSvg} />
                    <span className={styles.iconButtonTitle}>PHONE</span>
                    <span className={styles.iconButtonArrow} aria-hidden="true">
                      ↗
                    </span>
                  </a>

                  <a
                    href={footer.directAction.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconButton}
                    title={`WhatsApp: ${footer.contact.phone}`}
                    aria-label={`Chat on WhatsApp with ${footer.contact.phone}`}
                  >
                    <WhatsAppIcon className={styles.iconButtonSvg} />
                    <span className={styles.iconButtonTitle}>WHATSAPP</span>
                    <span className={styles.iconButtonArrow} aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>

                <div className={styles.quickPolicyLinks}>
                  <Link href={ROUTES.serviceBoundaries} className={styles.quickPolicyLink}>
                    {footer.directAction.termsText}
                  </Link>
                  <span className={styles.policyDivider} aria-hidden="true">
                    /
                  </span>
                  <Link href={ROUTES.privacy} className={styles.quickPolicyLink}>
                    {footer.directAction.privacyText}
                  </Link>
                </div>
              </div>
            </div>

            {/* Center: Three-Column Navigation Matrix */}
            <div className={styles.columnsGrid}>
              {/* Column 1: Commercial Practice */}
              <nav aria-label={landmarks.commercialNav} className={styles.column}>
                <h3 className={styles.columnTitle}>
                  <span className={styles.columnBullet} aria-hidden="true">
                    ■
                  </span>
                  {footer.columns.commercial.title}
                </h3>
                <ul className={styles.columnList}>
                  {footer.columns.commercial.links.map((link) => (
                    <li key={link.routeKey}>
                      <Link
                        href={ROUTES[link.routeKey as keyof typeof ROUTES]}
                        className={styles.columnLink}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Column 2: Notebook & Research */}
              <nav aria-label={landmarks.researchNav} className={styles.column}>
                <h3 className={styles.columnTitle}>
                  <span className={styles.columnBullet} aria-hidden="true">
                    ■
                  </span>
                  {footer.columns.research.title}
                </h3>
                <ul className={styles.columnList}>
                  {footer.columns.research.links.map((link) => (
                    <li key={link.routeKey}>
                      <Link
                        href={ROUTES[link.routeKey as keyof typeof ROUTES]}
                        className={styles.columnLink}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Column 3: Legal & Governance */}
              <nav
                aria-label={landmarks.governanceNav}
                className={`${styles.column} ${styles.columnGovernance}`}
              >
                <h3 className={styles.columnTitle}>
                  <span className={styles.columnBullet} aria-hidden="true">
                    ■
                  </span>
                  {footer.columns.governance.title}
                </h3>
                <ul className={styles.columnList}>
                  {footer.columns.governance.links.map((link) => (
                    <li key={link.routeKey}>
                      <Link
                        href={ROUTES[link.routeKey as keyof typeof ROUTES]}
                        className={styles.columnLink}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Column: 3D Mathematical Wireframe Capsule */}
            <div className={styles.capsuleWrapper}>
              <FooterWireframeCapsule />
            </div>
          </div>

          {/* Row 4: Architectural Capabilities Dock */}
          <FooterCapabilitiesDock />

          {/* Row 5: Colophon & Legal Proof Bar */}
          <div className={styles.colophonBar}>
            <div className={styles.colophonLeft}>
              <p className={styles.colophonStatement}>
                © {currentYear} {footer.colophon.statement}
              </p>
            </div>
            <div className={styles.colophonRight}>
              <span className={styles.colophonBadge}>
                ISO 8601 UTC+05:30 // KERALA, IN
              </span>
              <span className={styles.colophonProtocol}>
                HIGH-ASSURANCE RESILIENCE ARCHITECTURE
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
