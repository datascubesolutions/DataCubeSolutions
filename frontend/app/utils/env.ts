/**
 * Environment Variable Validation
 * Validates required environment variables on startup
 */

interface EnvConfig {
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_API_BASIC_URL?: string;
}

/**
 * Validates required environment variables
 * Throws error if critical variables are missing
 */
export function validateEnv(): void {
  if (typeof window === 'undefined') {
    // Server-side validation
    const requiredVars: string[] = [];
    const missing: string[] = [];

    requiredVars.forEach((varName) => {
      if (!process.env[varName]) {
        missing.push(varName);
      }
    });

    if (missing.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missing.join(', ')}\n` +
        'Please check your .env file or environment configuration.'
      );
    }
  } else {
    // Client-side validation
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASIC_URL;
    
    if (!apiUrl) {
      console.warn(
        '⚠️ Warning: NEXT_PUBLIC_API_URL or NEXT_PUBLIC_API_BASIC_URL is not set.\n' +
        'API calls may fail. Please configure your environment variables.'
      );
    }
  }
}

/**
 * Get API base URL with validation
 * @returns API base URL or throws error if not configured
 */
export function getApiBaseUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASIC_URL;
  
  if (!apiUrl) {
    if (typeof window !== 'undefined') {
      console.error('API URL is not configured');
      throw new Error('API URL is not configured. Please check your environment variables.');
    }
    return '';
  }

  // Remove trailing slash
  return apiUrl.replace(/\/$/, '');
}

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

