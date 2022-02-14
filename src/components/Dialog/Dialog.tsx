import React from 'react';

import { containerVariants, Container, StyledButton } from './Dialog.style';

interface DialogProps {
  message: string;
  onClick: React.MouseEventHandler;
}

const Dialog = ({ message, onClick }: DialogProps) => {
  return (
    <Container variants={containerVariants}>
      {message}
      <StyledButton ref={el => el?.focus()} onClick={onClick}>
        OK
      </StyledButton>
    </Container>
  );
};

export default Dialog;
