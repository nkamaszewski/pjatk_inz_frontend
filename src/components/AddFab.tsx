import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
}

const AddFab = ({ onClick, children, className = '' }: Props) => {
  return (
    <div className={`toolbar--global ${className}`}>
      {children}
      <Fab color="primary" aria-label="add" onClick={onClick}>
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
    </div>
  );
};

export default AddFab;
