import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 100px;
  opacity: 0.7;
  border-bottom: 2px dashed white;
`;

export const LogoContainer = styled.figure`
  height: 90%;
`;

export const StarWarsLogo = styled.img`
  height: 100%;
  filter: invert(1);
`;
