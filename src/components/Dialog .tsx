import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Color from 'styles/color';
import Button from 'components/Button';

type PropsType = {
  message: string;
  onClick: React.MouseEventHandler;
};

const Container = styled.div`
  padding: 2rem;
  width: 70%;
  min-height: 20rem;
  border-radius: 10px;
  background-color: ${Color.gray};
  color: #000;
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background-color: #ff4757;

  &:hover {
    background-color: #ff6b81;
  }

  &:focus {
    outline: 3px solid #fff;
    transform: scale(1.1);
  }
`;

const Dialog = ({ message, onClick }: PropsType) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => buttonRef.current?.focus());
  }, []);

  return (
    <Container>
      {message}
      <StyledButton ref={buttonRef} onClick={onClick}>
        OK
      </StyledButton>
    </Container>
  );
};

export default Dialog;
