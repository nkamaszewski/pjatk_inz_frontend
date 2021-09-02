import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import { DictionaryProvider } from './contexts/DictionaryContext';
import { FilterProvider } from './contexts/FilterContext';
import MaterialUIThemeProvider from './contexts/MaterialUITheme';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyleProvider } from './GlobalStyle';

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <MaterialUIThemeProvider>
        <GlobalStyleProvider>
          <AuthProvider>
            <NotificationProvider>
              <FilterProvider>
                <DictionaryProvider>
                  <BrowserRouter>{children}</BrowserRouter>
                </DictionaryProvider>
              </FilterProvider>
            </NotificationProvider>
          </AuthProvider>
        </GlobalStyleProvider>
      </MaterialUIThemeProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
