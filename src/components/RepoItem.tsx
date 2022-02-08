import styled from 'styled-components';
import { Link } from 'react-router-dom';

import type { RepoType } from 'type';
import Color from 'styles/color';
import breakpoints from 'styles/breakpoints';
import langColors from 'styles/langColors';
import Icon from 'components/Icon';

type PropsType = {
  repo: RepoType;
};

type LanguageType = keyof typeof langColors;

const Item = styled.li`
  padding: 3rem 2rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid ${Color.gray};

  @media (max-width: ${breakpoints.medium}) {
    padding: 2rem 0;
  }
`;

const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.4rem;
`;

const Language = styled.span<{ language: LanguageType }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    display: block;
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => langColors[props.language]};
  }
`;

const RepoItem = ({ repo }: PropsType) => {
  const { name, description, language, stargazers_count, forks_count, open_issues_count } = repo;

  return (
    <Item>
      <h2>
        <Link to={name}>{name}</Link>
      </h2>
      {description && <p>{description}</p>}
      <Infos>
        {language && <Language language={language as LanguageType}>{language}</Language>}
        <Icon href="icon-star" message={stargazers_count} />
        <Icon href="icon-fork" message={forks_count} />
        <Icon href="icon-issue" message={open_issues_count} />
      </Infos>
    </Item>
  );
};

export default RepoItem;
