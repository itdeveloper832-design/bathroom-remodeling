const crypto = require('crypto');
const isExport = process.env.NEXT_OUTPUT?.trim() === 'export' || true; // Default to export for cPanel
console.log('Next.js Build Mode:', isExport ? 'export' : 'standalone');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration - Force export for cPanel static hosting
  output: 'export',

  // Trailing slash ensures static export URLs match canonical tags
  trailingSlash: true,

  // Redirects for legacy/duplicate pages + SEO canonical consolidation
  async redirects() {
    const legacy = [
      {
        source: '/remodeling-gilbert-az/',
        destination: '/bathroom-remodeling-gilbert-az/',
        permanent: true,
      },
      {
        source: '/remodeling-mesa-az/',
        destination: '/bathroom-remodeling-mesa-az/',
        permanent: true,
      },
      {
        source: '/remodeling-tempe-az/',
        destination: '/bathroom-remodeling-tempe-az/',
        permanent: true,
      },
    ];
    let seo = [];
    try {
      const generated = require('./lib/seo-redirects.generated.json');
      seo = generated.map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: r.permanent !== false,
      }));
    } catch {
      seo = [];
    }
    return [...legacy, ...seo];
  },

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
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip',
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

  // Turbopack configuration for Next.js 16
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
  },

  // Webpack optimizations (fallback for webpack mode)
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return module.size() > 160000 && /node_modules[\\/]/.test(module.identifier());
            },
            name(module) {
              const hash = crypto.createHash('sha1');
              hash.update(module.identifier());
              return hash.digest('hex').substring(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name(module, chunks) {
              return crypto
                .createHash('sha1')
                .update(chunks.reduce((acc, chunk) => acc + chunk.name, ''))
                .digest('hex') + '-shared';
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
