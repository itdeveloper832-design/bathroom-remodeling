/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration - 'standalone' is better for performance and image optimization
  // Switch to 'export' only if your host doesn't support Node.js
  output: 'standalone',

  // Trailing slash ensures static export URLs match canonical tags
  trailingSlash: true,

  // Image Optimization - Enable for better performance
  images: {
    formats: ['image/avif', 'image/webp'],
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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression enabled by default
  compress: true,

  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      '@/components/ui', 
      '@/lib',
      'lucide-react',
      'framer-motion',
      'date-fns'
    ],
  },

  // Production optimizations
  productionBrowserSourceMaps: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },


  // Page extensions
  pageExtensions: ['ts', 'tsx'],

  // TypeScript
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
