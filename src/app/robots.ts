import type { MetadataRoute } from 'next';
import { APP_CONFIG } from '@/core/constants/app';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${APP_CONFIG.siteUrl}/sitemap.xml`,
  };
}
