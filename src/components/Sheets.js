import { useState } from 'react';
import {
  TypeHeader,
  TitleButton,
  GetButton,
  SheetsContainer,
  SheetContainerWhite,
  SheetContainerBlue,
  SheetContainerGreen,
  SheetContainerRed,
  SheetTitle,
  TextContainer,
  titleButtonStyle,
} from '../assets/styles/SheetsStyles';

import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

function Sheets({ name, sheetType, handleClick }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (toggle === true) {
      setToggle(false);
    }
    if (toggle === false) {
      setToggle(true);
    }
  };

  return (
    <div
      className="sheets-container"
      style={{
        borderTop: `1px dashed ${name === 'Películas' ? '#b0fceb' : '#f60b07'}`,
      }}
    >
      <TypeHeader className="type-header">
        <TitleButton className="name-button" onClick={() => handleToggle()}>
          <strong>{name}</strong>
          {!toggle && (
            <BsPlus className="plus-icon" size={20} style={titleButtonStyle} />
          )}
          {!!toggle && (
            <BiMinus
              className="minus-icon"
              size={20}
              style={titleButtonStyle}
            />
          )}
        </TitleButton>
        {!!toggle && (
          <GetButton className="get-button" onClick={() => handleClick(name)}>
            Obtener {name}
          </GetButton>
        )}
      </TypeHeader>
      {!!toggle && (
        <SheetsContainer id="initial-state-render">
          {!!sheetType &&
            !sheetType[0].title &&
            !sheetType[0].name &&
            !sheetType[0].model &&
            sheetType.length > 0 &&
            sheetType.map((pos) => {
              return (
                <SheetContainerWhite className="white-cont" key={pos}>
                  <TextContainer>
                    <p>{pos}</p>
                  </TextContainer>
                </SheetContainerWhite>
              );
            })}
          {!!sheetType &&
            !!sheetType[0].title &&
            sheetType.length > 0 &&
            sheetType.map(
              ({ episode_id, title, director, producer, release_date }) => {
                return (
                  <SheetContainerBlue key={episode_id} id="films-render">
                    <SheetTitle>{title}</SheetTitle>
                    <TextContainer>
                      <p>
                        <strong>Episodio:</strong> {episode_id}
                      </p>
                      <p>
                        <strong>Director:</strong> {director}
                      </p>
                      <p>
                        <strong>Productor(es):</strong> {producer}
                      </p>
                      <p>
                        <strong>Fecha de Lanzamiento:</strong> {release_date}
                      </p>
                    </TextContainer>
                  </SheetContainerBlue>
                );
              }
            )}
          {!!sheetType &&
            !sheetType[0].model &&
            !!sheetType[0].name &&
            sheetType.length > 0 &&
            sheetType.map(({ name, height, mass, birth_year, gender, url }) => {
              return (
                <SheetContainerGreen key={url} id="people-render">
                  <SheetTitle>{name}</SheetTitle>
                  <TextContainer>
                    <p>
                      <strong>Altura:</strong> {height} cm
                    </p>
                    <p>
                      <strong>Masa:</strong> {mass} kg
                    </p>
                    <p>
                      <strong>Año de Nacimiento:</strong> {birth_year}
                    </p>
                    <p>
                      <strong>Género:</strong>{' '}
                      {gender === 'male' ? 'Masculino' : 'Femenino'}
                    </p>
                  </TextContainer>
                </SheetContainerGreen>
              );
            })}
          {!!sheetType &&
            !!sheetType[0].model &&
            sheetType.length > 0 &&
            sheetType.map(
              ({
                name,
                model,
                crew,
                length,
                passengers,
                manufacturer,
                url,
              }) => {
                return (
                  <SheetContainerRed key={url} id="starship-render">
                    <SheetTitle>{name}</SheetTitle>
                    <TextContainer>
                      <p>
                        <strong>Modelo:</strong> {model}
                      </p>
                      <p>
                        <strong>Fabricante</strong> {manufacturer}
                      </p>
                      <p>
                        <strong>Tripulación:</strong> {crew}
                      </p>
                      <p>
                        <strong>Pasajeros:</strong> {passengers}
                      </p>
                      <p>
                        <strong>Longitud:</strong> {length}
                      </p>
                    </TextContainer>
                  </SheetContainerRed>
                );
              }
            )}
        </SheetsContainer>
      )}
    </div>
  );
}

export default Sheets;
