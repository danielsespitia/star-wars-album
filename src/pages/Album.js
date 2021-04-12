import Sheets from '../components/Sheets';
import auth from '../auth';

import styled from 'styled-components';

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;

function Album() {
  return (
    <AlbumContainer>
      <Sheets name="Películas" sheetType={auth.films} />
      <Sheets name="Personajes" sheetType={auth.characters} />
      <Sheets name="Naves" sheetType={auth.spaceships} />
    </AlbumContainer>
  );
}

export default Album;
