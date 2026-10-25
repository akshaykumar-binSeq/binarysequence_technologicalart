import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES } from '@/core/constants/routes';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: '404: State Not Found',
  description: 'The requested state or resource does not exist in this sequence.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: null,
  },
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge} aria-label="Error Status">
          <span>STATUS 404 // ADDRESS UNRESOLVED</span>
        </div>
        <h1 className={styles.title}>The requested state does not exist in this sequence.</h1>
        <p className={styles.narrative}>
          The resource or route you requested could not be located in the current architecture.
          It may have moved, transitioned into a different state, or never existed.
        </p>
        <div className={styles.actions}>
          <Link href={ROUTES.home} className={styles.primaryButton}>
            Return to Sequence [0]
          </Link>
          <Link href={ROUTES.studio} className={styles.secondaryButton}>
            Explore Studio
          </Link>
        </div>
      </div>
    </div>
  );
}
