import { List, Item, FileLink } from './style';

import Svg from 'components/Svg';
import { FileType } from 'type';

type PropsType = {
  files: FileType[];
};

const FilesList = ({ files }: PropsType) => {
  return (
    <List>
      {files &&
        files.map(file => {
          const iconType = file.type === 'dir' ? 'icon-folder' : 'icon-file';
          return (
            <Item key={file.name}>
              <Svg href={`${iconType}`} />
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
