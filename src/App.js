import './App.css';
import Header from './parts/Header';
import Album from './pages/Album';

import styled from 'styled-components';

export const StyledApp = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Album />
    </StyledApp>
  );
}

export default App;
