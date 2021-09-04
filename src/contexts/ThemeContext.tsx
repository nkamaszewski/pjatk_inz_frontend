import { createContext, ReactNode, useContext } from 'react';
import { useReducer } from 'react';

export interface ThemeState {
  themeName: 'dark' | 'light';
  logoSrc: string;
  primaryBackground: string;
  primaryColor: string;
  primaryHover: string;
  listHeaderBackground: string;
  error: string;
}

interface ThemeAction {
  type: 'dark' | 'light';
}

export interface IuseTheme {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const dark_theme: ThemeState = {
  themeName: 'dark',
  logoSrc: '/images/logoDark.JPG',
  primaryBackground: '#023047',
  primaryColor: '#edf2f4',
  primaryHover: '#F7BF50',
  listHeaderBackground: '#caf0f8',
  error: '#f0504a',
};
export const light_theme: ThemeState = {
  themeName: 'light',
  logoSrc: '/images/logoLight2.JPG',
  primaryBackground: '#bbdefb',
  primaryColor: '#2b2d42',
  primaryHover: '#dd1c1a',
  listHeaderBackground: '#bbdefb',
  error: '#f0504a',
};

const initialState: ThemeState = dark_theme;

function reducer(state: ThemeState, action: ThemeAction) {
  switch (action.type) {
    case 'dark':
      return dark_theme;
    case 'light':
      return light_theme;
    default:
      throw new Error('theme is not available!');
  }
}

const useCreateTheme = (): IuseTheme => {
  const [theme, dispatch] = useReducer(reducer, initialState);

  const setDarkTheme = (): void => dispatch({ type: 'dark' });
  const setLightTheme = (): void => dispatch({ type: 'light' });

  return { theme, setLightTheme, setDarkTheme };
};

const initContext: IuseTheme = {
  theme: dark_theme,
  setDarkTheme: () => {},
  setLightTheme: () => {},
};

export const ThemeContext = createContext<IuseTheme | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const themes = useCreateTheme();
  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) {
    throw new Error('useTheme is beyond FilterContext');
  }

  return themeCtx;
};
