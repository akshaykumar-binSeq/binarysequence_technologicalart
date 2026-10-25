/**
 * Application Identity & Metadata Configuration
 * Authority: Level 1 Foundational Strategy & Level 2 Audience-Facing Content Spec v1.1
 * Method: DEC-009 Mandatory Constants Centralization
 */

export const APP_CONFIG = {
  name: 'Binary Sequence Technological Art',
  shortName: 'Binary Sequence',
  author: 'Akshay Kumar VJ',
  tagline: 'Enterprise engineering. Human experience.',
  proposition: 'Everyone deserves an enterprise solution.',
  defaultTitle: 'Binary Sequence Technological Art',
  titleTemplate: '%s | Binary Sequence Technological Art',
  description:
    'We engineer scalable, secure digital systems and refined user interfaces for businesses, startups, and independent operators. By absorbing complexity inside the architecture, we ensure your software remains clear to use, economical to run, and maintainable over time.',
  locale: 'en',
  contactEmail: 'binarysequence.techart@gmail.com',
  themeColor: '#0B0C0E',
  keywords: [
    'Binary Sequence Technological Art',
    'Enterprise Architecture',
    'Custom Product Engineering',
    'Domain-Driven Design',
    'Systems Engineering',
    'Technological Art',
  ] as const,
} as const;

export type AppConfig = typeof APP_CONFIG;
