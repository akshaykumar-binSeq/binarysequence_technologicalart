import { HomeScreen } from '@/features/home';

/**
 * Root Route Page (/)
 *
 * Authority: DEC-DR04 Direct Home Landing
 * Routes directly to FEAT-02-HOME HomeScreen without blocking gates or onboarding redirects.
 */
export default function HomePage() {
  return <HomeScreen />;
}
