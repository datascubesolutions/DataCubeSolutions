export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  card: string;
  border: string;
}

export interface ThemeState {
  isDarkMode: boolean;
  lightTheme: ThemeColors;
  darkTheme: ThemeColors;
}


