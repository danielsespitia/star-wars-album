import styled from 'styled-components';

export const name = '';

export const TypeContainer = styled.div``;

export const TypeHeader = styled.header`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 25px;
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
  background-color: rgba(255, 255, 255, 0.25);
  font-size: 0.77em;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
  margin-bottom: 50px;
  border: 2px solid white;
  background-color: 2px solid white;
  height: 250px;
  min-width: 200px;
  max-width: 200px;
  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const SheetContainerBlue = styled(SheetContainerWhite)`
  border: 2px solid #b0fceb;
  background-color: rgba(176, 252, 235, 0.25);
  &:hover {
    background-color: rgba(176, 252, 235, 0.5);
  }
`;

export const SheetContainerGreen = styled(SheetContainerWhite)`
  border: 2px solid #75c89c;
  background-color: rgba(117, 200, 156, 0.25);
  &:hover {
    background-color: rgba(117, 200, 156, 0.5);
  }
`;

export const SheetContainerRed = styled(SheetContainerWhite)`
  border: 2px solid #f60b07;
  background-color: rgba(246, 11, 7, 0.25);
  &:hover {
    background-color: rgba(246, 11, 7, 0.5);
  }
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
