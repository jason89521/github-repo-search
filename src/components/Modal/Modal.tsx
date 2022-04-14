import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { containerVariants, dialogVariants, Container, Dialog, CloseButton } from './Modal.style';

interface ModalProps {
  show: boolean;
  message: string;
  closeModal: () => void;
}

const ModalContext = React.createContext({ closeModal: () => {} });

const Modal = ({ show, message, closeModal }: ModalProps) => {
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root') as HTMLDivElement;
    const el = elRef.current;
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  const renderedContent = (
    <ModalContext.Provider value={{ closeModal }}>
      <AnimatePresence>
        {show ? (
          <Container
            key="modal"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeModal}
          >
            <Dialog variants={dialogVariants} onClick={e => e.stopPropagation()}>
              {message}
              <CloseButton ref={el => el?.focus()} onClick={closeModal}>
                OK
              </CloseButton>
            </Dialog>
          </Container>
        ) : null}
      </AnimatePresence>
    </ModalContext.Provider>
  );
  return ReactDOM.createPortal(renderedContent, elRef.current);
};

export default Modal;
export { ModalContext };
