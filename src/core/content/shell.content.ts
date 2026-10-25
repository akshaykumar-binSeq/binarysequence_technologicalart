/**
 * Core Application Shell UI Text & Brand Asset Registry
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (§7.1, §7.2)
 * Authority: Level 3 Information Architecture v2.0 (§2.1, §2.4)
 * Authority: Core App Shell, Layout & Routing Contract (§3.2, §3.3)
 * Governing Rule: DEC-009 Mandatory UI Text & Asset Centralization
 * Governing Rule: DEC-001 (binarysequence.techart@gmail.com)
 * Governing Rule: DEC-002 (System Verification Register deferred from V1)
 */

/**
 * Authoritative Logo Assets Registry
 * Maps each brand asset to its intended architectural and responsive context.
 */
export const BRAND_ASSETS = {
  /** Small / compact logo: Header / navigation / compact containers */
  iconSmall: {
    src: '/images/icon-small.png',
    alt: '', // Decorative when inside accessible home link
    width: 40,
    height: 40,
    intrinsicWidth: 356,
    intrinsicHeight: 356,
    description: 'Compact high-contrast emblem for navigation and compact containers',
  },
  /** Large / expanded logo: Cards, prominent brand areas, footer identity anchor */
  iconBig: {
    src: '/images/icon-big.png',
    alt: '', // Decorative when paired with text wordmark
    width: 48,
    height: 48,
    intrinsicWidth: 518,
    intrinsicHeight: 518,
    description: 'Expanded ambient insignia for cards, feature panels, and prominent brand areas',
  },
  /** Full transparent lockup: Wireframe typography + central mark on transparent background */
  logoFullTransparent: {
    src: '/images/logo-final-transparent.png',
    alt: 'Binary Sequence Technological Art',
    width: 1024,
    height: 1024,
    intrinsicWidth: 1024,
    intrinsicHeight: 1024,
    description: 'Full brand lockup with complete wireframe wordmarks on transparent background',
  },
  /** Original reference lockup: Full lockup on solid dark surface */
  logoFullSource: {
    src: '/images/logo-final.jpg',
    alt: 'Binary Sequence Technological Art',
    width: 1024,
    height: 1024,
    intrinsicWidth: 1024,
    intrinsicHeight: 1024,
    description: 'Original reference brand lockup on solid dark surface',
  },
} as const;

export const SHELL_CONTENT = {
  skipLink: 'Skip to main content',

  landmarks: {
    header: 'Global Navigation Header',
    main: 'Main Content',
    footer: 'Global Site Footer',
    primaryNav: 'Primary Navigation',
    mobileNav: 'Mobile Navigation Drawer',
    commercialNav: 'Commercial Practice Navigation',
    researchNav: 'Notebook and Research Navigation',
    governanceNav: 'Legal and Governance Navigation',
  },

  header: {
    wordmark: 'BINARY SEQUENCE TECHNOLOGICAL ART',
    wordmarkPrimary: 'BINARY SEQUENCE',
    wordmarkSecondary: 'TECHNOLOGICAL ART',
    wordmarkAriaLabel: 'Binary Sequence Technological Art - Return to Home',
    logo: {
      src: BRAND_ASSETS.iconSmall.src,
      alt: BRAND_ASSETS.iconSmall.alt,
      width: BRAND_ASSETS.iconSmall.width,
      height: BRAND_ASSETS.iconSmall.height,
    },
    navItems: [
      {
        label: 'Studio',
        routeKey: 'studio',
        ariaLabel: 'Navigate to Studio & Philosophy',
      },
      {
        label: 'Products & Systems',
        routeKey: 'products',
        ariaLabel: 'Navigate to Products & Systems',
      },
      {
        label: 'Method',
        routeKey: 'method',
        ariaLabel: 'Navigate to Sequence Method',
      },
      {
        label: 'Blueprint',
        routeKey: 'blueprint',
        ariaLabel: 'Navigate to Sequence Blueprint',
      },
    ] as const,
    primaryAction: {
      label: 'Start a Conversation',
      routeKey: 'contact',
      ariaLabel: 'Start a Conversation - Contact & Project Inquiry',
    },
    mobile: {
      openMenu: 'Open navigation',
      closeMenu: 'Close navigation',
    },
  },

  footer: {
    wordmark: 'BINARY SEQUENCE TECHNOLOGICAL ART',
    logo: {
      src: BRAND_ASSETS.iconBig.src,
      alt: BRAND_ASSETS.iconBig.alt,
      width: BRAND_ASSETS.iconBig.width,
      height: BRAND_ASSETS.iconBig.height,
    },
    ethos: 'Everyone deserves an enterprise solution.',
    subEthos: 'Enterprise engineering. Human experience.',
    contact: {
      email: 'binarysequence.techart@gmail.com',
      label: 'binarysequence.techart@gmail.com',
      ariaLabel: 'Send email to binarysequence.techart@gmail.com',
    },
    columns: {
      commercial: {
        title: 'Commercial Practice',
        links: [
          { label: 'Home', routeKey: 'home' },
          { label: 'Studio & Philosophy', routeKey: 'studio' },
          { label: 'Products & Systems', routeKey: 'products' },
          { label: 'Sequence Method', routeKey: 'method' },
          { label: 'Sequence Blueprint', routeKey: 'blueprint' },
          { label: 'Contact', routeKey: 'contact' },
        ] as const,
      },
      research: {
        title: 'Notebook & Research',
        links: [
          { label: 'Engineering Notebook', routeKey: 'notebook' },
          { label: 'Research & Experiments', routeKey: 'research' },
          { label: 'Founder Profile', routeKey: 'founder' },
          { label: 'Continuity & Trust', routeKey: 'continuity' },
        ] as const,
      },
      governance: {
        title: 'Legal & Governance',
        links: [
          { label: 'Privacy Notice', routeKey: 'privacy' },
          { label: 'Service Boundaries', routeKey: 'serviceBoundaries' },
        ] as const,
      },
    },
    colophon: {
      statement: 'Binary Sequence Technological Art. Founder-led technical practice. Engineered with precision.',
    },
  },
} as const;

export type ShellContent = typeof SHELL_CONTENT;
