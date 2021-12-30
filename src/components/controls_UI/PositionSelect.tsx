import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useEffect, useState } from 'react';
import { getPositions } from '../../api/Position';
import { PositionDTO } from '../../types/DTO/Position';

interface Props {
  value: string;
  onChange: Function;
}

const PositionSelect = ({ value, onChange }: Props) => {
  const [positions, setPositions]: [PositionDTO[], Function] = useState([]);

  useEffect(() => {
    try {
      getPositions().then((res) => {
        setPositions(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

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
        {positions.map((position) => (
          <MenuItem key={position.IdPosition} value={position.IdPosition}>
            {position.Name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PositionSelect;
