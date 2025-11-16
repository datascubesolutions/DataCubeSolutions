/**
 * Color System & Utilities
 * Centralized color definitions for consistent UI/UX
 */

/**
 * Primary Brand Colors
 * Blue-Purple-Pink gradient (main brand identity)
 */
export const brandColors = {
  primary: {
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // Main primary
      600: '#2563eb', // Darker primary
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7', // Main accent
      600: '#9333ea', // Darker accent
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899', // Main secondary
      600: '#db2777', // Darker secondary
      700: '#be185d',
      800: '#9f1239',
      900: '#831843',
    },
  },
} as const;

/**
 * Standard Gradient Patterns
 */
export const gradients = {
  // Primary brand gradient (most common)
  primary: 'from-blue-600 via-purple-600 to-pink-600',
  primaryDark: 'from-blue-400 via-purple-400 to-pink-400',
  
  // Two-color gradients
  bluePurple: 'from-blue-600 to-purple-600',
  bluePurpleDark: 'from-blue-400 to-purple-400',
  purplePink: 'from-purple-600 to-pink-600',
  purplePinkDark: 'from-purple-400 to-pink-400',
  blueCyan: 'from-blue-600 to-cyan-600',
  blueCyanDark: 'from-blue-400 to-cyan-400',
  
  // Background gradients
  background: 'from-slate-950 via-slate-900 to-slate-950',
  backgroundLight: 'from-blue-50 via-white to-purple-50',
  card: 'from-slate-950 via-slate-900 to-slate-950',
  
  // Button gradients
  buttonPrimary: 'from-blue-600 via-blue-700 to-purple-600',
  buttonPrimaryHover: 'from-purple-600 to-pink-600',
  buttonSecondary: 'from-purple-600 to-pink-600',
} as const;

/**
 * Semantic Colors (for states, feedback)
 */
export const semanticColors = {
  success: {
    light: 'bg-green-50 dark:bg-green-900/20',
    text: 'text-green-800 dark:text-green-300',
    border: 'border-green-500 dark:border-green-700',
    icon: 'text-green-600 dark:text-green-400',
  },
  error: {
    light: 'bg-red-50 dark:bg-red-900/20',
    text: 'text-red-800 dark:text-red-300',
    border: 'border-red-500 dark:border-red-700',
    icon: 'text-red-600 dark:text-red-400',
  },
  warning: {
    light: 'bg-yellow-50 dark:bg-yellow-900/20',
    text: 'text-yellow-800 dark:text-yellow-300',
    border: 'border-yellow-500 dark:border-yellow-700',
    icon: 'text-yellow-600 dark:text-yellow-400',
  },
  info: {
    light: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-800 dark:text-blue-300',
    border: 'border-blue-500 dark:border-blue-700',
    icon: 'text-blue-600 dark:text-blue-400',
  },
} as const;

/**
 * Text Colors (for consistency)
 */
export const textColors = {
  primary: 'text-gray-900 dark:text-white',
  secondary: 'text-gray-700 dark:text-gray-200',
  tertiary: 'text-gray-600 dark:text-gray-300',
  muted: 'text-gray-500 dark:text-gray-400',
  disabled: 'text-gray-400 dark:text-gray-500',
} as const;

/**
 * Border Colors
 */
export const borderColors = {
  default: 'border-gray-300 dark:border-gray-600',
  hover: 'border-blue-500 dark:border-blue-400',
  active: 'border-blue-600 dark:border-blue-500',
  error: 'border-red-500 dark:border-red-500',
  success: 'border-green-500 dark:border-green-500',
} as const;

/**
 * Shadow Colors (for depth and glow effects)
 */
export const shadowColors = {
  blue: 'shadow-blue-500/40',
  purple: 'shadow-purple-500/40',
  pink: 'shadow-pink-500/40',
  cyan: 'shadow-cyan-500/40',
  default: 'shadow-lg',
} as const;

/**
 * Get gradient class based on theme
 */
export const getGradient = (gradient: keyof typeof gradients, isDark: boolean = true): string => {
  const baseGradient = gradients[gradient];
  if (isDark && baseGradient.includes('Dark')) {
    return baseGradient;
  }
  return baseGradient;
};

/**
 * Get semantic color classes
 */
export const getSemanticColor = (type: keyof typeof semanticColors) => {
  return semanticColors[type];
};

