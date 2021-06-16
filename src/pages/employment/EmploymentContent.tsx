import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import DepartmentSelect from '../../components/controls/DepartmentSelect';
import EmployeeSelect from '../../components/controls/EmployeeSelect';
import PositionSelect from '../../components/controls/PositionSelect';

const EmploymentContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchEmployments: Function;
}

const EmploymentContent = ({ closeDrawer, fetchEmployments }: Props) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleOnSave = () => {
    // try {
    //   postPosition({ Name: name }).then(() => fetchEmployments());
    // } catch (e) {
    //   console.error(e);
    // } finally {
    //   closeDrawer();
    // }
  };

  return (
    <EmploymentContentStyle>
      <h3>Dodaj pracownika</h3>
      <TextField
        label="Data od"
        type="date"
        defaultValue="2021-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Data do"
        type="date"
        defaultValue="2021-12-31"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <DepartmentSelect
        value={selectedDepartment}
        onChange={setSelectedDepartment}
      />

      <PositionSelect value={selectedPosition} onChange={setSelectedPosition} />

      <EmployeeSelect value={selectedEmployee} onChange={setSelectedEmployee} />

      <Button
        // disabled={!Boolean(name)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        Zapisz
      </Button>
    </EmploymentContentStyle>
  );
};

export default EmploymentContent;
