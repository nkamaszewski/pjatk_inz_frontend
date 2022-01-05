import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { ALL } from 'providers/FilterContext';
import { useLanguage } from 'providers/LanguageProvider';
import React from 'react';
import styled from 'styled-components';
import { useRoomsQuery } from './useRoomsQuery';

const RoomSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
  withAll?: boolean;
  name?: string;
}

const RoomSelect = ({ value, onChange, withAll = false, name }: Props) => {
  const roomsQuery = useRoomsQuery(withAll);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <RoomSelectStyle>
      <FormControl fullWidth>
        <InputLabel>{schema.room}</InputLabel>
        <Select value={value} onChange={handleSelectChange} name={name}>
          {roomsQuery.data?.map((room) => (
            <MenuItem key={room.IdRoom} value={room.IdRoom}>
              {room.IdRoom === ALL
                ? schema.all
                : `${room.Name} ${schema.surfaceV2} ${room.Area}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </RoomSelectStyle>
  );
};

export default RoomSelect;
