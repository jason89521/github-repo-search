import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InfiniteScroll from '@yuxuan-zheng/react-infinite-scroll';
import useSWRInfinite from 'swr/infinite';

import type RepoInfo from 'types/RepoInfo';
import createFetcher from 'lib/createFetcher';
import swrConfig from 'lib/swrConfig';
import { Heading, List, LoaderBox } from './Repos.style';
import BackPage from 'components/BackPage';
import RepoItem from 'components/RepoItem';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

const PAGE_SIZE = 10;

const Repos = () => {
  const { username = '' } = useParams();
  const navigate = useNavigate();
  const [isModalShow, setIsModalShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const getKey = useCallback(
    (pageIndex: number, previousPage: RepoInfo[]) => {
      if (previousPage && previousPage.length < 10) return null;
      return `users/${username}/repos?page=${pageIndex + 1}`;
    },
    [username]
  );
  const {
    data = [],
    error,
    isValidating,
    size,
    setSize,
  } = useSWRInfinite<RepoInfo[]>(getKey, createFetcher(), swrConfig);

  useEffect(() => {
    if (error) {
      setIsModalShow(true);
      setErrorMessage(error.message);
    }
  }, [error]);

  const hasMore = data.length > 0 && data[data.length - 1].length === PAGE_SIZE;

  return (
    <BackPage
      onClickBack={() => {
        navigate('/');
      }}
    >
      <Modal show={isModalShow} message={errorMessage} closeModal={() => setIsModalShow(false)} />
      <Heading>{username}</Heading>
      <List>
        <InfiniteScroll
          isLoading={isValidating}
          hasMore={hasMore}
          next={() => {
            setSize(size + 1);
          }}
          threshold={1}
        >
          {data.map(page => page.map(repo => <RepoItem key={repo.id} repo={repo} />))}
        </InfiniteScroll>
        {isValidating && (
          <LoaderBox>
            <Loader />
          </LoaderBox>
        )}
      </List>
    </BackPage>
  );
};

export default Repos;
