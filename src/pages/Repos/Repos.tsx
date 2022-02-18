import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from '@yuxuan-zheng/react-infinite-scroll';

import withAnimation from 'hocs/withAnimation';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { appendNext } from 'redux/repoListSlice';
import { show, setMessage } from 'redux/modalSlice';
import { fetchRepos } from 'githubApi';
import { Heading, List, LoaderBox } from './Repos.style';
import RepoItem from 'components/RepoItem';
import Loader from 'components/Loader';
import axios from 'axios';

const Repos = () => {
  const { username = '' } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { data: reposList, page } = useAppSelector(state => state.reposList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reposList.length === 0) {
      fetchNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    setHasMore(response.data.length === 10);
  };

  const itemsProps = reposList.map(repo => {
    return { repo };
  });

  return (
    <>
      <Heading>{username}</Heading>

      <List>
        <InfiniteScroll
          isLoading={isLoading}
          hasMore={hasMore}
          Item={RepoItem}
          itemsProps={itemsProps}
          next={fetchNext}
        />
        {isLoading && (
          <LoaderBox>
            <Loader />
          </LoaderBox>
        )}
      </List>
    </>
  );
};

export default withAnimation(Repos);
