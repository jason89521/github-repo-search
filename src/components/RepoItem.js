import styled from 'styled-components';
import { Link } from 'react-router-dom';

import sprite from 'sprite.svg';
import Color from 'styles/color';
import LanguageColors from 'styles/langColors';
import Svg from 'components/Svg';
import breakpoints from 'styles/breakpoints';

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
    background-color: ${props => LanguageColors[props.language]};
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledSvg = styled(Svg)`
  width: 1.5rem;
  height: 1.5rem;
`;

/**
 * @param {{repo:import('type').Repo}} props
 */
const RepoItem = ({ repo }) => {
  const { name, description, language, stargazers_count, forks_count } = repo;

  return (
    <Item>
      <h2>
        <Link to={name}>{name}</Link>
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
};

export default RepoItem;
