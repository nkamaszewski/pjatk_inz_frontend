import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import React from 'react';
import styled from 'styled-components';
import { ErrorHelperText } from '../ErrorHelperText';
import { useRoleQuery } from './useRoleQuery';

const UserRoleSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
}

export const UserRoleSelect = ({
  value,
  onChange,
  name,
  onBlur,
  touched,
  error,
}: Props) => {
  const roleQuery = useRoleQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <UserRoleSelectStyle>
      <FormControlStyled>
        <InputLabel>Rola</InputLabel>
        <Select
          value={value}
          onChange={handleSelectChange}
          onBlur={onBlur}
          name={name}
        >
          {roleQuery.data?.data.map((role) => (
            <MenuItem key={role.IdRole} value={role.IdRole}>
              {role.Name}
            </MenuItem>
          ))}
        </Select>
        {touched && error && <ErrorHelperText text={error} />}
      </FormControlStyled>
    </UserRoleSelectStyle>
  );
};
