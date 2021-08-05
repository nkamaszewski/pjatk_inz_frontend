import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postEmployment } from '../../api/Employment';
import DepartmentSelect from '../../components/controls_UI/DepartmentSelect';
import PersonSelect from '../../components/controls_UI/PersonSelect';
import PositionSelect from '../../components/controls_UI/PositionSelect';

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
  const [dateFrom, setDateFrom] = useState('2021-01-01');
  const [dateTo, setDateTo] = useState('2021-12-01');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleOnSave = () => {
    try {
      postEmployment({
        DateFrom: dateFrom,
        DateTo: dateTo,
        IdDepartment: selectedDepartment,
        IdPosition: selectedPosition,
        IdPerson: selectedEmployee,
      }).then(() => fetchEmployments());
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  const handleDateChange = (e: any) => {
    const setterFn = e.target.name === dateFrom ? setDateFrom : setDateTo;
    setterFn(e.target.value);
  };

  return (
    <EmploymentContentStyle>
      <h3>Dodaj pracownika</h3>
      <TextField
        label="Data od"
        name="dateFrom"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={dateFrom}
        onChange={handleDateChange}
      />
      <TextField
        label="Data do"
        name="dateTo"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={dateTo}
        onChange={handleDateChange}
      />
      <DepartmentSelect
        value={selectedDepartment}
        onChange={setSelectedDepartment}
      />

      <PositionSelect value={selectedPosition} onChange={setSelectedPosition} />

      <PersonSelect value={selectedEmployee} onChange={setSelectedEmployee} />

      <Button
        disabled={
          !Boolean(dateFrom) &&
          !Boolean(dateTo) &&
          !Boolean(selectedDepartment) &&
          !Boolean(selectedPosition) &&
          !Boolean(selectedEmployee)
        }
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
