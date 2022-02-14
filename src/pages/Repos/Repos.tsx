import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useAppDispatch, useAppSelector } from 'store';
import { appendNext } from 'slices/repoListSlice';
import { fetchRepos } from 'githubApi';
import { Heading, List, LoaderBox } from './Repos.style';
import PageProps from 'types/PageProps';
import RepoItem from 'components/RepoItem';
import InfiniteScroll from 'components/InfiniteScroll';
import Loader from 'components/Loader';

const Repos = ({ variants, initial, animate, exit }: PageProps) => {
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
    <motion.div variants={variants} initial={initial} animate={animate} exit={exit}>
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
    </motion.div>
  );
};

export default Repos;
