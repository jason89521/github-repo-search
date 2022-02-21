import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InfiniteScroll from '@yuxuan-zheng/react-infinite-scroll';
import axios from 'axios';

import withAnimation from 'hocs/withAnimation';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { appendNext } from 'redux/repoListSlice';
import { show, setMessage } from 'redux/modalSlice';
import { fetchRepos } from 'githubApi';
import { Heading, List, LoaderBox } from './Repos.style';
import BackPage from 'components/BackPage';
import RepoItem from 'components/RepoItem';
import Loader from 'components/Loader';

const Repos = () => {
  const { username = '' } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { data: reposList, page } = useAppSelector(state => state.reposList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Only execute when this page is opened directly by typing url
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
    // Since we fetch 10 repos every time we call the api,
    // we know that there is no more repos if the response data is less than 10
    setHasMore(response.data.length === 10);
  };

  const itemData = reposList.map(repo => {
    return {
      key: repo.id,
      props: {
        repo,
      },
    };
  });

  return (
    <BackPage
      onClickBack={() => {
        navigate('/');
      }}
    >
      <Heading>{username}</Heading>

      <List>
        <InfiniteScroll
          isLoading={isLoading}
          hasMore={hasMore}
          Item={RepoItem}
          itemData={itemData}
          next={fetchNext}
        />
        {isLoading && (
          <LoaderBox>
            <Loader />
          </LoaderBox>
        )}
      </List>
    </BackPage>
  );
};

export default withAnimation(Repos);
