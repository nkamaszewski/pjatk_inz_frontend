import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import useTheme from './hooks/useTheme';
import { ThemeContext } from './contexts/ThemeContext';
import MaterialUITheme from './contexts/MaterialUITheme';
import { NotificationProvider } from './contexts/NotificationContext';
import { FilterProvider } from './contexts/FilterContext';

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props) => {
  const themeProps = useTheme();
  return (
    <ThemeContext.Provider value={themeProps}>
      <MaterialUITheme theme={themeProps.theme}>
        <GlobalStyle theme={themeProps.theme}>
          <NotificationProvider>
            <FilterProvider>
              <BrowserRouter>{children}</BrowserRouter>
            </FilterProvider>
          </NotificationProvider>
        </GlobalStyle>
      </MaterialUITheme>
    </ThemeContext.Provider>
  );
};

export default AppProviders;
