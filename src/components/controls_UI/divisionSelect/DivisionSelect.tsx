import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { useLanguage } from 'providers/LanguageProvider';
import React from 'react';
import { useDivisionsQuery } from './useDivisionsQuery';

interface Props {
  value: string;
  onChange: Function;
  name?: string;
  withAll?: boolean;
}

const DivisionSelect = ({ value, onChange, name, withAll = false }: Props) => {
  const divisionsQuery = useDivisionsQuery(withAll);
  const {
    language: { schema },
  } = useLanguage();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControlStyled>
      <InputLabel>{schema.department}</InputLabel>
      <Select value={value} onChange={handleSelectChange} name={name}>
        {divisionsQuery.data?.map((division) => (
          <MenuItem key={division.IdDivision} value={division.IdDivision}>
            {division.Name}
          </MenuItem>
        ))}
      </Select>
    </FormControlStyled>
  );
};

export default DivisionSelect;
