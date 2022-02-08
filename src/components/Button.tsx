import React from 'react';
import styled from 'styled-components';

type PropsType = {
  className?: string;
  children: React.ReactNode[] | React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const Container = styled.button`
  cursor: pointer;
  background-color: #1e90ff;
  border: none;
  outline: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  color: #f1f2f6;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 1px;
  transition: all 0.2s;

  &:hover {
    background-color: #70a1ff;
  }
`;

const Button = ({ className, children, onClick }: PropsType) => {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
