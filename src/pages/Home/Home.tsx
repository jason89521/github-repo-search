import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import withAnimation from 'hocs/withAnimation';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { reset } from 'redux/repoListSlice';
import { show, hide, setMessage } from 'redux/modalSlice';
import { fetchRepos } from 'githubApi';
import { Container, Header, StyledSvg } from './Home.style';
import Form from 'components/Form';
import Modal from 'components/Modal';
import Dialog from 'components/Dialog';

const Home = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const appDispatch = useAppDispatch();
  const modal = useAppSelector(state => state.modal);
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
    <>
      <Modal show={modal.show}>
        <Dialog onClick={() => appDispatch(hide())} message={modal.message} />
      </Modal>
      <Container>
        <Header>
          <StyledSvg href="icon-github"></StyledSvg>
          <h1>Github Repositories</h1>
        </Header>

        <Form isSubmitting={isSubmitting} onFormSubmit={onFormSubmit} />
      </Container>
    </>
  );
};

export default withAnimation(Home);
