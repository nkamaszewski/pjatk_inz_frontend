import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab } from '@material-ui/core';
import React from 'react';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const AddFab = ({ onClick }: Props) => {
  return (
    <div className="toolbar--global">
      <Fab color="primary" aria-label="add" onClick={onClick}>
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
    </div>
  );
};

export default AddFab;
