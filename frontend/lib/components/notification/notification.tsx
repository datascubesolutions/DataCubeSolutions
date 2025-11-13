'use client';

import { useEffect } from 'react';

export const NOTIFICATION_TYPE_SUCCESS = 'success';
export const NOTIFICATION_TYPE_ERROR = 'error';
export const NOTIFICATION_TYPE_INFO = 'info';
export const NOTIFICATION_TYPE_WARNING = 'warning';

export type NotificationType = 
  | typeof NOTIFICATION_TYPE_SUCCESS 
  | typeof NOTIFICATION_TYPE_ERROR 
  | typeof NOTIFICATION_TYPE_INFO 
  | typeof NOTIFICATION_TYPE_WARNING;

export interface NotificationProps {
  type: NotificationType;
  message: string;
  duration?: number;
}

export const Notification = ({ type, message, duration = 3000 }: NotificationProps) => {
  useEffect(() => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${
      type === NOTIFICATION_TYPE_SUCCESS 
        ? 'bg-green-500 text-white' 
        : type === NOTIFICATION_TYPE_ERROR
        ? 'bg-red-500 text-white'
        : type === NOTIFICATION_TYPE_INFO
        ? 'bg-blue-500 text-white'
        : 'bg-yellow-500 text-white'
    }`;
    notification.textContent = message;

    // Append to body
    document.body.appendChild(notification);

    // Auto remove after duration
    const timer = setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, duration);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    };
  }, [type, message, duration]);

  return null;
};






