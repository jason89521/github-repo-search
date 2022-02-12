import styled from 'styled-components';

import Color from 'styles/color';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${Color.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;
