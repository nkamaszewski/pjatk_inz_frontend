import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import { ErrorHelperText } from '../ErrorHelperText';
import { useEmployeesQuery } from './useEmployeesQuery';

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
}

export const EmployeeSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched,
  error,
}: Props) => {
  const employeesQuery = useEmployeesQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const schema = useLanguageSchema();
  return (
    <FormControlStyled>
      <InputLabel>{schema.employee}</InputLabel>
      <Select
        value={value}
        onChange={handleSelectChange}
        onBlur={onBlur}
        name={name}
      >
        {employeesQuery.data?.data.map((employee) => (
          <MenuItem
            key={employee.IdPerson}
            value={employee.IdPerson}
          >{`${employee.employeePerson.FirstName} ${employee.employeePerson.LastName}`}</MenuItem>
        ))}
      </Select>
      {touched && error && <ErrorHelperText text={error} />}
    </FormControlStyled>
  );
};
