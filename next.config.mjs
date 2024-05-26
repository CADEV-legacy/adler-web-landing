/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    loader: 'akamai',
    path: '/',
    unoptimized: true,
  },
};

export default nextConfig;
