import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { ALL } from 'providers/FilterContext';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getGroups } from '../../api/Group';
import { GroupDTO } from '../../types/DTO/Group';

const DEFAULT_GROUPS = [{ IdGroup: 'all', Name: 'Wszystkie' } as GroupDTO];

const GroupSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
  withAll?: boolean;
  name?: string;
}

const GroupSelect = ({ value, onChange, withAll, name }: Props) => {
  const [groups, setGroups] = useState<GroupDTO[]>(
    withAll ? DEFAULT_GROUPS : []
  );

  const fetchEmployments = () => {
    try {
      getGroups().then((res) => {
        setGroups(withAll ? DEFAULT_GROUPS.concat(res.data) : res.data);
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
    <GroupSelectStyle>
      <FormControl fullWidth>
        <InputLabel>{schema.group}</InputLabel>
        <Select value={value} onChange={handleSelectChange} name={name}>
          {groups.map((group) => (
            <MenuItem key={group.IdGroup} value={group.IdGroup}>
              {group.IdGroup === ALL
                ? 'Wszystkie'
                : `${group.Name}, liczba osób: ${group.NumberOfPerson}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </GroupSelectStyle>
  );
};

export default GroupSelect;
