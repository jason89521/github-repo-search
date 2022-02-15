import { useParams } from 'react-router-dom';

import withAnimation from 'hocs/withAnimation';
import { useGetRepoQuery, useGetFilesQuery } from 'redux/repoApi';
import { Container, Heading, IconsBox } from './Repo.style';
import FilesList from 'components/FileList';
import Icon from 'components/Icon';
import Skeleton from 'components/Skeleton';

const Repo = () => {
  const params = useParams() as { username: string; repo: string };
  const { data: repo } = useGetRepoQuery({
    username: params.username,
    repo: params.repo,
  });
  const { data: files = [] } = useGetFilesQuery({
    username: params.username,
    repo: params.repo,
  });

  if (!repo) {
    return (
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
    );
  }

  const { full_name, description, html_url, stargazers_count, forks_count, open_issues_count } =
    repo;

  return (
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
  );
};

export default withAnimation(Repo);
