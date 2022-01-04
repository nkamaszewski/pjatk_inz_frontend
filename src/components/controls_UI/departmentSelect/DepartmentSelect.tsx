import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import React from 'react';
import { useDepartmentsQuery } from './useDepartmentsQuery';

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
  const departmentsQuery = useDepartmentsQuery(withAll);
  const {
    language: { schema },
  } = useLanguage();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{schema.division}</InputLabel>
      <Select value={value} onChange={handleSelectChange} name={name}>
        {departmentsQuery.data?.map((department) => (
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
