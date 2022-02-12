import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store';
import { appendNext } from 'slices/repoListSlice';
import { fetchRepos } from 'githubApi';
import { Heading, List } from './Repos.style';
import RepoItem from 'components/RepoItem';
import InfiniteScroll from 'components/InfiniteScroll';

const Repos = () => {
  const { username = '' } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { data: reposList, page } = useAppSelector(state => state.reposList);
  const appDispatch = useAppDispatch();

  const fetchNext = async () => {
    setIsLoading(true);
    const response = await fetchRepos(username, page + 1);
    appDispatch(appendNext(response.data));
    setIsLoading(false);
    setHasMore(response.data.length > 0);
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
