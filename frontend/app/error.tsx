'use client';

import { useEffect } from 'react';
import FastLink from './components/FastLink';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error page error:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="max-w-md w-full bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Something went wrong
            </h1>
            <p className="text-slate-400">
              We're sorry, but something unexpected happened. Please try again.
            </p>
          </div>

          {process.env.NODE_ENV === 'development' && error && (
            <div className="w-full bg-slate-900/50 rounded-lg p-4 text-left">
              <p className="text-red-400 text-sm font-mono mb-2 break-words">
                {error.message || error.toString()}
              </p>
              {error.digest && (
                <p className="text-xs text-slate-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors min-h-[44px] touch-manipulation"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <FastLink
              href="/"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors min-h-[44px] touch-manipulation"
            >
              <Home className="w-4 h-4" />
              Go Home
            </FastLink>
          </div>
        </div>
      </div>
    </div>
  );
}

