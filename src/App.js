import './App.css';
import Header from './parts/Header';
import Album from './pages/Album';

import { StyledApp } from './assets/styles/GlobalStyles';

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <div style={{ height: '50px' }} />
      <Album />
    </StyledApp>
  );
}

export default App;
