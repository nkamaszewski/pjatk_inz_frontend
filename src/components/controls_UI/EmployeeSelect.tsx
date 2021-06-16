import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { EmployeeDTO } from '../../types/DTO/Employee';

interface Props {
  value: string;
  onChange: Function;
}

const EmployeeSelect = ({ value, onChange }: Props) => {
  const [employees, setEmployees]: [EmployeeDTO[], Function] = useState([
    { IdPerson: '1', Pesel: 1111111111 },
    { IdPerson: '2', Pesel: 2222222222 },
  ]);

  useEffect(() => {
    // TODO: jak powstanie employment na serwerze tutaj dodac zapytanie serwerowe
    // try {
    //   getPositions().then((res) => {
    //     setEmployees(res.data);
    //   });
    // } catch (e) {
    //   console.error(e);
    // }
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Pracownik</InputLabel>
      <Select value={value} onChange={handleSelectChange}>
        {employees.map((employee, index) => (
          <MenuItem
            key={employee.IdPerson}
            value={employee.IdPerson}
          >{`Leon Testowy_${index + 1}, PESEL: ${employee.Pesel}`}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EmployeeSelect;
