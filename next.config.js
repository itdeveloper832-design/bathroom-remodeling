const isExport = process.env.NEXT_OUTPUT?.trim() === 'export';
console.log('Next.js Build Mode:', isExport ? 'export' : 'standalone');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration - Dynamic based on deployment target
  output: isExport ? 'export' : undefined,


  // Trailing slash ensures static export URLs match canonical tags
  trailingSlash: true,

  // Security & Best Practices
  poweredByHeader: false,
  reactStrictMode: true,

  // Image Optimization - AVIF first for best compression, WebP fallback
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
    // Tighter breakpoints reduce unnecessary image variants
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
    // Limit concurrent image optimizations for server stability
    dangerouslyAllowSVG: false,
  },

  // Gzip/Brotli compression
  compress: true,

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

  // Security + Caching headers — only active in standalone/server mode
  // In static export mode (cPanel), .htaccess handles all headers instead
  async headers() {
    if (isExport) return []; // headers not supported in output: export
    return [
      {
        // Cache static assets (images, fonts, JS, CSS) for 1 year
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache public images for 30 days
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      {
        // Security headers for all routes
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  webpack(config, { dev, isServer }) {
    // Only run in production client bundles
    if (!dev && !isServer) {
      // Split large vendor chunks for better caching
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          // Separate React runtime (changes rarely)
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
            priority: 30,
          },
          // Separate Radix UI (large but cacheable)
          radixVendor: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix-vendor',
            chunks: 'all',
            priority: 20,
          },
          // Separate Firebase (very large)
          firebaseVendor: {
            test: /[\\/]node_modules[\\/](firebase|@firebase)[\\/]/,
            name: 'firebase-vendor',
            chunks: 'async',
            priority: 25,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
