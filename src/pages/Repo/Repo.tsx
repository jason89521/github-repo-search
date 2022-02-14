import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import withAnimation from 'hocs/withAnimation';
import RepoInfo from 'types/RepoInfo';
import FileInfo from 'types/FileInfo';
import { fetchFiles, fetchRepo } from 'githubApi';
import { Container, Heading, IconsBox } from './Repo.style';
import FilesList from 'components/FileList';
import Icon from 'components/Icon';

const Repo = () => {
  const params = useParams();
  const [repo, setRepo] = useState<RepoInfo>({} as RepoInfo);
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
