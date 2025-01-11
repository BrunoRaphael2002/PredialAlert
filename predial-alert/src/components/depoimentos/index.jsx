
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Heading>O que nossos clientes dizem</Heading>
      <TestimonialsContainer>
        <TestimonialCard>
          <Quote>"O sistema transformou a gestão de manutenções do meu condomínio. Nunca foi tão fácil manter tudo em ordem!"</Quote>
          <Author>João Silva, Síndico</Author>
        </TestimonialCard>
        <TestimonialCard>
          <Quote>"Receber notificações automáticas economizou muito tempo. Recomendo!"</Quote>
          <Author>Maria Oliveira, Síndica</Author>
        </TestimonialCard>
        <TestimonialCard>
          <Quote>"Os relatórios detalhados nos ajudaram a tomar decisões mais assertivas. Excelente ferramenta!"</Quote>
          <Author>Roberto Costa, Administrador</Author>
        </TestimonialCard>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background-color: var(--DeepCharcoal);
  text-align: center;
  color: var(--white);
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 2rem;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Quote = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 1rem;
  color: var(--DeepCharcoal);
`;

const Author = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: var(--orange);
`;
