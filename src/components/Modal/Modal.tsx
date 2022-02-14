import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { containerVariants, Container } from './Modal.style';

interface ModalProps {
  show: boolean;
  children: React.ReactNode[] | React.ReactNode;
}

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

const Modal = ({ show, children }: ModalProps) => {
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    const el = elRef.current;
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  const renderedContent = (
    <AnimatePresence>
      {show ? (
        <Container
          key="modal"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {children}
        </Container>
      ) : null}
    </AnimatePresence>
  );
  return ReactDOM.createPortal(renderedContent, elRef.current);
};

export default Modal;
