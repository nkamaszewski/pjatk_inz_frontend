import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { IconBtn } from './IconBtn';

interface Props {
  onClick: () => void;
}

const EditBtn = ({ onClick }: Props) => {
  return (
    <IconBtn
      title="edytuj"
      onClick={onClick}
      icon={faEdit}
      iconClassname="g-primary-color"
    />
  );
};

export default EditBtn;
