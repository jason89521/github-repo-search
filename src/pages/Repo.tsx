import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import type { RepoType, FileType } from 'type';
import { fetchFiles, fetchRepo } from 'githubApi';
import Svg from 'components/Svg';
import FilesList from 'components/FilesList';

const IconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
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
      <IconsBox>
        <Icon>
          <Svg href="icon-star" />
          {stargazers_count}
        </Icon>
        <Icon>
          <Svg href="icon-fork" />
          {forks_count}
        </Icon>
        <Icon>
          <Svg href="icon-issue" />
          {open_issues_count}
        </Icon>
      </IconsBox>
      <Heading>
        <a href={html_url} target="_blank" rel="noreferrer">
          {full_name}
        </a>
      </Heading>
      <p>{description}</p>
      <FilesList files={files} />
    </>
  );
};

export default Repo;
