import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import RepoItem from 'components/RepoItem';
import InfiniteScroll from 'components/InfiniteScroll';

const Heading = styled.h1`
  text-align: center;
  font-size: 5rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

/**
 * @param {{
 * fetchNext: () => void,
 * isLoading: boolean,
 * hasMore: boolean,
 * repos: import('type').Repo[]
 * }} props
 */
const Repos = ({ fetchNext, isLoading, hasMore, repos }) => {
  const { username } = useParams();

  const renderedRepos = repos.map(repo => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  return (
    <>
      <Heading>{username}</Heading>

      <InfiniteScroll next={fetchNext} isLoading={isLoading} hasMore={hasMore}>
        <List>{renderedRepos}</List>
      </InfiniteScroll>
    </>
  );
};

export default Repos;
