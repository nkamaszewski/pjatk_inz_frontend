import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { ALL } from 'providers/FilterContext';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import styled from 'styled-components';
import { ErrorHelperText } from '../ErrorHelperText';
import { useRoomsQuery } from './useRoomsQuery';

const RoomSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  withAll?: boolean;
  name?: string;
  touched?: boolean;
  error?: string;
}

const RoomSelect = ({
  value,
  onChange,
  onBlur,
  withAll = false,
  name,
  touched,
  error,
}: Props) => {
  const roomsQuery = useRoomsQuery(withAll);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const schema = useLanguageSchema();
  return (
    <RoomSelectStyle>
      <FormControlStyled>
        <InputLabel>{schema.room}</InputLabel>
        <Select
          value={value}
          onChange={handleSelectChange}
          name={name}
          onBlur={onBlur}
        >
          {roomsQuery.data?.map((room) => (
            <MenuItem key={room.IdRoom} value={room.IdRoom}>
              {room.IdRoom === ALL
                ? schema.all
                : `${room.Name} ${schema.surfaceV2} ${room.Area}`}
            </MenuItem>
          ))}
        </Select>
        {touched && error && <ErrorHelperText text={error} />}
      </FormControlStyled>
    </RoomSelectStyle>
  );
};

export default RoomSelect;
