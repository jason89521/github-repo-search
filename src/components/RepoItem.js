import styled from 'styled-components';
import { Link } from 'react-router-dom';

import COLOR from 'styles/color';
import LanguageColors from 'styles/langColors';
import Svg from 'components/Svg';

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

const RepoItem = () => {

}

export default RepoItem;