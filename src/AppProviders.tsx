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
    <BrowserRouter>
      <ThemeProvider>
        <MaterialUIThemeProvider>
          <GlobalStyleProvider>
            <AuthProvider>
              <NotificationProvider>
                <FilterProvider>
                  <DictionaryProvider>
                    <LanguageProvider>{children}</LanguageProvider>
                  </DictionaryProvider>
                </FilterProvider>
              </NotificationProvider>
            </AuthProvider>
          </GlobalStyleProvider>
        </MaterialUIThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
