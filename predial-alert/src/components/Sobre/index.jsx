import styled from 'styled-components';
import Sindico from '../../../public/imagens/p2.png';

const About = () => {
  return (
    <AboutSection>
      <TextContent>
        <Heading>Sobre o Nosso Sistema</Heading>
        <Paragraph>
          Nosso sistema de manutenção predial foi desenvolvido para facilitar a vida de síndicos e administradores. 
          Com uma interface intuitiva e recursos eficientes, você pode organizar manutenções, planejar tarefas e receber 
          notificações importantes em tempo real.
        </Paragraph>
        <Paragraph>
          Confiável, fácil de usar e projetado para atender às necessidades do seu condomínio, 
          nosso sistema é a escolha ideal para manter tudo sob controle.
        </Paragraph>
      </TextContent>
      <ImageContainer>
        <AboutImage src={Sindico} alt="Ilustração de um síndico gerenciando manutenções" />
      </ImageContainer>
    </AboutSection>
  );
};

export default About;

// Styled Components
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  color: var(--DeepCharcoal);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  max-width: 50%;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--DeepCharcoal);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--darkgray);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ImageContainer = styled.div`
  max-width: 40%;

  @media (max-width: 768px) {
    display: none; /* Oculta a imagem no layout móvel */
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
`;
