import styled from 'styled-components';

const Features = () => {
  return (
    <FeaturesSection>
      <Heading>Por que escolher nosso sistema?</Heading>
      <FeaturesGrid>
        <FeatureCard>
          <Icon>📅</Icon>
          <FeatureTitle>Organização de Tarefas</FeatureTitle>
          <Description>Gerencie todas as manutenções do seu condomínio em um só lugar.</Description>
        </FeatureCard>
        <FeatureCard>
          <Icon>🔔</Icon>
          <FeatureTitle>Notificações Automatizadas</FeatureTitle>
          <Description>Receba alertas em tempo real sobre manutenções programadas.</Description>
        </FeatureCard>
        <FeatureCard>
          <Icon>📊</Icon>
          <FeatureTitle>Relatórios Detalhados</FeatureTitle>
          <Description>Visualize relatórios para decisões mais assertivas.</Description>
        </FeatureCard>
        <FeatureCard>
          <Icon>🌐</Icon>
          <FeatureTitle>Acesso Fácil</FeatureTitle>
          <Description>Disponível em qualquer dispositivo, a qualquer momento.</Description>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background-color: var(--gray);
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--DeepCharcoal);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--orange);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--DeepCharcoal);
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--darkgray);
`;
