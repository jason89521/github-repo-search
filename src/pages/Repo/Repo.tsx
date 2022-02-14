import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import RepoInfo from 'types/RepoInfo';
import FileInfo from 'types/FileInfo';
import { fetchFiles, fetchRepo } from 'githubApi';
import { Container, Heading, IconsBox } from './Repo.style';
import PageProps from 'pages/PageProps';
import FilesList from 'components/FileList';
import Icon from 'components/Icon';

const Repo = ({ variants, initial, animate, exit }: PageProps) => {
  const params = useParams();
  const [repo, setRepo] = useState<RepoInfo>();
  const [files, setFiles] = useState<FileInfo[]>([]);

  useEffect(() => {
    // Use this value to prevent setting state after unmounted
    let cancel = false;
    const fetchRepoData = async () => {
      if (!params.username || !params.repo) return;

      const repoData = (await fetchRepo(params.username, params.repo)).data;
      const filesData = (await fetchFiles(params.username, params.repo)).data;

      if (cancel) return;

      setRepo(repoData);
      const sortedFiles = filesData.sort((a, b) => {
        if (a.type === 'dir') return b.type === 'dir' ? 0 : -1;
        return b.type === 'dir' ? 1 : 0;
      });
      setFiles(sortedFiles);
    };

    fetchRepoData();

    return () => {
      cancel = true;
    };
  }, [params.username, params.repo]);

  // Return null such that the animation can execute correctly when mounted
  if (!repo) return null;

  const { full_name, description, html_url, stargazers_count, forks_count, open_issues_count } =
    repo;

  return (
    <Container variants={variants} initial={initial} animate={animate} exit={exit}>
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

export default Repo;
