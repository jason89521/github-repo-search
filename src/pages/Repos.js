import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';

import COLOR from 'styles/color';
import { ReposContext } from 'App';
import Button from 'components/Button';
import RepoItem from 'components/RepoItem';
import InfiniteScroll from 'components/InfiniteScroll';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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

const Repos = ({fetchNext, isLoading, hasMore}) => {
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
        <InfiniteScroll next={fetchNext} isLoading={isLoading} hasMore={hasMore}>
          <List>{renderedRepos}</List>
        </InfiniteScroll>
      </main>
    </Container>
  );
};

export default Repos;
