import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import type { RepoType, FileType } from 'type';
import { fetchFiles, fetchRepo } from 'githubApi';
import FilesList from 'components/FilesList';
import Icon from 'components/Icon';

const IconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
`;

const Repo = () => {
  const params = useParams();
  const [repo, setRepo] = useState<RepoType>({} as RepoType);
  const [files, setFiles] = useState<FileType[]>([]);

  useEffect(() => {
    const fetchRepoData = async () => {
      if (!params.username || !params.repo) return;
      let repoData: RepoType;
      let filesData: FileType[];
      try {
        repoData = (await fetchRepo(params.username, params.repo)).data;
        filesData = (await fetchFiles(params.username, params.repo)).data;
      } catch (error) {
        console.error(error);
        return;
      }

      setRepo(repoData);
      const sortedFiles = filesData.sort((a, b) => {
        if (a.type === 'dir') return b.type === 'dir' ? 0 : -1;
        return b.type === 'dir' ? 1 : 0;
      });
      setFiles(sortedFiles);
    };

    fetchRepoData();
  }, [params]);

  const { full_name, description, html_url, stargazers_count, forks_count, open_issues_count } =
    repo;

  return (
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
};

export default Repo;
