import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRooms } from '../../api/Room';
import { RoomDTO } from '../../types/DTO/Room';

const RoomSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const RoomSelect = ({ value, onChange }: Props) => {
  const [rooms, setRooms]: [RoomDTO[], Function] = useState([]);

  const fetchEmployments = () => {
    try {
      getRooms().then((res) => {
        setRooms(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchEmployments, []);
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  return (
    <RoomSelectStyle>
      <FormControl fullWidth>
        <InputLabel>Sala</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {rooms.map((room) => (
            <MenuItem
              key={room.IdRoom}
              value={room.IdRoom}
            >{`${room.Name}, powierzchnia: ${room.Area}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </RoomSelectStyle>
  );
};

export default RoomSelect;
