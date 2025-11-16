'use client';

import { memo } from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
  animated?: boolean;
}

/**
 * Modern Skeleton Loader with Shimmer Effect
 * Provides smooth loading animations with gradient shimmer
 */
function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  lines = 1,
  animated = true,
}: SkeletonProps) {
  // Modern gradient shimmer effect
  const shimmerClasses = animated
    ? 'bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] skeleton-shimmer'
    : 'bg-slate-700';

  const variantClasses = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-xl',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2" aria-hidden="true">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${shimmerClasses} ${variantClasses[variant]} ${animated ? 'dark:from-slate-800 dark:via-slate-700 dark:to-slate-800' : 'dark:bg-slate-800'} ${className}`}
            style={i === lines - 1 ? { width: '75%', ...style } : style}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${shimmerClasses} ${variantClasses[variant]} ${animated ? 'dark:from-slate-800 dark:via-slate-700 dark:to-slate-800' : 'dark:bg-slate-800'} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export default memo(Skeleton);

