import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getApplicationsFor } from '../../api/Application';
import { ApplicationForListDTO } from '../../types/DTO/ApplicationFor';

const ApplicationForSelectStyle = styled.div``;

interface Props {
  value: string;
  onChange: Function;
}

const ApplicationForSelect = ({ value, onChange }: Props) => {
  const [appFor, setAppFor]: [ApplicationForListDTO[], Function] = useState([]);

  const fetchStudies = () => {
    try {
      getApplicationsFor().then((res) => {
        setAppFor(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchStudies, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  return (
    <ApplicationForSelectStyle>
      <FormControl fullWidth>
        <InputLabel>Wniosek szkoleniowy</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {appFor.map(({ IdApplicationFor, Status }) => (
            <MenuItem key={IdApplicationFor} value={IdApplicationFor}>
              {Status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ApplicationForSelectStyle>
  );
};

export default ApplicationForSelect;
