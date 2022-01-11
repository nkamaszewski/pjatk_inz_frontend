import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { IconBtn } from './IconBtn';

interface Props {
  onClick: () => void;
}

export const DownloadBtn = ({ onClick }: Props) => {
  return <IconBtn title="pobierz" onClick={onClick} icon={faDownload} />;
};
