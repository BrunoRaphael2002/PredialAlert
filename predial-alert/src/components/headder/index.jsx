
import styled from 'styled-components';
import logo from '../../../public/imagens/logo-dark.png';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
          <Logo src={logo} alt="Logo do Projeto"/>
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#pricing">Planos</NavLink>
          </Nav>
          <Actions>
            <CTAButton href="#plans">Assine Agora</CTAButton>
            <LoginButton href="#login">Log-in</LoginButton>
          </Actions>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

// Styled Components
const HeaderContainer = styled.header`
  
  padding: 0.5rem 2rem;
  background-color: var(--DeepCharcoal);
  color: var(--white);
  position: sticky;
  top: 0;
  z-index: 1000;
  
`;

const Container = styled.div`
    max-width: 1024px;
    display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
   
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none; /* Adicionar lógica de menu responsivo aqui se necessário */
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--gray);
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--orange);
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;

const CTAButton = styled.a`
  background-color: var(--orange);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94e1f;
  }
`;

const LoginButton = styled.a`
  background: none;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--gray);
    color: var(--white);
  }
`;
