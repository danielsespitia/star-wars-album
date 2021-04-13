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

function Sheet({ name, sheetType, handleClick, handleToggle, toggle }) {
  return (
    <div
      style={{
        borderTop: `1px dashed ${name === 'Películas' ? '#b0fceb' : '#f60b07'}`,
      }}
    >
      <TypeHeader>
        <TitleButton onClick={() => handleToggle(name)}>
          <strong>{name}</strong>
          {!toggle && <BsPlus size={20} style={titleButtonStyle} />}
          {!!toggle && <BiMinus size={20} style={titleButtonStyle} />}
        </TitleButton>
        {!!toggle && (
          <GetButton onClick={() => handleClick(name)}>
            Obtener {name}
          </GetButton>
        )}
      </TypeHeader>
      {!!toggle && (
        <SheetsContainer>
          {!!sheetType &&
            !sheetType[0].title &&
            !sheetType[0].name &&
            !sheetType[0].model &&
            sheetType.length > 0 &&
            sheetType.map((pos) => {
              return (
                <SheetContainerWhite key={pos}>
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
                  <SheetContainerBlue key={episode_id}>
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
                <SheetContainerGreen key={url}>
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
                  <SheetContainerRed key={url}>
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

export default Sheet;
