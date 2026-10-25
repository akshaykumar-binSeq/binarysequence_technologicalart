import type { Metadata } from 'next';
import { APP_CONFIG } from '@/core/constants/app';
import { HomeScreen } from '@/features/home';

export const metadata: Metadata = {
  title: APP_CONFIG.homeSeoTitle,
  description: APP_CONFIG.homeSeoDescription,
  alternates: {
    canonical: '/',
  },
};

/**
 * Root Route Page (/)
 *
 * Authority: DEC-DR04 Direct Home Landing
 * Routes directly to FEAT-02-HOME HomeScreen without blocking gates or onboarding redirects.
 */
export default function HomePage() {
  return <HomeScreen />;
}
