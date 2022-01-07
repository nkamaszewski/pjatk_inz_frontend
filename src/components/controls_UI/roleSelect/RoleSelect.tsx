import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import React from 'react';
import styled from 'styled-components';
import { ErrorHelperText } from '../ErrorHelperText';
import { useRoleQuery } from './useRoleQuery';

const RoleSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
}

export const RoleSelect = ({
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
    <RoleSelectStyle>
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
    </RoleSelectStyle>
  );
};
