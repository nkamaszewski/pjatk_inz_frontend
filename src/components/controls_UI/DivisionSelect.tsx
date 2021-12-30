import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useEffect, useState } from 'react';
import { getDivisions } from '../../api/Division';
import { DivisionDTO } from '../../types/DTO/Division';

const DEFAULT_DIVISIONS = (Name: string): DivisionDTO[] => [
  { IdDivision: 'all', Name }
];

interface Props {
  value: string;
  onChange: Function;
  name?: string;
  withAll?: boolean;
}


const DivisionSelect = ({ value, onChange, name, withAll = false }: Props) => {
  const {
    language: { schema },
  } = useLanguage();
  const [divisions, setDivisions]: [DivisionDTO[], Function] = useState(
    withAll ? DEFAULT_DIVISIONS(schema.all) : []
  );

  useEffect(() => {
    try {
      getDivisions().then((res) => {
        const newDivisions = res.data;
        setDivisions(
          withAll ? DEFAULT_DIVISIONS(schema.all).concat(newDivisions) : res.data
        );
      });
    } catch (e) {
      console.error(e);
    }
  }, [withAll, schema.all]);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{schema.department}</InputLabel>
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
