import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const [repo, setRepo] = useState({});
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchRepoData = async () => {
      let repoData;
      let contentsData;
      try {
        repoData = (await fetchRepo(params.username, params.repo)).data;
        contentsData = (await fetchFiles(params.username, params.repo)).data;
      } catch (error) {
        console.error(error);
      }

      setRepo(repoData);
      const sortedContents = contentsData.sort((a, b) => {
        if (a.type === 'dir') return b.type === 'dir' ? 0 : -1;
        return b.type === 'dir' ? 1 : 0;
      });
      setFiles(sortedContents);
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
