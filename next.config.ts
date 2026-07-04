import type { NextConfig } from 'next';
import path from 'path';
import { i18n } from './next-i18next.config';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  i18n,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scryde.game',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.cdnscryde.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.scrydecdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static-eu.scrydecdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'frontend-static-eu.scrydecdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'frontend-static.scrydecdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'md.scrydecdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.scrydecdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/shop',
        destination: '/shop/gold',
        permanent: true,
      },
    ];
  },
};


module.exports = nextConfig;
