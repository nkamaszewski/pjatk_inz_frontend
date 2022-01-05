import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import React from 'react';
import { usePositionsQuery } from './usePositionsQuery';

interface Props {
  value: string;
  onChange: Function;
}

const PositionSelect = ({ value, onChange }: Props) => {
  const positionsQuery = usePositionsQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const {
    language: { schema },
  } = useLanguage();

  return (
    <FormControl fullWidth>
      <InputLabel>{capFL(schema.position)}</InputLabel>
      <Select value={value} onChange={handleSelectChange}>
        {positionsQuery.data?.data.map((position) => (
          <MenuItem key={position.IdPosition} value={position.IdPosition}>
            {position.Name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PositionSelect;
