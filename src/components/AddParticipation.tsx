import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { IconBtn } from './IconBtn';

interface AddParticipationProps {
  onClick: () => void;
}

export const AddParticipation = ({ onClick }: AddParticipationProps) => {
  return <IconBtn title="uczestnicy" onClick={onClick} icon={faSitemap} />;
};
