import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'store';
import { reset } from 'slices/repoListSlice';
import { fetchRepos } from 'githubApi';
import sprite from 'sprite.svg';
import Svg from 'components/Svg';
import Form from 'components/Form';

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
  const appDispatch = useAppDispatch();
  const handleSubmit = async (username: string) => {
    const response = await fetchRepos(username);
    appDispatch(reset(response.data));
    navigate(`users/${username}/repos`);
  };

  return (
    <Container>
      <Header>
        <StyledSvg href={`${sprite}#icon-github`}></StyledSvg>
        <h1>Github Repositories</h1>
      </Header>

      <Form onFormSubmit={handleSubmit} />
    </Container>
  );
};

export default Home;
