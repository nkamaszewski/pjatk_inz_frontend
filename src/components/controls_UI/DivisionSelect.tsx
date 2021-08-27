import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getDivisions } from '../../api/Division';
import { DivisionDTO } from '../../types/DTO/Division';

const DEFAULT_DIVISIONS: DivisionDTO[] = [
  { IdDivision: 'all', Name: 'Wszystkie' },
];

interface Props {
  value: string;
  onChange: Function;
  name?: string;
  withAll?: boolean;
}

const DivisionSelect = ({ value, onChange, name, withAll = false }: Props) => {
  const [divisions, setDivisions]: [DivisionDTO[], Function] = useState(
    withAll ? DEFAULT_DIVISIONS : []
  );

  useEffect(() => {
    try {
      getDivisions().then((res) => {
        const newDivisions = res.data;
        setDivisions(
          withAll ? DEFAULT_DIVISIONS.concat(newDivisions) : res.data
        );
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
      <InputLabel>Pion</InputLabel>
      <Select value={value} onChange={handleSelectChange} name={name}>
        {divisions.map((division) => (
          <MenuItem key={division.IdDivision} value={division.IdDivision}>
            {division.Name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DivisionSelect;
