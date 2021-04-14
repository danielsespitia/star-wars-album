import { useState } from 'react';

import axios from 'axios';

import Sheets from '../components/Sheets';
import auth from '../auth';

import { AlbumContainer } from '../assets/styles/GlobalStyles';

function Album() {
  const [albumData, setAlbumData] = useState({
    films: auth.films,
    people: auth.people,
    starships: auth.starships,
  });

  const [toggle, setToggle] = useState({
    films: false,
    people: false,
    starships: false,
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

  const handleToggle = (name) => {
    if (name === 'Películas') {
      if (toggle.films === true) {
        setToggle({ ...toggle, films: false });
      }
      if (toggle.films === false) {
        setToggle({ ...toggle, films: true });
      }
    }
    if (name === 'Personajes') {
      if (toggle.people === true) {
        setToggle({ ...toggle, people: false });
      }
      if (toggle.people === false) {
        setToggle({ ...toggle, people: true });
      }
    }
    if (name === 'Naves') {
      if (toggle.starships === true) {
        setToggle({ ...toggle, starships: false });
      }
      if (toggle.starships === false) {
        setToggle({ ...toggle, starships: true });
      }
    }
  };

  return (
    <AlbumContainer>
      <Sheets
        name="Películas"
        sheetType={albumData.films}
        handleClick={handleClick}
        handleToggle={handleToggle}
        toggle={toggle.films}
      />
      <Sheets
        name="Personajes"
        sheetType={albumData.people}
        handleClick={handleClick}
        handleToggle={handleToggle}
        toggle={toggle.people}
      />
      <Sheets
        name="Naves"
        sheetType={albumData.starships}
        handleClick={handleClick}
        handleToggle={handleToggle}
        toggle={toggle.starships}
      />
    </AlbumContainer>
  );
}

export default Album;
