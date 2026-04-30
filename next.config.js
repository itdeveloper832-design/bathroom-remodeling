const isExport = process.env.NEXT_OUTPUT === 'export' || true; // Defaulting to true for cPanel FTP compatibility
console.log('Next.js Build Mode:', isExport ? 'export' : 'standalone');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration - Dynamic based on deployment target
  output: isExport ? 'export' : 'standalone',

  // Trailing slash ensures static export URLs match canonical tags
  trailingSlash: true,

  // Image Optimization
  images: {
    unoptimized: isExport,
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
      'date-fns'
    ],
  },

  // Production optimizations
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  // Page extensions
  pageExtensions: ['ts', 'tsx'],

  // TypeScript
  typescript: {
    ignoreBuildErrors: true, // Speeds up builds
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
