import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #000;
  height: 100px;
  opacity: 0.7;
  border-bottom: 2px dashed #75C89C;
`;

export const LogoContainer = styled.figure`
  height: 90%;
`;

export const StarWarsLogo = styled.img`
  height: 100%;
  filter: invert(1);
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <StarWarsLogo
          src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
          alt="logo"
        />
      </LogoContainer>
    </HeaderContainer>
  );
}
export default Header;
