import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getDepartments } from '../../api/Department';
import { DepartmentDTO } from '../../types/DTO/Department';

interface Props {
  value: string;
  onChange: Function;
}

const DepartmentSelect = ({ value, onChange }: Props) => {
  const [departments, setDepartments]: [DepartmentDTO[], Function] = useState(
    []
  );

  useEffect(() => {
    try {
      getDepartments().then((res) => {
        setDepartments(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Wydział</InputLabel>
      <Select value={value} onChange={handleSelectChange}>
        {departments.map((department) => (
          <MenuItem
            key={department.IdDepartment}
            value={department.IdDepartment}
          >
            {department.Name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DepartmentSelect;
