import type { MetadataRoute } from 'next';
import { APP_CONFIG } from '@/core/constants/app';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${APP_CONFIG.siteUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${APP_CONFIG.siteUrl}/studio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${APP_CONFIG.siteUrl}/method`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${APP_CONFIG.siteUrl}/products`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${APP_CONFIG.siteUrl}/blueprint`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${APP_CONFIG.siteUrl}/contact`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${APP_CONFIG.siteUrl}/work`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${APP_CONFIG.siteUrl}/notebook`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${APP_CONFIG.siteUrl}/atlas`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
