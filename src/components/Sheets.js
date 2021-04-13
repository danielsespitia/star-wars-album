import styled from 'styled-components';

export const TypeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;

export const GetButton = styled.button`
  color: white;
  font-size: 1em;
  height: 50px;
  padding: 10px;
  background: none;
  border-radius: 10px;
  border: 2px solid white;
  cursor: pointer;
  &:hover {
    border: 2.1px solid yellow;
    color: yellow;
  }
`;

export const SheetsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SheetContainerWhite = styled.div`
  display: flex;
  font-size: 0.77em;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
  margin-bottom: 50px;
  border: 2px solid white;
  height: 250px;
  min-width: 200px;
  max-width: 200px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const SheetContainerBlue = styled(SheetContainerWhite)`
  border: 2px solid #b0fceb;
`;

export const SheetContainerGreen = styled(SheetContainerWhite)`
  border: 2px solid #75c89c;
`;

export const SheetContainerRed = styled(SheetContainerWhite)`
  border: 2px solid #f60b07;
`;

export const SheetTitle = styled.h3`
  margin-top: 50px;
  font-size: 1.3em;
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TextContainer = styled.div`
  display: inherit;
  text-align: left;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  flex-direction: column;
`;

function Sheet({ name, sheetType, handleClick }) {
  return (
    <>
      <TypeHeader>
        <h2>
          <strong>{name}</strong>
        </h2>
        <GetButton onClick={() => handleClick(name)}>Obtener {name}</GetButton>
      </TypeHeader>
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
            ({ name, model, crew, length, passengers, manufacturer, url }) => {
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
    </>
  );
}

export default Sheet;
