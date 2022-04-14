import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { containerVariants, Container } from './Modal.style';

interface ModalProps {
  show: boolean;
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalContext = React.createContext({ closeModal: () => {} });

const Modal = ({ show, children, closeModal }: ModalProps) => {
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
            {children}
          </Container>
        ) : null}
      </AnimatePresence>
    </ModalContext.Provider>
  );
  return ReactDOM.createPortal(renderedContent, elRef.current);
};

export default Modal;
export { ModalContext };
