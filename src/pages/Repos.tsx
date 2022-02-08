import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store';
import { appendNext } from 'slices/repoListSlice';
import RepoItem from 'components/RepoItem';
import InfiniteScroll from 'components/InfiniteScroll';
import { fetchRepos } from 'githubApi';

const Heading = styled.h1`
  text-align: center;
  font-size: 5rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Repos = () => {
  const { username = '' } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const { data: reposList } = useAppSelector(state => state.reposList);
  const appDispatch = useAppDispatch();

  const fetchNext = async () => {
    setIsLoading(true);
    const response = await fetchRepos(username, page + 1);
    appDispatch(appendNext(response.data));
    setIsLoading(false);
    setHasMore(response.data.length > 0);
    setPage(page + 1);
  };

  const renderedRepos = reposList.map(repo => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  return (
    <>
      <Heading>{username}</Heading>

      <InfiniteScroll next={fetchNext} hasMore={hasMore} isLoading={isLoading}>
        <List>{renderedRepos}</List>
      </InfiniteScroll>
    </>
  );
};

export default Repos;
