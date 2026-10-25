import type { Metadata } from 'next';
import { ContactScreen, CONTACT_CONTENT } from '@/features/contact';

export const metadata: Metadata = {
  title: 'Contact & Inquiries',
  description: CONTACT_CONTENT.header.lead,
  alternates: {
    canonical: '/contact',
  },
};

/**
 * Contact Route Page (/contact)
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (Screen 06)
 * Authority: Level 3 Information Architecture v2.0 (§11.6)
 * Architectural Feature: FEAT-07-CONTACT
 */
export default function ContactPage() {
  return <ContactScreen />;
}
