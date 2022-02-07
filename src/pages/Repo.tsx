import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import type { Repo as RepoType, File } from 'type';
import { fetchFiles, fetchRepo } from 'githubApi';
import sprite from 'sprite.svg';
import Svg from 'components/Svg';
import FilesList from 'components/FilesList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 2rem;
`;

const StarsCount = styled.span`
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
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchRepoData = async () => {
      if (!params.username || !params.repo) return;
      let repoData;
      let filesData;
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

  const { full_name, description, stargazers_count, html_url } = repo;

  return (
    <Container>
      <StarsCount>
        <Svg href={`${sprite}#icon-star-empty`} />
        {stargazers_count}
      </StarsCount>
      <Heading>
        <a href={html_url} target="_blank" rel="noreferrer">
          {full_name}
        </a>
      </Heading>
      <p>{description}</p>
      <FilesList files={files} />
    </Container>
  );
};

export default Repo;
