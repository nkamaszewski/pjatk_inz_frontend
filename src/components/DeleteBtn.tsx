import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from 'providers/LanguageProvider';
import { IconBtn } from './IconBtn';

interface Props {
  onClick: () => void;
}

const DeleteBtn = ({ onClick }: Props) => {
  const {
    language: { schema },
  } = useLanguage();

  return (
    <IconBtn
      title={schema.remove}
      onClick={onClick as any}
      icon={faTrash}
      iconClassname="g-error-color"
    />
  );
};

export default DeleteBtn;
