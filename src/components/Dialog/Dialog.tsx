import React, { useContext } from 'react';

import { containerVariants, Container, StyledButton } from './Dialog.style';
import { ModalContext } from 'components/Modal';

interface DialogProps {
  message: string;
}

const Dialog = ({ message }: DialogProps) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <Container variants={containerVariants} onClick={e => e.stopPropagation()}>
      {message}
      <StyledButton ref={el => el?.focus()} onClick={closeModal}>
        OK
      </StyledButton>
    </Container>
  );
};

export default Dialog;
