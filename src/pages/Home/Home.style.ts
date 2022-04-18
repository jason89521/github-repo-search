import styled from 'styled-components';

import Svg from 'components/Svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

export const StyledSvg = styled(Svg)`
  width: 15rem;
  height: 15rem;
`;
