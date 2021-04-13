import styled from 'styled-components';

export const TypeContainer = styled.div`
  border-top: 1px solid white;
`;

export const TypeHeader = styled.header`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const TitleButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  font-size: 1.5em;
  border: none;
  color: white;
  &:active {
    border: none;
  }
`;

export const GetButton = styled.button`
  color: white;
  font-size: 1em;
  padding: 8px;

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

export const titleButtonStyle = { marginLeft: '10px' };
