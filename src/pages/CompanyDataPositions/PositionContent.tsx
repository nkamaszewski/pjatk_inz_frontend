import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postPosition, updatePosition } from '../../api/Position';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { PositionDTO } from '../../types/DTO/Position';

const PositionContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchPositions: Function;
  editPosition?: PositionDTO | null;
}

const PositionContent = ({
  closeDrawer,
  fetchPositions,
  editPosition,
}: Props) => {
  const [name, setName] = useState(editPosition?.Name ?? '');
  const { setSnackbar } = useSnackbar();

  const handleOnNameChange = (e: any) => {
    e.persist();
    setName(e.target.value);
  };

  const handleOnSave = async () => {
    try {
      if (editPosition) {
        await updatePosition({
          IdPosition: editPosition.IdPosition,
          Name: name,
        });
        setSnackbar(createSnackbarSuccess('Stanowisko zostało wyedytowane'));
      } else {
        await postPosition({ Name: name });
        setSnackbar(createSnackbarSuccess('Stanowisko zostało dodane'));
      }
    } catch (e) {
      console.error(e);
    } finally {
      fetchPositions();
      closeDrawer();
    }
  };

  return (
    <PositionContentStyle>
      <TextField
        fullWidth
        label="Nazwa"
        value={name}
        onChange={handleOnNameChange}
      />
      <Button
        disabled={!Boolean(name)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        Zapisz
      </Button>
    </PositionContentStyle>
  );
};

export default PositionContent;
