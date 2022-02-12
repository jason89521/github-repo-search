import styled from 'styled-components';
import { useState } from 'react';

import Button from 'components/Button';
import SearchField from 'components/SearchField';

type PropsType = {
  isSubmitting: boolean;
  onFormSubmit: (username: string) => void;
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Form = ({ isSubmitting, onFormSubmit }: PropsType) => {
  const [username, setUsername] = useState('');

  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault();
    if (isSubmitting) return;

    onFormSubmit(username);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <SearchField />
      <Button>Search</Button>
    </Container>
  );
};

export default Form;
