import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { searchUser } from 'githubApi';
import { Container, Header, StyledSvg } from './Home.style';
import Form from 'components/Form';
import Modal from 'components/Modal';
import createFetcher from 'lib/createFetcher';
import swrConfig from 'lib/swrConfig';

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { data, error, mutate } = useSWR(
    username === '' ? null : `users/${username}/repos`,
    createFetcher(),
    swrConfig
  );

  useEffect(() => {
    if (!data) return;
    navigate(`users/${username}/repos`);
  }, [data, navigate, username]);

  useEffect(() => {
    setIsSubmitting(false);
    if (!error) return;

    setIsModalShow(true);
    setErrorMessage(error.message);
  }, [error]);

  const onFormSubmit = useCallback(
    (username: string) => {
      setIsSubmitting(true);
      setUsername(username);
      mutate();
    },
    [mutate]
  );

  const handleDebounced = useCallback(async (debounced: string) => {
    try {
      const res = await searchUser(debounced);
      return res.data.items.map(item => item.login);
    } catch (error) {
      return [];
    }
  }, []);

  return (
    <Container>
      <Modal show={isModalShow} message={errorMessage} closeModal={() => setIsModalShow(false)} />

      <Header>
        <StyledSvg href="icon-github"></StyledSvg>
        <h1>Github Repositories</h1>
      </Header>

      <Form isSubmitting={isSubmitting} onFormSubmit={onFormSubmit} onDebounced={handleDebounced} />
    </Container>
  );
};

export default Home;
