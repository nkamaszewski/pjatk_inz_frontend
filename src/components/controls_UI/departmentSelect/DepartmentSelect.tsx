import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { useLanguage } from 'providers/LanguageProvider';
import React from 'react';
import { ErrorHelperText } from '../ErrorHelperText';
import { useDepartmentsQuery } from './useDepartmentsQuery';

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  withAll?: boolean;
  touched?: boolean;
  error?: string;
}

const DepartmentSelect = ({
  value,
  onChange,
  onBlur,
  name,
  withAll = false,
  touched = false,
  error,
}: Props) => {
  const departmentsQuery = useDepartmentsQuery(withAll);
  const {
    language: { schema },
  } = useLanguage();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControlStyled>
      <InputLabel>{schema.division}</InputLabel>
      <Select
        value={value}
        onChange={handleSelectChange}
        onBlur={onBlur}
        name={name}
      >
        {departmentsQuery.data?.map((department) => (
          <MenuItem
            key={department.IdDepartment}
            value={department.IdDepartment}
          >
            {department.Name}
          </MenuItem>
        ))}
      </Select>
      {touched && error && <ErrorHelperText text={error} />}
    </FormControlStyled>
  );
};

export default DepartmentSelect;
