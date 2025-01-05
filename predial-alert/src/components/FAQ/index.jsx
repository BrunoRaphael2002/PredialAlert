import  { useState } from 'react';
import styled from 'styled-components';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'O que é o Sistema de Manutenção Predial?',
      answer: 'É uma plataforma projetada para ajudar síndicos a gerenciar manutenções, organizar tarefas e enviar notificações automáticas.',
    },
    {
      question: 'Como posso acessar o sistema?',
      answer: 'Você pode acessar o sistema através do nosso site ou aplicativo disponível para dispositivos móveis.',
    },
    {
      question: 'Quais são os planos disponíveis?',
      answer: 'Oferecemos planos mensais com funcionalidades variadas, além de um suporte personalizado para cada cliente.',
    },
    {
      question: 'O sistema envia notificações automáticas?',
      answer: 'Sim! Você pode configurar notificações automáticas para lembrar sobre manutenções programadas.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <Heading>Perguntas Frequentes</Heading>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              <Toggle>{activeIndex === index ? '-' : '+'}</Toggle>
            </Question>
            {activeIndex === index && <Answer>{faq.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQList>
    </FAQSection>
  );
};

export default FAQ;

const FAQSection = styled.section`
  padding: 4rem 2rem;
  background-color: var(--white);
  color: var(--DeepCharcoal);
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 1rem;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  color: var(--DeepCharcoal);

  &:hover {
    color: var(--orange);
  }
`;

const Toggle = styled.span`
  font-size: 1.5rem;
`;

const Answer = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--darkgray);
  line-height: 1.5;
`;
