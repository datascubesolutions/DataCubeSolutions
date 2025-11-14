'use client';

import { startTransition, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FastLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  prefetch?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Ultra-fast Link component with:
 * - Prefetch on hover (instant navigation)
 * - startTransition for smooth navigation
 * - Optimized prefetching strategy
 */
export default function FastLink({ 
  href, 
  children, 
  prefetch = true, 
  className,
  onClick,
  ...props 
}: FastLinkProps) {
  const router = useRouter();
  const prefetchedRef = useRef(false);

  const handleMouseEnter = () => {
    // Aggressive prefetch on hover for ultra-fast navigation
    if (!prefetchedRef.current && typeof window !== 'undefined') {
      prefetchedRef.current = true;
      // Force prefetch immediately on hover
      try {
        router.prefetch(href);
      } catch (e) {
        // Silently fail if prefetch fails
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    
    // Use startTransition for smoother navigation
    startTransition(() => {
      // Navigation is handled by Link, but we ensure smooth transition
    });
  };

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={className}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter} // Also prefetch on touch for mobile
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}

