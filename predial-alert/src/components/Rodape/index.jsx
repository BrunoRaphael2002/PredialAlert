import styled from 'styled-components';
import logo from '../../../public/imagens/logo-dark.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo  src={logo} alt="Logo do Projeto"/>
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#services">Serviços</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#plans">Planos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </NavLinks>
        <SocialLinks>
          <SocialLink href="https://facebook.com" target="_blank">Facebook</SocialLink>
          <SocialLink href="https://instagram.com" target="_blank">Instagram</SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank">LinkedIn</SocialLink>
        </SocialLinks>
        <Copyright>
          &copy; {new Date().getFullYear()} Manutenção Predial. Todos os direitos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: var(--DeepCharcoal);
  color: var(--white);
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.img`
      width: 200px;
      height: auto;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const NavLink = styled.a`
  color: var(--white);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: var(--orange);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: var(--white);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: var(--orange);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: var(--gray);
`;
