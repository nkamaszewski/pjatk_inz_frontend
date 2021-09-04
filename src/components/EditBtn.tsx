import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { IconBtn } from './IconBtn';

interface Props {
  onClick: Function;
}

const EditBtn = ({ onClick }: Props) => {
  return (
    <IconBtn
      title="edytuj"
      onClick={onClick as any}
      icon={faEdit}
      iconClassname="g-primary-color"
    />
  );
};

export default EditBtn;
