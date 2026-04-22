/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for static FTP deployment
  output: 'export',

  // Image Optimization - disable for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },

  // Compression
  compress: true,

  // Performance optimizations for Next.js 16+
  experimental: {
    optimizePackageImports: ['@/components/ui', '@/lib'],
  },

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Turbopack configuration for Next.js 16
  turbopack: {},

  // Page extensions
  pageExtensions: ['ts', 'tsx'],

  // TypeScript
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
