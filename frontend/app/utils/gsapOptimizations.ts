import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Initialize GSAP performance optimizations
 * Call this once at app startup
 */
export function initGSAPOptimizations() {
  if (typeof window === 'undefined') return;

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Set global GSAP defaults for performance
  gsap.defaults({
    force3D: true, // Force GPU acceleration
    immediateRender: false, // Don't render immediately
  });

  // Optimize ScrollTrigger globally for better sync
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    ignoreMobileResize: true, // Ignore mobile resize events for better performance
    syncInterval: 0.1, // Sync interval for better synchronization
  });

  // Optimize ticker for smoother, synchronized animations
  // Disable lag smoothing for frame-perfect sync (0 = disabled)
  // This ensures animations stay in sync with the browser's render cycle
  gsap.ticker.lagSmoothing(0);
  
  // Use will-change for better performance
  // This is handled per-element in components
}

/**
 * Set will-change property for animated elements
 * Call this before animating to hint browser about upcoming changes
 */
export function setWillChange(element: HTMLElement, property: string = 'transform, opacity') {
  if (element) {
    element.style.willChange = property;
  }
}

/**
 * Clear will-change property after animation
 * This prevents memory issues from keeping will-change active
 */
export function clearWillChange(element: HTMLElement) {
  if (element) {
    element.style.willChange = 'auto';
  }
}

/**
 * Create optimized ScrollTrigger configuration
 */
export function createOptimizedScrollTrigger(config: {
  trigger?: gsap.DOMTarget;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  [key: string]: any;
}) {
  return {
    ...config,
    scrub: config.scrub !== undefined ? (typeof config.scrub === 'number' ? Math.max(0.1, Math.min(1, config.scrub)) : config.scrub) : 0.5,
    invalidateOnRefresh: true,
    ...(config.trigger && { trigger: config.trigger }),
  };
}

/**
 * Optimize element for animation by setting CSS properties
 */
export function optimizeElementForAnimation(element: HTMLElement | null) {
  if (!element) return;
  
  setWillChange(element, 'transform, opacity');
  // Force GPU acceleration
  (element.style as any).transform = 'translateZ(0)';
}

