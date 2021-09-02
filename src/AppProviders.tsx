import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import useTheme from './hooks/useTheme';
import { ThemeContext } from './contexts/ThemeContext';
import MaterialUITheme from './contexts/MaterialUITheme';
import { NotificationProvider } from './contexts/NotificationContext';
import { FilterProvider } from './contexts/FilterContext';
import { DictionaryProvider } from './contexts/DictionaryContext';
import { AuthProvider } from './contexts/AuthProvider';

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props) => {
  const themeProps = useTheme();
  return (
    <ThemeContext.Provider value={themeProps}>
      <MaterialUITheme theme={themeProps.theme}>
        <GlobalStyle theme={themeProps.theme}>
          <AuthProvider>
            <NotificationProvider>
              <FilterProvider>
                <DictionaryProvider>
                  <BrowserRouter>{children}</BrowserRouter>
                </DictionaryProvider>
              </FilterProvider>
            </NotificationProvider>
          </AuthProvider>
        </GlobalStyle>
      </MaterialUITheme>
    </ThemeContext.Provider>
  );
};

export default AppProviders;
