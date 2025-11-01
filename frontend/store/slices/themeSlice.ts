import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState, ThemeColors } from '../types/theme';

const initialState: ThemeState = {
  isDarkMode: true,
  lightTheme: {
    background: '#ffffff',
    foreground: '#000000',
    primary: '#2563eb',
    secondary: '#7c3aed',
    accent: '#ec4899',
    card: '#f9fafb',
    border: '#e5e7eb',
  },
  darkTheme: {
    background: '#0f172a',
    foreground: '#ffffff',
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#f472b6',
    card: '#1e293b',
    border: '#334155',
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    initializeTheme: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.isDarkMode = action.payload === 'dark';
      }
    },
    updateThemes: (
      state,
      action: PayloadAction<{
        light: Partial<ThemeColors>;
        dark: Partial<ThemeColors>;
      }>
    ) => {
      state.lightTheme = { ...state.lightTheme, ...action.payload.light };
      state.darkTheme = { ...state.darkTheme, ...action.payload.dark };
    },
  },
});

export const { toggleTheme, setTheme, initializeTheme, updateThemes } = themeSlice.actions;
export default themeSlice.reducer;

