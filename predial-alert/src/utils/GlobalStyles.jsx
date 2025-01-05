// src/styles/GlobalStyles.jsx

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto:wght@300;400;700&display=swap');

  :root {
    --white: #FFFCF2;
    --gray: #CCC5B9;
    --darkgray: #403D39;
    --DeepCharcoal: #252422;
    --orange: #EB5E28;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--gray);
    color: var(--darkgray);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Media Queries */
  @media (max-width: 1200px) {
    html {
      font-size: 95%; /* Ajusta o tamanho do texto */
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 90%; /* Ajusta o tamanho do texto */
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 85%; /* Ajusta o tamanho do texto */
    }
  }
`;

export default GlobalStyles;
