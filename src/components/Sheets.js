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
          sheetType.map(({ episode_id, title }) => {
            return (
              <SheetContainer key={episode_id}>
                <p>{title}</p>
              </SheetContainer>
            );
          })}
          {!!sheetType &&
          !!sheetType[0].name &&
          sheetType.length > 0 &&
          sheetType.map(({ name }) => {
            return (
              <SheetContainer>
                <p>{name}</p>
              </SheetContainer>
            );
          })}
      </SheetsContainer>
    </>
  );
}

export default Sheet;
