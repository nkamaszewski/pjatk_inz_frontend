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
