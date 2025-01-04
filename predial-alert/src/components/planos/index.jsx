import styled from 'styled-components';

const Plans = () => {
  return (
    <PlansSection>
      <Heading>Planos</Heading>
      <PlansContainer>
        <PlanCard>
          <PlanTitle>Básico</PlanTitle>
          <PlanPrice>R$150/mês</PlanPrice>
          <PlanFeatures>
            <FeatureItem>Gestão de manutenções</FeatureItem>
            <FeatureItem>Notificações automáticas</FeatureItem>
            <FeatureItem>Suporte básico</FeatureItem>
          </PlanFeatures>
          <PlanButton>Escolher Plano</PlanButton>
        </PlanCard>
        <PlanCard>
          <PlanTitle>Avançado</PlanTitle>
          <PlanPrice>R$300/mês</PlanPrice>
          <PlanFeatures>
            <FeatureItem>Todos os recursos do Básico</FeatureItem>
            <FeatureItem>Relatórios detalhados</FeatureItem>
            <FeatureItem>Suporte prioritário</FeatureItem>
          </PlanFeatures>
          <PlanButton>Escolher Plano</PlanButton>
        </PlanCard>
        <PlanCard>
          <PlanTitle>Premium</PlanTitle>
          <PlanPrice>R$500/mês</PlanPrice>
          <PlanFeatures>
            <FeatureItem>Todos os recursos do Avançado</FeatureItem>
            <FeatureItem>Integrações personalizadas</FeatureItem>
            <FeatureItem>Consultoria dedicada</FeatureItem>
          </PlanFeatures>
          <PlanButton>Escolher Plano</PlanButton>
        </PlanCard>
      </PlansContainer>
    </PlansSection>
  );
};

export default Plans;

const PlansSection = styled.section`
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

const PlansContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const PlanCard = styled.div`
  background-color: var(--white);
  border: 1px solid var(--gray);
  border-radius: 10px;
  padding: 2rem;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--orange);
`;

const PlanPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--darkgray);
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
  color: var(--darkgray);
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
`;

const PlanButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: var(--white);
  background-color: var(--orange);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d45522;
  }
`;
