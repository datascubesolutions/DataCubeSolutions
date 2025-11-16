'use client';

import { memo, ReactNode } from 'react';
import { Inbox, Search, AlertCircle, FileX } from 'lucide-react';

interface EmptyStateProps {
  icon?: 'inbox' | 'search' | 'alert' | 'file';
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

const iconMap = {
  inbox: Inbox,
  search: Search,
  alert: AlertCircle,
  file: FileX,
};

function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  className = '',
}: EmptyStateProps) {
  const Icon = iconMap[icon];

  return (
    <div
      className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="mb-4 p-4 rounded-full bg-gray-100 dark:bg-gray-800">
        <Icon
          className="w-8 h-8 text-gray-400 dark:text-gray-500"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mb-4">
          {description}
        </p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export default memo(EmptyState);

