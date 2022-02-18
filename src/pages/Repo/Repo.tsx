import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import withAnimation from 'hocs/withAnimation';
import { useAppDispatch } from 'redux/store';
import { show, setMessage } from 'redux/modalSlice';
import { useGetRepoQuery, useGetFilesQuery } from 'redux/repoApi';
import { Container, Heading, IconsBox } from './Repo.style';
import BackPage from 'components/BackPage';
import FilesList from 'components/FileList';
import Icon from 'components/Icon';
import Skeleton from 'components/Skeleton';

const Repo = () => {
  const params = useParams() as { username: string; repo: string };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: repo, error: repoError } = useGetRepoQuery({
    username: params.username,
    repo: params.repo,
  });
  const { data: files = [], error: filesError } = useGetFilesQuery({
    username: params.username,
    repo: params.repo,
  });

  useEffect(() => {
    if (!repoError && !filesError) return;

    dispatch(show());
    if (repoError && 'status' in repoError) {
      dispatch(setMessage(repoError.data.message));
      return;
    }
    if (filesError && 'data' in filesError) {
      dispatch(setMessage(filesError.data.message));
      return;
    }
    dispatch(setMessage('Unexpected error'));
  }, [dispatch, repoError, filesError]);

  // if the repo have not been fetched yet, show the skeleton
  // such that the animation can be displayed
  if (!repo) {
    return (
      <BackPage onClickBack={() => navigate('../')}>
        <Container>
          <Skeleton height="5rem" />
          <Skeleton height="3rem" />
          <IconsBox>
            <Skeleton width="3rem" height="1.5rem" />
            <Skeleton width="3rem" height="1.5rem" />
            <Skeleton width="3rem" height="1.5rem" />
          </IconsBox>
          <Skeleton height="2rem" />
          <Skeleton height="2rem" />
          <Skeleton height="2rem" />
        </Container>
      </BackPage>
    );
  }

  const { full_name, description, html_url, stargazers_count, forks_count, open_issues_count } =
    repo;

  return (
    <BackPage onClickBack={() => navigate('../')}>
      <Container>
        <Heading>
          <a href={html_url} target="_blank" rel="noreferrer">
            {full_name}
          </a>
        </Heading>
        <p>{description}</p>
        <IconsBox>
          <Icon href="icon-star" message={stargazers_count} />
          <Icon href="icon-fork" message={forks_count} />
          <Icon href="icon-issue" message={open_issues_count} />
        </IconsBox>
        <FilesList files={files} />
      </Container>
    </BackPage>
  );
};

export default withAnimation(Repo);
