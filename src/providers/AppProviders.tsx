import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import { DictionaryProvider } from './DictionaryContext';
import { FilterProvider } from './FilterContext';
import { LanguageProvider } from './LanguageProvider';
import MaterialUIThemeProvider from './MaterialUITheme';
import { NotificationProvider } from './NotificationContext';
import { ThemeProvider } from './ThemeContext';
import { GlobalStyleProvider } from '../GlobalStyle';
import ErrorBoundary from 'pages/errorBoundary/ErrorBoundary';
import { LoaderProvider } from 'providers/LoaderProvider';
import { ReactQueryProvider } from './ReactQueryProvider';

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
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
    </ReactQueryProvider>
  );
};

export default AppProviders;
