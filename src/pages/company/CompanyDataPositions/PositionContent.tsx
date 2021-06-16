import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postPosition } from '../../../api/apiRoutes';

const PositionContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchPositions: Function;
}

const PositionContent = ({ closeDrawer, fetchPositions }: Props) => {
  const [name, setName] = useState('');

  const handleOnNameChange = (e: any) => {
    e.persist();
    setName(e.target.value);
  };

  const handleOnSave = () => {
    try {
      postPosition({ Name: name }).then(() => fetchPositions());
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  return (
    <PositionContentStyle>
      <h3>Dodaj stanowisko</h3>
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
