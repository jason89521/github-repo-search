import React, { useEffect, useRef } from 'react';

import { containerVariants, Container, StyledButton } from './Dialog.style';

type DialogProps = {
  message: string;
  onClick: React.MouseEventHandler;
};

const Dialog = ({ message, onClick }: DialogProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => buttonRef.current?.focus());
  }, []);

  return (
    <Container variants={containerVariants}>
      {message}
      <StyledButton ref={buttonRef} onClick={onClick}>
        OK
      </StyledButton>
    </Container>
  );
};

export default Dialog;
