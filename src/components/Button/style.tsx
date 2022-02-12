import styled from 'styled-components';

export const Container = styled.button`
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
  backface-visibility: hidden;

  &:hover {
    background-color: #70a1ff;
  }
`;
