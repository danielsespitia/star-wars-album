import { useState } from 'react';

import axios from 'axios';

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
  const [albumData, setAlbumData] = useState({
    films: auth.films,
    people: auth.people,
    starships: auth.starships,
  });

  const handleClick = async (name) => {
    if (name === 'Películas') {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'https://swapi.dev/api/films/',
        });
        setAlbumData({ ...albumData, films: data.results });
      } catch (error) {}
    }
    if (name === 'Personajes') {
      const peopleArray = [];
      for (let i = 1; i <= 9; i++) {
        try {
          const { data } = await axios({
            method: 'GET',
            url: `https://swapi.dev/api/people/?page=${i}`,
          });
          for (let j = 0; j < data.results.length; j++) {
            peopleArray.push(data.results[j]);
          }
        } catch (error) {}
      }
      setAlbumData({ ...albumData, people: peopleArray });
    }
  };

  console.log(albumData.people);
  return (
    <AlbumContainer>
      <Sheets
        name="Películas"
        sheetType={albumData.films}
        handleClick={handleClick}
      />
      <Sheets
        name="Personajes"
        sheetType={albumData.people}
        handleClick={handleClick}
      />
      <Sheets name="Naves" sheetType={auth.starships} />
    </AlbumContainer>
  );
}

export default Album;
