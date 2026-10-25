import type { Metadata } from 'next';
import { APP_CONFIG } from '@/core/constants/app';
import { StudioScreen, STUDIO_CONTENT } from '@/features/studio';

export const metadata: Metadata = {
  title: 'Studio',
  description: STUDIO_CONTENT.header.narrative,
  alternates: {
    canonical: '/studio',
  },
};

/**
 * Studio Route Page (/studio)
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (Screen 02)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§38)
 * Architectural Feature: FEAT-03-STUDIO
 */
export default function StudioPage() {
  return <StudioScreen />;
}
