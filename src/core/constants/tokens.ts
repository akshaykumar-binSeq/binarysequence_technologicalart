/**
 * Binary Sequence Technological Art — Canonical Design Tokens
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract
 * Method: DEC-009 Mandatory Constants Centralization
 *
 * All tokens are strictly typed, deeply immutable (as const), and represent
 * the single authoritative source of truth for technical styling constants.
 */

export const COLOR_TOKENS = {
  primitives: {
    obsidianCarbon: '#0B0C0E',
    warmAlabaster: '#F6F5F0',
    signalAmber: '#D97706',
    signalAmberHover: '#F59E0B',
    deepForestSlate: '#1E293B',
    surfaceSlate: '#12151B',
  },
  semantic: {
    surfaceGround: '#0B0C0E',
    surfacePaper: '#F6F5F0',
    surfaceRaised: '#12151B',
    surfaceElevated: '#1E293B',
    accentAction: '#D97706',
    accentHover: '#F59E0B',
    borderStructural: '#1E293B',
    textHighContrast: '#F6F5F0',
    textMuted: '#94A3B8',
    textInverted: '#0B0C0E',
    focusRing: '#D97706',
    statusLive: '#10B981',
    statusDevelopment: '#F59E0B',
    statusError: '#EF4444',
  },
} as const;

export type ColorTokens = typeof COLOR_TOKENS;

export const SPACING_TOKENS = {
  space1: '0.25rem',  //  4px
  space2: '0.50rem',  //  8px
  space3: '0.75rem',  // 12px
  space4: '1.00rem',  // 16px
  space6: '1.50rem',  // 24px
  space8: '2.00rem',  // 32px
  space12: '3.00rem', // 48px
  space16: '4.00rem', // 64px
  space24: '6.00rem', // 96px
} as const;

export type SpacingTokens = typeof SPACING_TOKENS;

export const TYPOGRAPHY_TOKENS = {
  families: {
    structural: "'Inter Tight', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    editorial: "'Newsreader', Georgia, 'Times New Roman', serif",
    technical: "'JetBrains Mono', 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
  },
  fluidScale: {
    display: 'clamp(2.0rem, 1.5rem + 2.5vw, 3.5rem)',
    h2: 'clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)',
    h3: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
    lead: 'clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)',
    base: '1.000rem',
    sm: '0.875rem',
    xs: '0.750rem',
  },
  lineHeights: {
    display: '1.12',
    h2: '1.20',
    h3: '1.30',
    lead: '1.55',
    base: '1.55',
    sm: '1.45',
    xs: '1.35',
  },
  measure: {
    minCpl: 45,
    maxCpl: 75,
    targetCpl: 65,
    mobileInputMinFontSize: '16px',
  },
} as const;

export type TypographyTokens = typeof TYPOGRAPHY_TOKENS;

export const MOTION_TOKENS = {
  durations: {
    fast: '150ms',
    medium: '300ms',
    exit: '200ms',
    slow: '450ms',
  },
  durationsMs: {
    fast: 150,
    medium: 300,
    exit: 200,
    slow: 450,
  },
  easings: {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    inCurve: 'cubic-bezier(0.4, 0.0, 1, 1)',
  },
  invariants: {
    compositedPropertiesOnly: ['transform', 'opacity'] as const,
    prefersReducedMotionOverride: '0.01ms',
    flashingMaxFrequency: 3,
    clsBudgetMax: 0.05,
  },
} as const;

export type MotionTokens = typeof MOTION_TOKENS;

export const Z_INDEX_TOKENS = {
  below: -1,
  base: 0,
  surface: 10,
  sticky: 100,
  drawer: 200,
  backdrop: 300,
  modal: 400,
  popover: 500,
  toast: 600,
  skipLink: 700,
} as const;

export type ZIndexTokens = typeof Z_INDEX_TOKENS;

export const BREAKPOINT_TOKENS = {
  mobileMax: 639,
  tabletMin: 640,
  tabletMax: 1024,
  desktopMin: 1025,
  desktopWide: 1440,
  widescreenMin: 1441,
} as const;

export type BreakpointTokens = typeof BREAKPOINT_TOKENS;

export const LAYOUT_TOKENS = {
  containerMax: '1280px',
  containerWide: '1440px',
  measureMax: '65ch',
  touchTargetMin: 44,
  touchTargetPreferred: 48,
  focusRingWidth: '2px',
  focusRingOffset: '2px',
} as const;

export type LayoutTokens = typeof LAYOUT_TOKENS;

export const RADIUS_TOKENS = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '9999px',
} as const;

export type RadiusTokens = typeof RADIUS_TOKENS;
