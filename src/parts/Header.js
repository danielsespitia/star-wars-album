import {
  HeaderContainer,
  LogoContainer,
  StarWarsLogo,
} from '../assets/styles/HeaderStyles';

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
