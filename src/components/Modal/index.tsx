import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';

import { Container } from './style';

type ModalProps = {
  children: React.ReactNode[] | React.ReactNode;
};

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

const Modal = ({ children }: ModalProps) => {
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    const el = elRef.current;
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  const renderedContent = <Container>{children}</Container>;
  return ReactDOM.createPortal(renderedContent, elRef.current);
};

export default Modal;
