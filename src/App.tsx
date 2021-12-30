import './App.css';
import AppProviders from './providers/AppProviders';
import Router from './Router';

function App() {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
}

export default App;
