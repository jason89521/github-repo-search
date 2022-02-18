import styled from 'styled-components';

import Color from 'styles/color';
import breakpoints from 'styles/breakpoints';

export const Container = styled.div`
  padding: 5rem 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #2f3542;
  overflow: auto;

  @media (max-width: ${breakpoints.large}) {
    padding: 0;
  }
`;

export const Panel = styled.div`
  width: 60%;
  padding: 5rem;
  border-radius: 10px;
  background-color: ${Color.background};
  color: ${Color.text};

  @media (max-width: ${breakpoints.largest}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 2.5rem;
  }
`;
