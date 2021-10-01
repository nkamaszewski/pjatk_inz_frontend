import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getDepartments } from '../../api/Department';
import { DepartmentDTO } from '../../types/DTO/Department';

const DEFAULT_DEPARTMENTS: DepartmentDTO[] = [
  { IdDepartment: 'all', Name: 'Wszystkie' } as DepartmentDTO,
];

interface Props {
  value: string;
  onChange: Function;
  name?: string;
  withAll?: boolean;
}

const DepartmentSelect = ({
  value,
  onChange,
  name,
  withAll = false,
}: Props) => {
  const [departments, setDepartments]: [DepartmentDTO[], Function] = useState(
    withAll ? DEFAULT_DEPARTMENTS : []
  );

  useEffect(() => {
    try {
      getDepartments().then((res) => {
        const newDepartments = res.data;
        setDepartments(
          withAll ? DEFAULT_DEPARTMENTS.concat(newDepartments) : res.data
        );
      });
    } catch (e) {
      console.error(e);
    }
  }, [withAll]);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Wydział</InputLabel>
      <Select value={value} onChange={handleSelectChange} name={name}>
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
