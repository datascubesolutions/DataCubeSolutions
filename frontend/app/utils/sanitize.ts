/**
 * HTML Sanitization Utilities
 * Prevents XSS attacks by sanitizing user input
 */

import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML string to prevent XSS attacks
 * @param html - HTML string to sanitize
 * @returns Sanitized HTML string safe for dangerouslySetInnerHTML
 */
export function sanitizeHTML(html: string): string {
  if (typeof html !== 'string') {
    return '';
  }

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['strong', 'em', 'u', 'b', 'i', 'p', 'br', 'span', 'div', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: ['class', 'style'],
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });
}

/**
 * Sanitize plain text (removes all HTML)
 * @param text - Text to sanitize
 * @returns Plain text with HTML removed
 */
export function sanitizeText(text: string): string {
  if (typeof text !== 'string') {
    return '';
  }

  return DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
}

/**
 * Escape HTML entities
 * @param text - Text to escape
 * @returns Escaped HTML string
 */
export function escapeHTML(text: string): string {
  if (typeof text !== 'string') {
    return '';
  }

  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
}

