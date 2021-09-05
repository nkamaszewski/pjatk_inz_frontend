import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import { DictionaryProvider } from './contexts/DictionaryContext';
import { FilterProvider } from './contexts/FilterContext';
import { LanguageProvider } from './contexts/LanguageProvider';
import MaterialUIThemeProvider from './contexts/MaterialUITheme';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyleProvider } from './GlobalStyle';

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ThemeProvider>
          <MaterialUIThemeProvider>
            <GlobalStyleProvider>
              <NotificationProvider>
                <AuthProvider>
                  <FilterProvider>
                    <DictionaryProvider>{children}</DictionaryProvider>
                  </FilterProvider>
                </AuthProvider>
              </NotificationProvider>
            </GlobalStyleProvider>
          </MaterialUIThemeProvider>
        </ThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default AppProviders;
