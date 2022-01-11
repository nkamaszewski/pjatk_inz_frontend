import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { IconBtn } from './IconBtn';

interface Props {
  onClick: () => void;
}

const DeleteBtn = ({ onClick }: Props) => {
  const schema = useLanguageSchema();

  return (
    <IconBtn
      title={schema.remove}
      onClick={onClick}
      icon={faTrash}
      iconClassname="g-error-color"
    />
  );
};

export default DeleteBtn;
