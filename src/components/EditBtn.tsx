import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { IconBtn } from './IconBtn';

interface Props {
  onClick: () => void;
}

const EditBtn = ({ onClick }: Props) => {
  const schema = useLanguageSchema();

  return (
    <IconBtn
      title={schema.edit}
      onClick={onClick}
      icon={faEdit}
      iconClassname="g-primary-color"
    />
  );
};

export default EditBtn;
