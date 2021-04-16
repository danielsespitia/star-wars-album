import { useState } from 'react';

import axios from 'axios';

import Sheets from '../components/Sheets';
import store from '../store';

import { AlbumContainer } from '../assets/styles/GlobalStyles';

function Album() {
  const [albumData, setAlbumData] = useState({
    films: store.films,
    people: store.people,
    starships: store.starships,
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
    if (name === 'Naves') {
      const starshipArray = [];
      for (let i = 1; i <= 4; i++) {
        try {
          const { data } = await axios({
            method: 'GET',
            url: `https://swapi.dev/api/starships/?page=${i}`,
          });
          for (let j = 0; j < data.results.length; j++) {
            starshipArray.push(data.results[j]);
          }
        } catch (error) {}
      }
      setAlbumData({ ...albumData, starships: starshipArray });
    }
  };

  return (
    <AlbumContainer className="album-container">
      <Sheets
        className="sheets"
        name="Películas"
        sheetType={albumData.films}
        handleClick={handleClick}
      />
      <Sheets
        className="sheets"
        name="Personajes"
        sheetType={albumData.people}
        handleClick={handleClick}
      />
      <Sheets
        className="sheets"
        name="Naves"
        sheetType={albumData.starships}
        handleClick={handleClick}
      />
    </AlbumContainer>
  );
}

export default Album;
