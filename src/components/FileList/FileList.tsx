import { List, Item, FileLink } from './FileList.style';

import FileInfo from 'types/FileInfo';
import Svg from 'components/Svg';

interface FileListProps {
  files: FileInfo[];
}

const FilesList = ({ files }: FileListProps) => {
  const sortedFiles = [...files].sort((a, b) => {
    if (a.type === 'dir') return b.type === 'dir' ? 0 : -1;
    return b.type === 'dir' ? 1 : 0;
  });

  return (
    <List>
      {sortedFiles.length > 0 &&
        sortedFiles.map(file => {
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
