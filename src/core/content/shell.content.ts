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
  /** Small / compact logo: Header / navigation / compact containers (Mandatory minimum: 60x60px) */
  iconSmall: {
    src: '/images/icon-small.png',
    alt: '', // Decorative when inside accessible home link
    width: 96,
    height: 96,
    intrinsicWidth: 356,
    intrinsicHeight: 356,
    minRenderedWidth: 60,
    minRenderedHeight: 60,
    description: 'Compact high-contrast emblem for navigation and prominent header medallion presentation (min: 60x60px)',
  },
  /** Large / expanded logo: Cards, prominent brand areas, footer identity anchor (Mandatory minimum: 150x150px = icon-small min 60px * 2.5) */
  iconBig: {
    src: '/images/icon-big.png',
    alt: '', // Decorative when paired with text wordmark
    width: 160,
    height: 160,
    intrinsicWidth: 518,
    intrinsicHeight: 518,
    minRenderedWidth: 150,
    minRenderedHeight: 150,
    description: 'Expanded ambient insignia for cards, feature panels, and prominent footer identity anchor (min: 150x150px = 60px * 2.5)',
  },
  /** Content-area application logo: Full brand lockup with wireframe typography + central mark on transparent background (Mandatory minimum: 255x255px = icon-big min 150px * 1.7) */
  logoFullTransparent: {
    src: '/images/logo-final-transparent.png',
    alt: 'Binary Sequence Technological Art',
    width: 280,
    height: 280,
    intrinsicWidth: 1024,
    intrinsicHeight: 1024,
    minRenderedWidth: 255,
    minRenderedHeight: 255,
    description: 'Content-area application logo (min: 255x255px = icon-big min 150px * 1.7; restricted to content area only)',
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
        ariaLabel: 'Navigate to Studio',
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
      emailLabel: 'binarysequence.techart@gmail.com',
      phone: '+91 88482 10456',
      phoneRaw: '+918848210456',
      phoneHref: 'tel:+918848210456',
      whatsappUrl: 'https://wa.me/918848210456',
      label: 'binarysequence.techart@gmail.com',
      ariaLabel: 'Send email to binarysequence.techart@gmail.com',
    },
    directAction: {
      badge: '@BINARYSEQUENCE.TECHART',
      href: 'mailto:binarysequence.techart@gmail.com',
      ariaLabel: 'Direct communication: send email to binarysequence.techart@gmail.com',
      phoneBadge: '+91 88482 10456',
      phoneHref: 'tel:+918848210456',
      phoneAriaLabel: 'Direct telephone line: call +91 88482 10456',
      whatsappBadge: 'WHATSAPP // +91 88482 10456',
      whatsappHref: 'https://wa.me/918848210456',
      whatsappAriaLabel: 'Direct messaging: chat on WhatsApp with +91 88482 10456',
      termsText: 'TERMS & BOUNDARIES',
      privacyText: 'PRIVACY NOTICE',
    },
    telemetry: {
      statusLabel: 'ALL SYSTEMS OPERATIONAL',
      missionLabel: 'CUSTOM ENTERPRISE ARCHITECTURE',
      versionLabel: '1.0.0 PRODUCTION',
      anchorLabel: 'KERALA, INDIA [UTC+05:30]',
    },
    capabilitiesDock: {
      tag: 'DISCIPLINES',
      ariaLabel: 'Core Architectural Disciplines and Capabilities',
      items: [
        {
          code: 'DDD',
          title: 'DOMAIN-DRIVEN DESIGN',
          subtitle: 'Bounded Contexts & Aggregate Invariants',
          icon: '◫',
        },
        {
          code: 'RAFT',
          title: 'DISTRIBUTED CONSENSUS',
          subtitle: 'Linearizable Multi-Zone Quorum',
          icon: '▲',
        },
        {
          code: 'RING',
          title: 'LOCK-FREE DISRUPTOR',
          subtitle: 'Sub-Millisecond Zero-GC Ingestion',
          icon: '◎',
        },
        {
          code: 'MERKLE',
          title: 'CRYPTOGRAPHIC LEDGER',
          subtitle: 'Continuous Mathematical Proofs',
          icon: '◈',
        },
      ] as const,
    },
    trajectorySequence: [
      { routeKey: 'home', label: 'Home', fullLabel: 'Home // Philosophy & Identity' },
      { routeKey: 'studio', label: 'Studio', fullLabel: 'Studio // Living Narrative' },
      { routeKey: 'products', label: 'Products & Systems', fullLabel: 'Products & Systems // Operational Suite' },
      { routeKey: 'method', label: 'Sequence Method', fullLabel: 'Sequence Method // Engineering Trajectory' },
      { routeKey: 'blueprint', label: 'Sequence Blueprint', fullLabel: 'Sequence Blueprint // 10-Day Evaluation' },
      { routeKey: 'work', label: 'Selected Work', fullLabel: 'Selected Work // Enterprise Teardowns' },
      { routeKey: 'notebook', label: 'Field Notebook', fullLabel: 'Field Notebook // EDRs & Telemetry' },
      { routeKey: 'atlas', label: 'Topology Atlas', fullLabel: 'Topology Atlas // Architecture Substrate' },
      { routeKey: 'contact', label: 'Contact', fullLabel: 'Contact // Direct Discussion' },
    ] as const,
    columns: {
      commercial: {
        title: 'Commercial Practice',
        links: [
          { label: 'Home', routeKey: 'home' },
          { label: 'Studio', routeKey: 'studio' },
          { label: 'Products & Systems', routeKey: 'products' },
          { label: 'Sequence Method', routeKey: 'method' },
          { label: 'Sequence Blueprint', routeKey: 'blueprint' },
          { label: 'Selected Work', routeKey: 'work' },
          { label: 'Contact', routeKey: 'contact' },
        ] as const,
      },
      research: {
        title: 'Notebook & Research',
        links: [
          { label: 'Engineering Notebook', routeKey: 'notebook' },
          { label: 'Architecture Atlas', routeKey: 'atlas' },
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
