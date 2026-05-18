
/**
 * Utility to discover all valid routes in the Next.js app directory.
 */
export function getAppRoutes(baseDir: string = './app'): string[] {
  const fs = require('fs');
  const path = require('path');
  const routes: string[] = [];
  
  function scan(dir: string, routePath: string = '') {
    const files = fs.readdirSync(dir);
    
    if (files.some((f: string) => f.startsWith('page.'))) {
      if (!routePath.startsWith('/_') && 
          !routePath.startsWith('/api') && 
          !routePath.startsWith('/admin') &&
          !routePath.includes('(auth)')) {
        routes.push(routePath === '' ? '/' : routePath);
      }
    }
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory() && !file.startsWith('_') && !file.startsWith('.')) {
        scan(fullPath, `${routePath}/${file}`);
      }
    }
  }

  try {
    const resolvedAppDir = path.resolve(process.cwd(), 'app');
    if (fs.existsSync(resolvedAppDir)) {
      scan(resolvedAppDir);
    }
  } catch (error) {
    console.error('Error scanning app routes:', error);
  }
  
  return routes;
}

/**
 * Returns a priority score (0.0 to 1.0) based on the route importance.
 */
export function getRoutePriority(route: string): number {
  if (route === '/') return 1.0;
  
  const highPriority = [
    '/bathroom-remodeling',
    '/bathroom-remodeling-chandler-az',
  ];
  
  const midPriority = [
    '/about',
    '/gallery',
    '/blog',
    '/offers',
    '/financing',
    '/contact'
  ];

  if (highPriority.some(p => route === p || route === `${p}/`)) return 0.9;
  if (midPriority.some(p => route === p || route === `${p}/`)) return 0.8;
  
  if (route.includes('/bathroom-remodeling-areas/')) return 0.85;
  if (route.includes('chandler-az-')) return 0.8;

  return 0.7; 
}

/**
 * Returns a change frequency based on the route type.
 */
export function getRouteFrequency(route: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (route === '/' || route.includes('/blog') || route.includes('/offers')) return 'weekly';
  if (route.includes('/privacy-policy') || route.includes('/terms-of-service')) return 'yearly';
  return 'monthly';
}

/**
 * Gets the last modified date.
 */
export function getRouteLastMod(route: string): Date {
  return new Date('2026-05-18');
}

/**
 * Checks if a route should be excluded based on noindex metadata.
 */
export function isNoIndexRoute(route: string): boolean {
  // Exclude non-bathroom services completely
  const excludedKeywords = ['kitchen', 'painting', 'roofing', 'home-renovation'];
  if (excludedKeywords.some(keyword => route.includes(keyword))) {
    return true;
  }

  try {
    const fs = require('fs');
    const path = require('path');
    const routeDir = route === '/' ? '' : route;
    const pagePath = path.resolve(process.cwd(), 'app', routeDir.startsWith('/') ? routeDir.slice(1) : routeDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf8');
      if (content.includes('index: false') || content.includes('noindex: true') || content.includes('index: false')) {
        return true;
      }
    }
  } catch (e) {
    // Fallback to false
  }
  return false;
}



