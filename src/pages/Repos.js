import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';

import COLOR from 'styles/color';
import { ReposContext } from 'App';
import Button from 'components/Button';
import RepoItem from 'components/RepoItem';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: 3rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 5rem;
  color: ${COLOR.text};
`;

const BackLink = styled(Link)`
  position: absolute;
  top: 2rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Repos = () => {
  const repos = useContext(ReposContext);
  const { username } = useParams();

  const renderedRepos = repos.map((repo, index) => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  return (
    <Container>
      <BackLink to="/">
        <Button>Back</Button>
      </BackLink>
      <header>
        <Heading>{username}</Heading>
      </header>

      <main>
        <List>{renderedRepos}</List>
      </main>
    </Container>
  );
};

export default Repos;
