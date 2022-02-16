import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import withAnimation from 'hocs/withAnimation';
import { useAppDispatch } from 'redux/store';
import { reset } from 'redux/repoListSlice';
import { show, setMessage } from 'redux/modalSlice';
import { fetchRepos } from 'githubApi';
import { Container, Header, StyledSvg } from './Home.style';
import Form from 'components/Form';

const Home = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const appDispatch = useAppDispatch();
  const onFormSubmit = useCallback(
    async (username: string) => {
      setIsSubmitting(true);
      let response;
      try {
        response = await fetchRepos(username);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          appDispatch(show());
          if (error.response?.status === 403) appDispatch(setMessage('API rate limit exceeded'));
          else if (error.response?.status === 404) appDispatch(setMessage('User not found'));
          else appDispatch(setMessage('Unexpected error'));
        }
        return;
      } finally {
        setIsSubmitting(false);
      }

      appDispatch(reset(response.data));
      navigate(`users/${username}/repos`);
    },
    [appDispatch, navigate]
  );

  return (
    <Container>
      <Header>
        <StyledSvg href="icon-github"></StyledSvg>
        <h1>Github Repositories</h1>
      </Header>

      <Form isSubmitting={isSubmitting} onFormSubmit={onFormSubmit} />
    </Container>
  );
};

export default withAnimation(Home);
