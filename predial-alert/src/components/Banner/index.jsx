import styled from 'styled-components';

const Banner = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Gerencie as Manutenções do Seu Condomínio com Facilidade</Title>
        <Subtitle>Organize, planeje e receba notificações importantes para manter tudo em ordem.</Subtitle>
        <CTAButtons>
          <CTAButton href="#plans">Conheça os Planos</CTAButton>
          <SecondaryButton href="#about">Saiba Mais</SecondaryButton>
        </CTAButtons>
      </HeroContent>
      <HeroImage src="/path-to-your-image.jpg" alt="Ilustração de manutenção predial" />
    </HeroSection>
  );
};

export default Banner;

// Styled Components
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: var(--white);
  color: var(--DeepCharcoal);
  min-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--DeepCharcoal);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--gray);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CTAButton = styled.a`
  background-color: var(--orange);
  color: var(--white);
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94e1f;
  }
`;

const SecondaryButton = styled.a`
  background: none;
  border: 2px solid var(--orange);
  color: var(--orange);
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--orange);
    color: var(--white);
  }
`;

const HeroImage = styled.img`
  max-width: 40%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 2rem;
  }
`;
