import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from 'providers/LanguageProvider';
import { IconBtn } from './IconBtn';

interface AddParticipationProps {
  onClick: () => void;
}

export const AddParticipation = ({ onClick }: AddParticipationProps) => {
  const {
    language: { schema },
  } = useLanguage();
  return <IconBtn title={schema.participants} onClick={onClick} icon={faSitemap} />;
};
