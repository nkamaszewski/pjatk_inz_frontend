import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from '@material-ui/core';

interface Props {
  onClick: Function;
}

const EditBtn = ({ onClick }: Props) => {
  return (
    <Tooltip title="edytuj">
      <Button onClick={onClick as any}>
        <FontAwesomeIcon className="default--icon-color" icon={faEdit} />
      </Button>
    </Tooltip>
  );
};

export default EditBtn;
