import { useState } from 'react';

import { Container } from './style';
import Button from 'components/Button';
import SearchField from 'components/SearchField';

type PropsType = {
  isSubmitting: boolean;
  onFormSubmit: (username: string) => void;
};

const Form = ({ isSubmitting, onFormSubmit }: PropsType) => {
  const [username, setUsername] = useState('');

  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault();
    if (isSubmitting) return;

    onFormSubmit(username);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <SearchField onChange={value => setUsername(value)} />
      <Button>Search</Button>
    </Container>
  );
};

export default Form;
