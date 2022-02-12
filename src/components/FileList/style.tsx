import styled from 'styled-components';

import Color from 'styles/color';

export const List = styled.ul`
  border: 1px solid ${Color.gray};
  border-radius: 10px;
`;

export const Item = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid ${Color.gray};
  }
`;

export const FileLink = styled.a`
  color: #fff;

  &:hover {
    color: ${Color.link};
  }
`;
