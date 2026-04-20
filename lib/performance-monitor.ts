// Performance monitoring for critical metrics
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Monitor Web Vitals
  if ('web-vital' in window) {
    // LCP - Largest Contentful Paint
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('[v0] LCP:', entry.startTime);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Silently fail for older browsers
    }
  }

  // Monitor navigation timing
  if ('PerformanceNavigationTiming' in window) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log('[v0] Page Load Time:', pageLoadTime, 'ms');
    });
  }

  // Monitor long tasks
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.log('[v0] Long Task Detected:', entry.duration, 'ms');
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long task API not supported
    }
  }
}

// Report Core Web Vitals
export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    console.log(`[v0] ${metric.name}:`, metric.value);
  }
}
