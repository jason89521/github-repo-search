import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import withAnimation from 'hocs/withAnimation';
import { useAppDispatch } from 'redux/store';
import { reset } from 'redux/repoListSlice';
import { fetchRepos, searchUser } from 'githubApi';
import { Container, Header, StyledSvg } from './Home.style';
import Form from 'components/Form';
import Modal from 'components/Modal';

const Home = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const dispatch = useAppDispatch();

  const onFormSubmit = useCallback(
    async (username: string) => {
      setIsSubmitting(true);
      let response;
      try {
        response = await fetchRepos(username);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setIsModalShow(true);
          return;
        }
        return;
      } finally {
        setIsSubmitting(false);
      }

      dispatch(reset(response.data));
      navigate(`users/${username}/repos`);
    },
    [dispatch, navigate]
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
      <Modal
        show={isModalShow}
        message={'error'}
        closeModal={() => {
          setIsModalShow(false);
        }}
      />

      <Header>
        <StyledSvg href="icon-github"></StyledSvg>
        <h1>Github Repositories</h1>
      </Header>

      <Form isSubmitting={isSubmitting} onFormSubmit={onFormSubmit} onDebounced={handleDebounced} />
    </Container>
  );
};

export default withAnimation(Home);
