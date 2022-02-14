import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import withAnimation from 'hocs/withAnimation';
import { useAppDispatch } from 'store';
import { reset } from 'slices/repoListSlice';
import { fetchRepos } from 'githubApi';
import { Container, Header, StyledSvg } from './Home.style';
import Form from 'components/Form';
import Modal from 'components/Modal';
import Dialog from 'components/Dialog';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
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
          setShowModal(true);
          setErrorMsg(error.response?.data.message);
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
      <Modal show={showModal}>
        <Dialog onClick={() => setShowModal(false)} message={errorMsg} />
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
