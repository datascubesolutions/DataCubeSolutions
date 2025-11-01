'use client';

import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { store } from '../../store';
import { initializeTheme } from '../../store/slices/themeSlice';

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Always set dark mode as default
    if (typeof window !== 'undefined') {
      store.dispatch(initializeTheme('dark'));
      
      // Always apply dark theme class
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      
      // Remove light mode class if exists
      document.documentElement.classList.remove('light');
      document.body.classList.remove('light');
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}

