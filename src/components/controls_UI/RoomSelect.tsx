import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { ALL } from 'providers/FilterContext';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRooms } from '../../api/Room';
import { RoomDTO } from '../../types/DTO/Room';

const DEFAULT_ROOMS = [{ IdRoom: 'all', Name: 'Wszystkie' } as RoomDTO];

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

const RoomSelect = ({ value, onChange, withAll, name }: Props) => {
  const [rooms, setRooms] = useState<RoomDTO[]>(withAll ? DEFAULT_ROOMS : []);

  const fetchEmployments = () => {
    try {
      getRooms().then((res) => {
        setRooms(withAll ? DEFAULT_ROOMS.concat(res.data) : res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchEmployments, [withAll]);
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
          {rooms.map((room) => (
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
