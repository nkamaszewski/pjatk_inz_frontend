import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';

interface Props {
  onClick: Function;
}

const DeleteBtn = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick as any}>
      <FontAwesomeIcon className="secondary--color" icon={faTrash} />
    </Button>
  );
};

export default DeleteBtn;
