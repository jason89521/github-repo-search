import axios from 'axios';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'store';
import { reset } from 'slices/repoListSlice';
import { fetchRepos } from 'githubApi';
import Svg from 'components/Svg';
import Form from 'components/Form';
import Modal from 'components/Modal';
import Dialog from 'components/Dialog ';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

const StyledSvg = styled(Svg)`
  width: 15rem;
  height: 15rem;
`;

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const appDispatch = useAppDispatch();
  const handleSubmit = useCallback(
    async (username: string) => {
      let response;
      try {
        response = await fetchRepos(username);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setShowModal(true);
          setErrorMsg(error.response?.data.message);
        }
        return;
      }

      appDispatch(reset(response.data));
      navigate(`users/${username}/repos`);
    },
    [appDispatch, navigate]
  );

  return (
    <>
      {showModal && (
        <Modal>
          <Dialog onClick={() => setShowModal(false)} message={errorMsg} />
        </Modal>
      )}
      <Container>
        <Header>
          <StyledSvg href="icon-github"></StyledSvg>
          <h1>Github Repositories</h1>
        </Header>

        <Form onFormSubmit={handleSubmit} />
      </Container>
    </>
  );
};

export default Home;
