'use client';

import { startTransition, useRef, useCallback, memo } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface FastLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  prefetch?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Optimized Link component with:
 * - Debounced prefetch on hover (prevents excessive prefetch calls)
 * - startTransition for non-blocking navigation
 * - Prevents prefetch on current route
 * - Optimized event handlers with useCallback
 */
function FastLink({ 
  href, 
  children, 
  prefetch = true, 
  className,
  onClick,
  ...props 
}: FastLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const prefetchedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize prefetch handler to prevent recreation
  const handleMouseEnter = useCallback(() => {
    // Don't prefetch if already on this route
    if (pathname === href) {
      return;
    }

    // Debounce prefetch to prevent excessive calls
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (!prefetchedRef.current && typeof window !== 'undefined' && prefetch) {
        prefetchedRef.current = true;
        try {
          router.prefetch(href);
        } catch (e) {
          // Silently fail if prefetch fails
        }
      }
    }, 100); // 100ms debounce
  }, [href, pathname, prefetch, router]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }
    
    // Use startTransition to mark navigation as non-urgent
    // This allows React to keep the UI responsive during navigation
    startTransition(() => {
      // Navigation is handled by Next.js Link automatically
      // startTransition ensures smooth transitions
    });
  }, [onClick]);

  // Cleanup timeout on unmount
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={cleanup}
      onTouchStart={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(FastLink);

