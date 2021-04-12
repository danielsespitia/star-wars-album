import styled from 'styled-components';

export const TypeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

export const SheetsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: auto;
`;

export const SheetContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border: 1px solid black;
  height: 200px;
  min-width: 150px;
  max-width: 150px;
`;

function Sheet({ name, sheetType, handleClick }) {
  return (
    <>
      <TypeHeader>
        <p>
          <strong>{name}</strong>
        </p>
        <button onClick={() => handleClick(name)}>Obtener {name}</button>
      </TypeHeader>
      <SheetsContainer>
        {!!sheetType &&
          !sheetType[0].title &&
          !sheetType[0].name &&
          !sheetType[0].model &&
          sheetType.length > 0 &&
          sheetType.map((pos) => {
            return (
              <SheetContainer key={pos}>
                <p>{pos}</p>
              </SheetContainer>
            );
          })}
        {!!sheetType &&
          !!sheetType[0].title &&
          sheetType.length > 0 &&
          sheetType.map(
            ({ episode_id, title, director, producer, release_date }) => {
              return (
                <SheetContainer key={episode_id}>
                  <p>{title}</p>
                  <p>Episodio: {episode_id}</p>
                  <p>Director: {director}</p>
                  <p>Productor(es): {producer}</p>
                  <p>Fecha de Lanzamiento: {release_date}</p>
                </SheetContainer>
              );
            }
          )}
        {!!sheetType &&
          !sheetType[0].model &&
          !!sheetType[0].name &&
          sheetType.length > 0 &&
          sheetType.map(({ name, height, mass, birth_year, gender, url }) => {
            return (
              <SheetContainer key={url}>
                <p>Nombre: {name}</p>
                <p>Altura: {height}</p>
                <p>Masa: {mass}</p>
                <p>Año de Nacimiento: {birth_year}</p>
                <p>Género: {gender}</p>
              </SheetContainer>
            );
          })}
        {!!sheetType &&
          !!sheetType[0].model &&
          sheetType.length > 0 &&
          sheetType.map(
            ({ name, model, crew, length, passengers, manufacturer, url }) => {
              return (
                <SheetContainer key={url}>
                  <p>Nombre: {name}</p>
                  <p>Modelo: {model}</p>
                  <p>Fabricante {manufacturer}</p>
                  <p>Tripulación: {crew}</p>
                  <p>Pasajeros: {passengers}</p>
                  <p>Longitud: {length}</p>
                </SheetContainer>
              );
            }
          )}
      </SheetsContainer>
    </>
  );
}

export default Sheet;
