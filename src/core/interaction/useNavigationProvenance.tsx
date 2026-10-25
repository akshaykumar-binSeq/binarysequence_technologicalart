'use client';

/**
 * useNavigationProvenance — Shared Navigation Provenance & Direction Engine
 *
 * Tracks route provenance across application transitions:
 * - Where the user navigated from (previous route path and friendly label)
 * - Where the user navigated to (current route path and friendly label)
 * - Direction of navigation (forward / backward / initial) based on architectural sequence
 * - Transition state signaling for GPU-accelerated content change animations
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract
 * Architectural Boundary: src/core/interaction/ (Shared Infrastructure)
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/core/constants/routes';

export type NavigationDirection = 'forward' | 'backward' | 'initial';

export interface RouteMeta {
  path: string;
  label: string;
  sequenceIndex: number;
}

export const ROUTE_METADATA: Record<string, RouteMeta> = {
  [ROUTES.home]: { path: ROUTES.home, label: 'Home', sequenceIndex: 1 },
  [ROUTES.studio]: { path: ROUTES.studio, label: 'Studio', sequenceIndex: 2 },
  [ROUTES.products]: { path: ROUTES.products, label: 'Products & Systems', sequenceIndex: 3 },
  [ROUTES.method]: { path: ROUTES.method, label: 'Sequence Method', sequenceIndex: 4 },
  [ROUTES.blueprint]: { path: ROUTES.blueprint, label: 'Sequence Blueprint', sequenceIndex: 5 },
  [ROUTES.contact]: { path: ROUTES.contact, label: 'Contact', sequenceIndex: 6 },
  [ROUTES.notebook]: { path: ROUTES.notebook, label: 'Engineering Notebook', sequenceIndex: 7 },
  [ROUTES.research]: { path: ROUTES.research, label: 'Research & Experiments', sequenceIndex: 8 },
  [ROUTES.founder]: { path: ROUTES.founder, label: 'Founder Profile', sequenceIndex: 9 },
  [ROUTES.continuity]: { path: ROUTES.continuity, label: 'Continuity & Trust', sequenceIndex: 10 },
  [ROUTES.privacy]: { path: ROUTES.privacy, label: 'Privacy & Governance', sequenceIndex: 11 },
  [ROUTES.serviceBoundaries]: { path: ROUTES.serviceBoundaries, label: 'Service Boundaries', sequenceIndex: 12 },
};

export function getRouteMeta(pathname: string): RouteMeta {
  if (ROUTE_METADATA[pathname]) {
    return ROUTE_METADATA[pathname];
  }
  // Check prefix matches for subpaths
  const matchedKey = Object.keys(ROUTE_METADATA).find(
    (key) => key !== '/' && pathname.startsWith(key)
  );
  if (matchedKey) {
    return ROUTE_METADATA[matchedKey];
  }
  return {
    path: pathname,
    label: pathname === '/' ? 'Home' : pathname.replace(/^\//, '').replace(/-/g, ' '),
    sequenceIndex: 99,
  };
}

export interface NavigationProvenanceContextValue {
  currentPath: string;
  previousPath: string | null;
  navigatedFrom: string | null;
  navigatedTo: string;
  direction: NavigationDirection;
  isTransitioning: boolean;
  clearProvenance: () => void;
}

const NavigationProvenanceContext = createContext<NavigationProvenanceContextValue>({
  currentPath: '/',
  previousPath: null,
  navigatedFrom: null,
  navigatedTo: 'Home',
  direction: 'initial',
  isTransitioning: false,
  clearProvenance: () => {},
});

export function NavigationProvenanceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '/';

  const [currentPath, setCurrentPath] = useState<string>(pathname);
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const [direction, setDirection] = useState<NavigationDirection>('initial');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const prevPathRef = useRef<string>(pathname);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const prev = prevPathRef.current;
    if (prev !== pathname) {
      const prevMeta = getRouteMeta(prev);
      const currMeta = getRouteMeta(pathname);

      // Determine movement direction across architectural sequence
      let calculatedDirection: NavigationDirection = 'forward';
      if (currMeta.sequenceIndex < prevMeta.sequenceIndex) {
        calculatedDirection = 'backward';
      }

      setPreviousPath(prev);
      setCurrentPath(pathname);
      setDirection(calculatedDirection);
      setIsTransitioning(true);

      prevPathRef.current = pathname;

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }
  }, [pathname]);

  const clearProvenance = useCallback(() => {
    setPreviousPath(null);
    setDirection('initial');
    setIsTransitioning(false);
  }, []);

  const navigatedFrom = useMemo(() => {
    if (!previousPath) return null;
    return getRouteMeta(previousPath).label;
  }, [previousPath]);

  const navigatedTo = useMemo(() => {
    return getRouteMeta(currentPath).label;
  }, [currentPath]);

  const value = useMemo<NavigationProvenanceContextValue>(
    () => ({
      currentPath,
      previousPath,
      navigatedFrom,
      navigatedTo,
      direction,
      isTransitioning,
      clearProvenance,
    }),
    [
      currentPath,
      previousPath,
      navigatedFrom,
      navigatedTo,
      direction,
      isTransitioning,
      clearProvenance,
    ]
  );

  return (
    <NavigationProvenanceContext.Provider value={value}>
      {children}
    </NavigationProvenanceContext.Provider>
  );
}

export function useNavigationProvenance(): NavigationProvenanceContextValue {
  return useContext(NavigationProvenanceContext);
}
