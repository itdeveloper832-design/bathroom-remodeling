const isExport = process.env.NEXT_OUTPUT?.trim() === 'export' || true; // Default to export for cPanel
console.log('Next.js Build Mode:', isExport ? 'export' : 'standalone');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration - Force export for cPanel static hosting
  output: 'export',

  // Trailing slash ensures static export URLs match canonical tags
  trailingSlash: true,

  // Security & Best Practices
  poweredByHeader: false,
  reactStrictMode: true,

  // Image Optimization - Static export requires unoptimized: true
  images: {
    unoptimized: true,
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
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'date-fns',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
    ],
  },
  transpilePackages: ['firebase', '@firebase/app', 'firebase/firestore', '@firebase/auth', '@firebase/component', '@firebase/util'],

  // Production optimizations
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  // Page extensions
  pageExtensions: ['ts', 'tsx'],

  // TypeScript
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.json',
  },

  // Webpack optimizations
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
            priority: 30,
          },
          radixVendor: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix-vendor',
            chunks: 'all',
            priority: 20,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
