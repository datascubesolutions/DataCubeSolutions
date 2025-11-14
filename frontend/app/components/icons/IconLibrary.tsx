/**
 * Premium Icon Library Component
 * 
 * This component provides a unified interface for using premium Streamline Icons
 * throughout the application. Once Streamline icons are purchased and downloaded,
 * replace the placeholder SVGs with actual icon imports.
 * 
 * Usage:
 * ```tsx
 * <Icon name="rocket" size="md" state="default" />
 * <Icon name="code" size="lg" state="hover" className="text-blue-500" />
 * ```
 */

import React from 'react';

// Icon size type
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Icon state type
export type IconState = 'default' | 'hover' | 'active' | 'disabled' | 'error' | 'success' | 'warning' | 'info';

// Icon name type (matches Streamline icon names)
export type IconName =
  | 'rocket'
  | 'code'
  | 'users'
  | 'award'
  | 'arrow-right'
  | 'arrow-left'
  | 'check-circle'
  | 'star'
  | 'sparkles'
  | 'sparkle'
  | 'infinity'
  | 'trending-up'
  | 'clock'
  | 'message-square'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'zap'
  | 'briefcase'
  | 'target'
  | 'user'
  | 'bar-chart'
  | 'globe'
  | 'database'
  | 'cloud'
  | 'shield'
  | 'layers'
  | 'cpu'
  | 'brain'
  | 'stars';

// Size mapping
const sizeMap: Record<IconSize, string> = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '32px',
  xl: '48px',
};

// Theme color mapping (from theme-tokens.json)
const stateColorMap: Record<IconState, string> = {
  default: 'currentColor', // Will use text color from parent
  hover: 'currentColor',
  active: 'currentColor',
  disabled: 'currentColor',
  error: '#ef4444',
  success: '#10b981',
  warning: '#f59e0b',
  info: '#06b6d4',
};

interface IconProps {
  name: IconName;
  size?: IconSize;
  state?: IconState;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

/**
 * Placeholder SVG icons
 * Replace these with actual Streamline icon imports once purchased
 */
const iconPaths: Record<IconName, string> = {
  rocket: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  award: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  'arrow-right': 'M14 5l7 7m0 0l-7 7m7-7H3',
  'arrow-left': 'M10 19l-7-7m0 0l7-7m-7 7h18',
  'check-circle': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
  sparkles: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  sparkle: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  infinity: 'M18.178 8.171l-3.343 3.343m0 0l-3.343-3.343m3.343 3.343l3.343-3.343m-3.343 3.343l-3.343 3.343m3.343-3.343l3.343 3.343M3 12h.01M21 12h.01',
  'trending-up': 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  'message-square': 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  'chevron-left': 'M15 19l-7-7 7-7',
  'chevron-right': 'M9 5l7 7-7 7',
  'chevron-down': 'M19 9l-7 7-7-7',
  zap: 'M13 10V3L4 14h7v7l9-11h-7z',
  briefcase: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  target: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  'bar-chart': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  globe: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  database: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  cloud: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  layers: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  cpu: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  brain: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  stars: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  state = 'default',
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = !ariaLabel,
}) => {
  const iconSize = sizeMap[size];
  const iconColor = stateColorMap[state];
  const iconPath = iconPaths[name];

  if (!iconPath) {
    console.warn(`Icon "${name}" not found in icon library`);
    return null;
  }

  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke={iconColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      role={ariaLabel ? 'img' : 'presentation'}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
      }}
    >
      <path d={iconPath} />
    </svg>
  );
};

/**
 * Pre-configured icon components for common use cases
 */
export const IconRocket = (props: Omit<IconProps, 'name'>) => <Icon name="rocket" {...props} />;
export const IconCode = (props: Omit<IconProps, 'name'>) => <Icon name="code" {...props} />;
export const IconUsers = (props: Omit<IconProps, 'name'>) => <Icon name="users" {...props} />;
export const IconAward = (props: Omit<IconProps, 'name'>) => <Icon name="award" {...props} />;
export const IconArrowRight = (props: Omit<IconProps, 'name'>) => <Icon name="arrow-right" {...props} />;
export const IconArrowLeft = (props: Omit<IconProps, 'name'>) => <Icon name="arrow-left" {...props} />;
export const IconCheckCircle = (props: Omit<IconProps, 'name'>) => <Icon name="check-circle" {...props} />;
export const IconStar = (props: Omit<IconProps, 'name'>) => <Icon name="star" {...props} />;
export const IconSparkles = (props: Omit<IconProps, 'name'>) => <Icon name="sparkles" {...props} />;
export const IconSparkle = (props: Omit<IconProps, 'name'>) => <Icon name="sparkle" {...props} />;
export const IconInfinity = (props: Omit<IconProps, 'name'>) => <Icon name="infinity" {...props} />;
export const IconTrendingUp = (props: Omit<IconProps, 'name'>) => <Icon name="trending-up" {...props} />;
export const IconClock = (props: Omit<IconProps, 'name'>) => <Icon name="clock" {...props} />;
export const IconMessageSquare = (props: Omit<IconProps, 'name'>) => <Icon name="message-square" {...props} />;
export const IconChevronLeft = (props: Omit<IconProps, 'name'>) => <Icon name="chevron-left" {...props} />;
export const IconChevronRight = (props: Omit<IconProps, 'name'>) => <Icon name="chevron-right" {...props} />;
export const IconChevronDown = (props: Omit<IconProps, 'name'>) => <Icon name="chevron-down" {...props} />;
export const IconZap = (props: Omit<IconProps, 'name'>) => <Icon name="zap" {...props} />;
export const IconBriefcase = (props: Omit<IconProps, 'name'>) => <Icon name="briefcase" {...props} />;
export const IconTarget = (props: Omit<IconProps, 'name'>) => <Icon name="target" {...props} />;
export const IconUser = (props: Omit<IconProps, 'name'>) => <Icon name="user" {...props} />;
export const IconBarChart = (props: Omit<IconProps, 'name'>) => <Icon name="bar-chart" {...props} />;
export const IconGlobe = (props: Omit<IconProps, 'name'>) => <Icon name="globe" {...props} />;
export const IconDatabase = (props: Omit<IconProps, 'name'>) => <Icon name="database" {...props} />;
export const IconCloud = (props: Omit<IconProps, 'name'>) => <Icon name="cloud" {...props} />;
export const IconShield = (props: Omit<IconProps, 'name'>) => <Icon name="shield" {...props} />;
export const IconLayers = (props: Omit<IconProps, 'name'>) => <Icon name="layers" {...props} />;
export const IconCpu = (props: Omit<IconProps, 'name'>) => <Icon name="cpu" {...props} />;
export const IconBrain = (props: Omit<IconProps, 'name'>) => <Icon name="brain" {...props} />;
export const IconStars = (props: Omit<IconProps, 'name'>) => <Icon name="stars" {...props} />;

export default Icon;

