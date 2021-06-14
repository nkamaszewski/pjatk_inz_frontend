import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postDivision } from '../../../api/apiRoutes';

const DivisionContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchDivisionsDepartments: Function;
}

const DivisionContent = ({ closeDrawer, fetchDivisionsDepartments }: Props) => {
  const [name, setName] = useState('');

  const handleOnNameChange = (e: any) => {
    e.persist();
    setName(e.target.value);
  };

  const handleOnSave = () => {
    try {
      postDivision({ Name: name }).then(() => fetchDivisionsDepartments());
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  return (
    <DivisionContentStyle>
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
    </DivisionContentStyle>
  );
};

export default DivisionContent;
