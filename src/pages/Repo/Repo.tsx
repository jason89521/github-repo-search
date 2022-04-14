import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import type RepoInfo from 'types/RepoInfo';
import type FileInfo from 'types/FileInfo';
import withAnimation from 'hocs/withAnimation';
import fetcher from 'lib/fetcher';
import githubDomain from 'lib/githubDomain';
import { Container, Heading, IconsBox } from './Repo.style';
import BackPage from 'components/BackPage';
import FilesList from 'components/FileList';
import Icon from 'components/Icon';
import Skeleton from 'components/Skeleton';
import Modal from 'components/Modal';

const swrConfig = {
  dedupingInterval: 100 * 1000, // 100 seconds
  revalidateOnFocus: false,
};

const Repo = () => {
  const { username, repo } = useParams() as { username: string; repo: string };
  const navigate = useNavigate();
  const [isModalShow, setIsModalShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const repoUrl = `${githubDomain}${username}/${repo}`;
  const { data: repoInfo, error: repoError } = useSWR<RepoInfo>(repoUrl, fetcher, swrConfig);
  const { data: files = [], error: filesError } = useSWR<FileInfo[]>(`${repoUrl}/contents`, fetcher, swrConfig);

  useEffect(() => {
    if (!repoError && !filesError) return;

    setIsModalShow(true);
    if (repoError) {
      setErrorMessage(repoError.data.message);
      return;
    }
    if (filesError) {
      setErrorMessage(filesError.data.message);
      return;
    }
    setErrorMessage('Unexpected error');
  }, [repoError, filesError]);

  // if the repo have not been fetched yet, show the skeleton
  // such that the animation can be displayed
  let renderedContent: React.ReactNode = null;
  if (repoInfo) {
    const { full_name, description, html_url, stargazers_count, forks_count, open_issues_count } = repoInfo;
    renderedContent = (
      <>
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
      </>
    );
  } else
    renderedContent = (
      <>
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
      </>
    );

  return (
    <BackPage onClickBack={() => navigate('../')}>
      <Modal show={isModalShow} message={errorMessage} closeModal={() => setIsModalShow(false)} />
      <Container>{renderedContent}</Container>
    </BackPage>
  );
};

export default withAnimation(Repo);
