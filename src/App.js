import './App.css';
import Header from './parts/Header';
import Album from './pages/Album';

import styled from 'styled-components';

export const StyledApp = styled.div`
  color: white;
  min-height: 100vh;
  max-width: 100vw;
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <div style={{height: "50px"}}/>
      <Album />
    </StyledApp>
  );
}

export default App;
