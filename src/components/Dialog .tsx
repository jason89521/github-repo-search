import styled from 'styled-components';

import Color from 'styles/color';
import Button from 'components/Button';
import React from 'react';

const Container = styled.div`
  padding: 3rem 0;
  width: 50%;
  min-height: 20rem;
  border-radius: 10px;
  background-color: ${Color.gray};
  color: #000;
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background-color: #ff4757;

  &:hover {
    background-color: #ff6b81;
  }
`;

type PropsType = {
  message: string;
  onClick: React.MouseEventHandler;
};
const Dialog = ({ message, onClick }: PropsType) => {
  return (
    <Container>
      {message}
      <StyledButton onClick={onClick}>OK</StyledButton>
    </Container>
  );
};

export default Dialog;
