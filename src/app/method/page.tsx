import type { Metadata } from 'next';
import { MethodScreen, METHOD_CONTENT } from '@/features/method';

export const metadata: Metadata = {
  title: 'Sequence Method',
  description: METHOD_CONTENT.header.narrative,
  alternates: {
    canonical: '/method',
  },
};

/**
 * Method Route Page (/method)
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§24, §25, §37)
 * Architectural Feature: FEAT-05-SEQUENCE-METHOD
 */
export default function MethodPage() {
  return <MethodScreen />;
}
