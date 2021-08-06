import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getGroups } from '../../api/Group';
import { GroupDTO } from '../../types/DTO/Group';

const GroupSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const GroupSelect = ({ value, onChange }: Props) => {
  const [groups, setGroups]: [GroupDTO[], Function] = useState([]);

  const fetchEmployments = () => {
    try {
      getGroups().then((res) => {
        setGroups(res.data);
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
    <GroupSelectStyle>
      <FormControl fullWidth>
        <InputLabel>Grupa</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {groups.map((group) => (
            <MenuItem
              key={group.IdGroup}
              value={group.IdGroup}
            >{`${group.Name}, liczba osób: ${group.NumberOfPerson}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </GroupSelectStyle>
  );
};

export default GroupSelect;
