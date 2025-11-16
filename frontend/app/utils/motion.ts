/**
 * Motion utility for respecting prefers-reduced-motion
 * Returns appropriate animation settings based on user preference
 */

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getAnimationDuration = (defaultDuration: number): number => {
  return prefersReducedMotion() ? 0 : defaultDuration;
};

export const shouldAnimate = (): boolean => {
  return !prefersReducedMotion();
};

export const getTransitionConfig = (
  defaultConfig: { duration: number; ease?: string }
) => {
  if (prefersReducedMotion()) {
    return { duration: 0, ease: 'none' };
  }
  return defaultConfig;
};

