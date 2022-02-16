import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import withAnimation from 'hocs/withAnimation';
import { useAppDispatch } from 'redux/store';
import { reset } from 'redux/repoListSlice';
import { show, setMessage } from 'redux/modalSlice';
import { fetchRepos, searchUser } from 'githubApi';
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
        appDispatch(show());
        if (axios.isAxiosError(error)) {
          appDispatch(setMessage(error.response?.data.message));
          return;
        }
        appDispatch(setMessage('Unexpected error'));
        return;
      } finally {
        setIsSubmitting(false);
      }

      appDispatch(reset(response.data));
      navigate(`users/${username}/repos`);
    },
    [appDispatch, navigate]
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
      <Header>
        <StyledSvg href="icon-github"></StyledSvg>
        <h1>Github Repositories</h1>
      </Header>

      <Form
        isSubmitting={isSubmitting}
        recommendList={[]}
        onFormSubmit={onFormSubmit}
        onDebounced={handleDebounced}
      />
    </Container>
  );
};

export default withAnimation(Home);
