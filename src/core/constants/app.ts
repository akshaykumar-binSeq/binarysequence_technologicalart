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
  siteUrl: 'https://binarysequencetechnologicalart.web.app',
  defaultTitle: 'Binary Sequence Technological Art',
  titleTemplate: '%s | Binary Sequence Technological Art',
  homeSeoTitle: 'Binary Sequence Technological Art | Enterprise Engineering, Human Experience',
  homeSeoDescription:
    'Binary Sequence Technological Art is an independent product studio building thoughtful digital products through rigorous engineering, human-centered design, and considered technology.',
  description:
    'Binary Sequence Technological Art is an independent product studio building thoughtful digital products through rigorous engineering, human-centered design, and considered technology.',
  locale: 'en_US',
  htmlLang: 'en',
  contactEmail: 'binarysequence.techart@gmail.com',
  contactPhone: '+91 88482 10456',
  contactPhoneRaw: '+918848210456',
  contactWhatsappUrl: 'https://wa.me/918848210456',
  themeColor: '#0B0C0E',
  defaultSocialImage: {
    url: '/images/social-share.jpg',
    width: 1200,
    height: 630,
    alt: 'Binary Sequence Technological Art — Enterprise Engineering, Human Experience',
    type: 'image/jpeg',
  },
  keywords: [
    'Binary Sequence Technological Art',
    'Enterprise Architecture',
    'Custom Product Engineering',
    'Domain-Driven Design',
    'Systems Engineering',
    'Technological Art',
    'Full-Stack Engineering',
    'Human-Centered Design',
    'Software Architecture',
    'Digital Product Development',
  ] as const,
} as const;

export type AppConfig = typeof APP_CONFIG;
