import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postDepartment } from '../../../api/apiRoutes';
import { Division } from '../../../types/DTO/Division';

const DepartmentContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  divisions: Division[];
  closeDrawer: Function;
  fetchDivisionsDepartments: Function;
}

const DepartmentContent = ({
  divisions,
  closeDrawer,
  fetchDivisionsDepartments,
}: Props) => {
  const [name, setName] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');

  const handleOnNameChange = (e: any) => {
    e.persist();
    setName(e.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedDivision(event.target.value as string);
  };

  const handleOnSave = () => {
    try {
      postDepartment({ Name: name, IdDivision: selectedDivision }).then(() =>
        fetchDivisionsDepartments()
      );
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  return (
    <DepartmentContentStyle>
      <TextField
        fullWidth
        label="Nazwa"
        value={name}
        onChange={handleOnNameChange}
      />
      <FormControl fullWidth>
        <InputLabel>Pion</InputLabel>
        <Select value={selectedDivision} onChange={handleSelectChange}>
          {divisions.map((division) => (
            <MenuItem value={division.IdDivision}>{division.Name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        disabled={!Boolean(name) && !Boolean(selectedDivision)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        Zapisz
      </Button>
    </DepartmentContentStyle>
  );
};

export default DepartmentContent;
