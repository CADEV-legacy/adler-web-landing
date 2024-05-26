/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
};

export default nextConfig;
