import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconBtn } from './IconBtn';

interface Props {
  onClick: () => void;
}

const DeleteBtn = ({ onClick }: Props) => {
  return (
    <IconBtn
      title="usuń"
      onClick={onClick as any}
      icon={faTrash}
      iconClassname="g-error-color"
    />
  );
};

export default DeleteBtn;
