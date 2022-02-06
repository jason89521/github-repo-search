import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import COLOR from 'styles/color';
import { ReposContext } from 'App';
import RepoItem from 'components/RepoItem';
import InfiniteScroll from 'components/InfiniteScroll';

const Heading = styled.h1`
  text-align: center;
  font-size: 5rem;
  color: ${COLOR.text};
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Repos = ({ fetchNext, isLoading, hasMore }) => {
  const repos = useContext(ReposContext);
  const { username } = useParams();

  const renderedRepos = repos.map((repo, index) => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  return (
    <>
      <header>
        <Heading>{username}</Heading>
      </header>

      <main>
        <InfiniteScroll next={fetchNext} isLoading={isLoading} hasMore={hasMore}>
          <List>{renderedRepos}</List>
        </InfiniteScroll>
      </main>
    </>
  );
};

export default Repos;
