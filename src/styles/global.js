import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size:62.5%;
    font-family: 'Roboto Mono', monospace;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
