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
  primaryBackground: '#ffafcc',
  primaryColor: '#2b2d42',
  primaryHover: '#edf2f4',
  listHeaderBackground: '#fde2e4',
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
      throw new Error();
  }
}

const useTheme = (): IuseTheme => {
  const [theme, dispatch] = useReducer(reducer, initialState);

  const setDarkTheme = (): void => dispatch({ type: 'dark' });
  const setLightTheme = (): void => dispatch({ type: 'light' });

  return { theme, setLightTheme, setDarkTheme };
};

export default useTheme;
