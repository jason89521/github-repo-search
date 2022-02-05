import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';

import sprite from 'sprite.svg';
import { ReposContext } from 'App';
import Button from 'components/Button';
import Svg from 'components/Svg';
import COLOR from 'styles/color';
import LanguageColors from 'styles/langColors';

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
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid ${COLOR.foreground};
`;

const RepoLink = styled(Link)`
  color: ${COLOR.link};

  &:hover {
    text-decoration: underline;
  }
`;

const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.4rem;
`;

const Language = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    display: block;
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => LanguageColors[props.language.toLowerCase()]};
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledSvg = styled(Svg)`
  fill: ${COLOR.foreground};
  width: 1.5rem;
  height: 1.5rem;
`;

const Repos = () => {
  const repos = useContext(ReposContext);
  const { username } = useParams();

  const renderedRepos = repos.map((repo, index) => {
    const { id, name, description, language, stargazers_count, forks_count } = repo;
    return (
      <Item key={id}>
        <h2>
          <RepoLink to={name}>{name}</RepoLink>
        </h2>
        {description && <p>{description}</p>}
        <Infos>
          {language && <Language language={language}>{language}</Language>}
          <Icon>
            <StyledSvg href={`${sprite}#icon-star-empty`} />
            {stargazers_count}
          </Icon>
          <Icon>
            <StyledSvg href={`${sprite}#icon-folk`} />
            {forks_count}
          </Icon>
        </Infos>
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
