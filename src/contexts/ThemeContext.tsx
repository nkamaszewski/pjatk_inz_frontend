import { createContext } from 'react';
import { dark_theme, IuseTheme } from '../hooks/useTheme';

const initContext: IuseTheme = {
  theme: dark_theme,
  setDarkTheme: () => {},
  setLightTheme: () => {},
};

export const ThemeContext = createContext(initContext);
