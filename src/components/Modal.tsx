import styled from 'styled-components';
import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';
import Color from 'styles/color';

type PropsType = {
  children: React.ReactNode[] | React.ReactNode;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${Color.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

const Modal = ({ children }: PropsType) => {
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
