import styled from 'styled-components';


const Services = () => {
  return (
    <ServicesSection>
      <Heading>Nossos Serviços</Heading>
      <ServiceList>
        <ServiceItem>
          <ServiceIcon src="/path-to-icon1.png" alt="Ícone de organização" />
          <ServiceTitle>Organização de Manutenções</ServiceTitle>
          <ServiceDescription>
            Gerencie as manutenções do seu condomínio de forma simples e eficiente.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="/path-to-icon2.png" alt="Ícone de notificações" />
          <ServiceTitle>Notificações em Tempo Real</ServiceTitle>
          <ServiceDescription>
            Receba lembretes automáticos sobre as tarefas mais importantes.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="/path-to-icon3.png" alt="Ícone de relatórios" />
          <ServiceTitle>Relatórios Detalhados</ServiceTitle>
          <ServiceDescription>
            Acompanhe o progresso e tenha tudo sob controle com relatórios claros.
          </ServiceDescription>
        </ServiceItem>
      </ServiceList>
    </ServicesSection>
  );
};

export default Services;

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: var(--white);
  color: var(--DeepCharcoal);
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

const ServiceList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ServiceItem = styled.div`
  max-width: 300px;
  text-align: center;
`;

const ServiceIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--orange);
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: var(--darkgray);
`;
