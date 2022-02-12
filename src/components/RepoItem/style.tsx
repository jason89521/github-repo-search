import styled from 'styled-components';

import langColors from 'styles/langColors';
import Color from 'styles/color';
import breakpoints from 'styles/breakpoints';

export type LanguageType = keyof typeof langColors;

export const Item = styled.li`
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

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.4rem;
`;

export const Language = styled.span<{ language: LanguageType }>`
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
