import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { DictionaryProvider } from './providers/DictionaryContext';
import { FilterProvider } from './providers/FilterContext';
import { LanguageProvider } from './providers/LanguageProvider';
import MaterialUIThemeProvider from './providers/MaterialUITheme';
import { NotificationProvider } from './providers/NotificationContext';
import { ThemeProvider } from './providers/ThemeContext';
import { GlobalStyleProvider } from './GlobalStyle';
import ErrorBoundary from 'pages/errorBoundary/ErrorBoundary';
import { LoaderProvider } from 'providers/LoaderProvider';

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
              <ErrorBoundary>
                <NotificationProvider>
                  <AuthProvider>
                    <LoaderProvider>
                      <FilterProvider>
                        <DictionaryProvider>{children}</DictionaryProvider>
                      </FilterProvider>
                    </LoaderProvider>
                  </AuthProvider>
                </NotificationProvider>
              </ErrorBoundary>
            </GlobalStyleProvider>
          </MaterialUIThemeProvider>
        </ThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default AppProviders;
