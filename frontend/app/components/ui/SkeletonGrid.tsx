'use client';

import { memo } from 'react';
import Skeleton from './Skeleton';

interface SkeletonGridProps {
  variant?: 'testimonial' | 'service' | 'project' | 'card' | 'custom';
  columns?: 1 | 2 | 3 | 4;
  rows?: number;
  className?: string;
}

/**
 * Modern Grid-Based Skeleton Loader
 * Provides pre-built skeleton templates for common layouts
 */
function SkeletonGrid({
  variant = 'card',
  columns = 3,
  rows = 3,
  className = '',
}: SkeletonGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  const renderSkeleton = () => {
    switch (variant) {
      case 'testimonial':
        return (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 space-y-4">
            {/* Category Badge */}
            <Skeleton variant="rectangular" width="100px" height="24px" className="rounded-full" />
            
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} variant="circular" width="16px" height="16px" />
              ))}
            </div>
            
            {/* Content */}
            <Skeleton variant="text" lines={3} className="h-4" />
            
            {/* Author */}
            <div className="space-y-2 pt-2">
              <Skeleton variant="rectangular" width="60%" height="20px" />
              <Skeleton variant="rectangular" width="40%" height="16px" />
            </div>
          </div>
        );

      case 'service':
        return (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 space-y-4">
            {/* Icon */}
            <Skeleton variant="circular" width="48px" height="48px" className="mb-2" />
            
            {/* Title */}
            <Skeleton variant="rectangular" width="80%" height="24px" className="rounded-lg" />
            
            {/* Description */}
            <Skeleton variant="text" lines={3} className="h-4" />
            
            {/* Features */}
            <div className="space-y-2 pt-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} variant="rectangular" width={`${70 + i * 10}%`} height="16px" className="rounded" />
              ))}
            </div>
          </div>
        );

      case 'project':
        return (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50">
            {/* Image */}
            <Skeleton variant="rectangular" width="100%" height="200px" className="rounded-t-xl" />
            
            <div className="p-6 space-y-4">
              {/* Category Badge */}
              <Skeleton variant="rectangular" width="120px" height="24px" className="rounded-full" />
              
              {/* Title */}
              <Skeleton variant="rectangular" width="90%" height="28px" className="rounded-lg" />
              
              {/* Description */}
              <Skeleton variant="text" lines={2} className="h-4" />
              
              {/* Tech Stack */}
              <div className="flex gap-2 flex-wrap">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} variant="rectangular" width="60px" height="24px" className="rounded-full" />
                ))}
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-1">
                    <Skeleton variant="rectangular" width="100%" height="16px" className="rounded" />
                    <Skeleton variant="rectangular" width="60%" height="12px" className="rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'card':
        return (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Skeleton variant="circular" width="48px" height="48px" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="rectangular" width="70%" height="20px" className="rounded-lg" />
                <Skeleton variant="rectangular" width="50%" height="16px" className="rounded" />
              </div>
            </div>
            
            {/* Content */}
            <Skeleton variant="text" lines={3} className="h-4" />
            
            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
              <Skeleton variant="rectangular" width="100px" height="20px" className="rounded-full" />
              <Skeleton variant="rectangular" width="60px" height="20px" className="rounded-lg" />
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 space-y-4">
            <Skeleton variant="rectangular" width="100%" height="200px" className="rounded-lg" />
            <Skeleton variant="text" lines={3} className="h-4" />
          </div>
        );
    }
  };

  return (
    <div
      className={`grid ${gridCols[columns]} gap-4 sm:gap-6 ${className}`}
      aria-label="Loading content"
      role="status"
    >
      {Array.from({ length: columns * rows }).map((_, index) => (
        <div key={index} className="animate-pulse">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
}

export default memo(SkeletonGrid);

