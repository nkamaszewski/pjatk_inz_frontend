import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import useTheme from './hooks/useTheme';
import { ThemeContext } from './contexts/ThemeContext';
import MaterialUITheme from './contexts/MaterialUITheme';
import { NotificationProvider } from './contexts/NotificationContext';

function App() {
  const themeProps = useTheme();
  return (
    <ThemeContext.Provider value={themeProps}>
      <MaterialUITheme theme={themeProps.theme}>
        <GlobalStyle theme={themeProps.theme}>
          <NotificationProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </NotificationProvider>
        </GlobalStyle>
      </MaterialUITheme>
    </ThemeContext.Provider>
  );
}

export default App;
