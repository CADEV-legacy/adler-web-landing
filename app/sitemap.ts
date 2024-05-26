import { MetadataRoute } from 'next';

import { SERVER_SETTINGS } from './settings';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: SERVER_SETTINGS.DOMAIN,
    lastModified: new Date(),
    changeFrequency: 'daily',
  },
];

export default sitemap;
