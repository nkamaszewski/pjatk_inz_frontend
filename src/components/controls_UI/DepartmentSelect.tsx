import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useEffect, useState } from 'react';
import { getDepartments } from '../../api/Department';
import { DepartmentDTO } from '../../types/DTO/Department';

const DEFAULT_DEPARTMENTS = (Name: string):DepartmentDTO[] => ([{IdDepartment: 'all', Name} as DepartmentDTO])


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
  const {
    language: { schema },
  } = useLanguage();

  const [departments, setDepartments] = useState<DepartmentDTO[]>(
    withAll ? DEFAULT_DEPARTMENTS(schema.all) : []
  );

  useEffect(() => {
    try {
      getDepartments().then((res) => {
        const newDepartments = res.data;
        setDepartments(
          withAll ? DEFAULT_DEPARTMENTS(schema.all).concat(newDepartments) : res.data
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
      <InputLabel>{schema.division}</InputLabel>
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
