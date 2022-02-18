import { Link } from 'react-router-dom';

import RepoInfo from 'types/RepoInfo';
import { Item, Infos, Language, LanguageType } from './RepoItem.style';
import Icon from 'components/Icon';
import React from 'react';

interface RepoItemProps {
  repo: RepoInfo;
}

const RepoItem = ({ repo }: RepoItemProps, ref: React.ForwardedRef<HTMLLIElement>) => {
  const { name, description, language, stargazers_count, forks_count, open_issues_count } = repo;

  return (
    <Item ref={ref}>
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

export default React.forwardRef(RepoItem);
