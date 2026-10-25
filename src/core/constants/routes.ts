/**
 * Canonical Application Routes
 * Authority: Level 3 Information Architecture v2.0 & Core App Shell Contract
 * Method: DEC-009 Mandatory Constants Centralization
 */

export const ROUTES = {
  // Tier 1: Commercial Practice
  home: '/',
  studio: '/studio',
  products: '/products',
  method: '/method',
  blueprint: '/blueprint',
  contact: '/contact',

  // Tier 2: Deep Exploratory
  notebook: '/notebook',
  research: '/research',
  founder: '/founder',
  continuity: '/continuity',

  // Utility & Governance
  privacy: '/privacy',
  serviceBoundaries: '/service-boundaries',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
