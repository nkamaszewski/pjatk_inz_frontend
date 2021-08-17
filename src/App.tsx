import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import useTheme from './hooks/useTheme';
import { ThemeContext } from './contexts/ThemeContext';
import MaterialUITheme from './MaterialUITheme';

function App() {
  const themeProps = useTheme();
  return (
    <ThemeContext.Provider value={themeProps}>
      <MaterialUITheme>
        <GlobalStyle>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </GlobalStyle>
      </MaterialUITheme>
    </ThemeContext.Provider>
  );
}

export default App;
