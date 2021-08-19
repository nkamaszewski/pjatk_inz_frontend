import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from '@material-ui/core';

interface Props {
  onClick: () => void;
}

const DeleteBtn = ({ onClick }: Props) => {
  return (
    <Tooltip title="usuń">
      <Button onClick={onClick as any}>
        <FontAwesomeIcon className="g-error-color" icon={faTrash} />
      </Button>
    </Tooltip>
  );
};

export default DeleteBtn;
