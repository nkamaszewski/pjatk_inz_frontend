import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { IconBtn } from './IconBtn';

interface AddParticipationProps {
  onClick: () => void;
}

export const AddParticipation = ({ onClick }: AddParticipationProps) => {
  const schema = useLanguageSchema();
  return (
    <IconBtn title={schema.participants} onClick={onClick} icon={faSitemap} />
  );
};
