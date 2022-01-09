import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { usePositionsQuery } from 'api/position/usePositionsQuery';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import { ErrorHelperText } from '../ErrorHelperText';

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
}

const PositionSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched = false,
  error,
}: Props) => {
  const positionsQuery = usePositionsQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const schema = useLanguageSchema();

  return (
    <FormControlStyled>
      <InputLabel>{capFL(schema.position)}</InputLabel>
      <Select
        value={value}
        onChange={handleSelectChange}
        onBlur={onBlur}
        name={name}
      >
        {positionsQuery.data?.data.map((position) => (
          <MenuItem key={position.IdPosition} value={position.IdPosition}>
            {position.Name}
          </MenuItem>
        ))}
      </Select>
      {touched && error && <ErrorHelperText text={error} />}
    </FormControlStyled>
  );
};

export default PositionSelect;
