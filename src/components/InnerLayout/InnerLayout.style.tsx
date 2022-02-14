import styled from 'styled-components';

import Button from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 1.5rem;
`;

export const StyledButton = styled(Button)`
  align-self: center;
`;
