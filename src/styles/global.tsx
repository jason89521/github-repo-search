import { createGlobalStyle } from 'styled-components';
import Color from './color';
import breakpoints from './breakpoints';

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

    @media (max-width: ${breakpoints.medium}) {
      font-size: 50%;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${Color.link};

    &:hover {
    text-decoration: underline;
    }
  }
`;

export default GlobalStyles;
