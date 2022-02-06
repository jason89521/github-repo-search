import styled from 'styled-components';

import Sprite from 'sprite.svg';
import Color from 'styles/color';
import Svg from 'components/Svg';

const List = styled.ul`
  border: 1px solid ${Color.gray};
  border-radius: 10px;
`;

const Item = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid ${Color.gray};
  }
`;

const FileLink = styled.a`
  color: #fff;

  &:hover {
    color: ${Color.link};
  }
`;

/**
 * @param {{files: import('type').File[]}} props
 * @returns
 */
const FilesList = ({ files }) => {
  return (
    <List>
      {files &&
        files.map(file => {
          const iconType = file.type === 'dir' ? '#icon-folder' : '#icon-file';
          return (
            <Item key={file.name}>
              <Svg href={`${Sprite}${iconType}`} />
              <FileLink href={file.html_url} target="_blank" rel="noreferrer">
                {file.name}
              </FileLink>
            </Item>
          );
        })}
    </List>
  );
};

export default FilesList;
