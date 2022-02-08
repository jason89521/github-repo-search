import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { RepoType } from 'type';
import RepoItem from 'components/RepoItem';
import InfiniteScroll from 'components/InfiniteScroll';

type PropsType = {
  fetchNext: () => Promise<any>;
  hasMore: boolean;
  repos: RepoType[];
};

const Heading = styled.h1`
  text-align: center;
  font-size: 5rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Repos = ({ fetchNext,  hasMore, repos }: PropsType) => {
  const { username } = useParams();

  const renderedRepos = repos.map(repo => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  return (
    <>
      <Heading>{username}</Heading>

      <InfiniteScroll next={fetchNext}  hasMore={hasMore}>
        <List>{renderedRepos}</List>
      </InfiniteScroll>
    </>
  );
};

export default Repos;
