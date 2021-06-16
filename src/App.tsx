import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
