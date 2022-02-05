import styled from 'styled-components';

import Button from 'components/Button';
import githubApi from 'githubApi';
import { useState } from 'react';

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

/**
 * @param {{onFormSubmit:(data: [], username: string)=>void}} props 
 * @returns 
 */
const Form = ({onFormSubmit}) => {
  const [username, setUsername] = useState('');

  const handleChange = e => setUsername(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    let response;
    try {
      response = await githubApi.get(`/users/${username}/repos`);
    } catch (error) {
      console.error(error);
    }

    onFormSubmit(response.data, username);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input type="text" placeholder="Enter an username" onChange={handleChange} />
      <Button type="submit">Search</Button>
    </Container>
  );
};

export default Form;
