import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
};

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
};

export default nextConfig;
