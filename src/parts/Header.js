import {
  HeaderContainer,
  LogoContainer,
  StarWarsLogo,
} from '../assets/styles/HeaderStyles';

export function Header() {
  return (
    <HeaderContainer className="header">
      <LogoContainer className="logo-container">
        <StarWarsLogo
          className="star-wars-logo"
          src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
          alt="logo"
        />
      </LogoContainer>
    </HeaderContainer>
  );
}
export default Header;
