import { List, Item, FileLink } from './FileList.style';

import FileInfo from 'types/FileInfo';
import Svg from 'components/Svg';

type FileListProps = {
  files: FileInfo[];
};

const FilesList = ({ files }: FileListProps) => {
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
