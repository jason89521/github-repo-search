import { Link } from 'react-router-dom';

import { Item, Infos, Language, LanguageType } from './RepoItem.style';
import { RepoType } from 'type';
import Icon from 'components/Icon';

type RepoItemProps = {
  repo: RepoType;
};

const RepoItem = ({ repo }: RepoItemProps) => {
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
