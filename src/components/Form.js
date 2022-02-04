import styled from 'styled-components';

import Button from 'components/Button';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Input = styled.input`
  width: 70%;
  padding: 1rem 2rem;
  border-radius: 100rem;
  border: none;
  outline: none;
  font-size: 2rem;
  transition: all 0.2s;

  &:focus {
    width: 100%;
  }
`;

const Form = () => {
  return (
    <Container>
      <Input type="text" placeholder="Enter an username" />
      <Button type="submit">Search</Button>
    </Container>
  );
};

export default Form;
