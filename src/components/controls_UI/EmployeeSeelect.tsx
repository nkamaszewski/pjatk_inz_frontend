import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getEmployees } from '../../api/Employee';

import { EmployeeDTO } from '../../types/DTO/Employee';

const EmployeeSeelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EmployeeSeelect = ({ value, onChange }: Props) => {
  const [employees, setEmployees]: [EmployeeDTO[], Function] = useState([]);

  const fetchEmployees = () => {
    try {
      getEmployees().then((res) => {
        setEmployees(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchEmployees, []);
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  return (
    <EmployeeSeelectStyle>
      <FormControl fullWidth>
        <InputLabel>Pracownik</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {employees.map((employee) => (
            <MenuItem
              key={employee.IdPerson}
              value={employee.IdPerson}
            >{`${employee.employeePerson.FirstName} ${employee.employeePerson.LastName}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </EmployeeSeelectStyle>
  );
};

export default EmployeeSeelect;
