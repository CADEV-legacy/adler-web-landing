import { MetadataRoute } from 'next';

import { SERVER_SETTINGS } from './settings';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${SERVER_SETTINGS.DOMAIN}/sitemap.xml`,
});

export default robots;
