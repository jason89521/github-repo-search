import { useState } from 'react';
import { useParams } from 'react-router-dom';

import withAnimation from 'hocs/withAnimation';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { appendNext } from 'redux/repoListSlice';
import { show, setMessage } from 'redux/modalSlice';
import { fetchRepos } from 'githubApi';
import { Heading, List, LoaderBox } from './Repos.style';
import RepoItem from 'components/RepoItem';
import InfiniteScroll from 'components/InfiniteScroll';
import Loader from 'components/Loader';
import axios from 'axios';

const Repos = () => {
  const { username = '' } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { data: reposList, page } = useAppSelector(state => state.reposList);
  const dispatch = useAppDispatch();

  const fetchNext = async () => {
    setIsLoading(true);
    let response;
    try {
      response = await fetchRepos(username, page + 1);
    } catch (error) {
      dispatch(show());
      if (axios.isAxiosError(error)) {
        dispatch(setMessage(error.response?.data.message));
        return;
      }
      dispatch(setMessage('Unexpected error'));
      return;
    } finally {
      setIsLoading(false);
    }
    dispatch(appendNext(response.data));
    setHasMore(response.data.length > 0);
  };

  const renderedRepos = reposList.map(repo => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  return (
    <>
      <Heading>{username}</Heading>

      <InfiniteScroll
        next={fetchNext}
        hasMore={hasMore}
        isLoading={isLoading}
        loader={
          <LoaderBox>
            <Loader />
          </LoaderBox>
        }
      >
        <List>{renderedRepos}</List>
      </InfiniteScroll>
    </>
  );
};

export default withAnimation(Repos);
