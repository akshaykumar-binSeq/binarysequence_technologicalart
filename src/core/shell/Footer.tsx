import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/core/constants/routes';
import { SHELL_CONTENT } from '@/core/content/shell.content';
import styles from './footer.module.css';

/**
 * Reusable Global Site Footer Component
 *
 * Authority: Core App Shell, Layout & Routing Contract (§3.3)
 * Authority: Level 3 Information Architecture v2.0 (§2.4)
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (§7.2)
 * Governing Rule: DEC-001 (binarysequence.techart@gmail.com)
 * Governing Rule: DEC-002 (System Verification Register deferred from V1)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 *
 * Pure React Server Component rendering semantic, accessible footer landmarks,
 * 3-column navigation matrix, and dynamic copyright year.
 */
export function Footer() {
  const { footer, landmarks } = SHELL_CONTENT;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label={landmarks.footer}>
      <div className="bs-container">
        <div className={styles.footerInner}>
          {/* Top Brand & Ethos Section */}
          <div className={styles.brandBlock}>
            <div className={styles.brandIdentity}>
              <Image
                src={footer.logo.src}
                alt={footer.logo.alt}
                width={footer.logo.width}
                height={footer.logo.height}
                className={styles.footerLogo}
                aria-hidden="true"
              />
              <p className={styles.wordmark}>{footer.wordmark}</p>
            </div>
            <p className={styles.ethos}>{footer.ethos}</p>
            <p className={styles.subEthos}>{footer.subEthos}</p>
            <a
              href={`mailto:${footer.contact.email}`}
              className={styles.contactLink}
              aria-label={footer.contact.ariaLabel}
            >
              {footer.contact.label}
            </a>
          </div>

          {/* Three-Column Navigation Matrix */}
          <div className={styles.columnsGrid}>
            {/* Column 1: Commercial Practice */}
            <nav
              aria-label={landmarks.commercialNav}
              className={styles.column}
            >
              <h3 className={styles.columnTitle}>
                {footer.columns.commercial.title}
              </h3>
              <ul className={styles.columnList}>
                {footer.columns.commercial.links.map((link) => (
                  <li key={link.routeKey}>
                    <Link
                      href={ROUTES[link.routeKey]}
                      className={styles.columnLink}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 2: Notebook & Research */}
            <nav
              aria-label={landmarks.researchNav}
              className={styles.column}
            >
              <h3 className={styles.columnTitle}>
                {footer.columns.research.title}
              </h3>
              <ul className={styles.columnList}>
                {footer.columns.research.links.map((link) => (
                  <li key={link.routeKey}>
                    <Link
                      href={ROUTES[link.routeKey]}
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
              className={styles.column}
            >
              <h3 className={styles.columnTitle}>
                {footer.columns.governance.title}
              </h3>
              <ul className={styles.columnList}>
                {footer.columns.governance.links.map((link) => (
                  <li key={link.routeKey}>
                    <Link
                      href={ROUTES[link.routeKey]}
                      className={styles.columnLink}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Colophon Bar */}
          <div className={styles.colophonBar}>
            <p>
              © {currentYear} {footer.colophon.statement}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
