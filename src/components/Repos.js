import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { ReposContext } from 'App';
import Button from 'components/Button';
import COLOR from 'styles/color';
import githubApi from 'githubApi';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: 3rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 5rem;
  color: ${COLOR.text};
`;

const BackLink = styled(Link)`
  position: absolute;
  top: 2rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Item = styled.li`
  padding: 3rem 2rem;
`;

const RepoLink = styled(Link)`
  color: ${COLOR.link};
  font-size: 2.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Repos = () => {
  const repos = useContext(ReposContext);
  // const [repos, setRepos] = useState([]);
  const { username } = useParams();

  // useEffect(() => {
  //   const test = async () => {
  //     const response = await githubApi.get(`/users/${username}/repos`);
  //     setRepos(response.data);
  //   };
  //   test();
  // }, [username]);

  const renderedRepos = repos.map((repo, index) => {
    return (
      <Item key={repo.id}>
        <h2>
          <RepoLink to={repo.name}>{repo.name}</RepoLink>
        </h2>
      </Item>
    );
  });

  return (
    <Container>
      <BackLink to="/">
        <Button>Back</Button>
      </BackLink>
      <header>
        <Heading>{username}</Heading>
      </header>

      <main>
        <List>{renderedRepos}</List>
      </main>
    </Container>
  );
};

export default Repos;
