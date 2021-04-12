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
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border: 1px solid black;
  height: 200px;
  min-width: 150px;
`;

function Sheet({ name, sheetType }) {
  return (
    <>
      <TypeHeader>
        <p>
          <strong>{name}</strong>
        </p>
        <button>Obtener {name}</button>
      </TypeHeader>
      <SheetsContainer>
        {!!sheetType &&
          sheetType.length > 0 &&
          sheetType.map((pos) => {
            return (
              <SheetContainer key={pos}>
                <p>{pos}</p>
              </SheetContainer>
            );
          })}
      </SheetsContainer>
    </>
  );
}

export default Sheet;
