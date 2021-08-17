import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import useTheme from './hooks/useTheme';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const themeProps = useTheme();
  return (
    <ThemeContext.Provider value={themeProps}>
      <GlobalStyle>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GlobalStyle>
    </ThemeContext.Provider>
  );
}

export default App;
