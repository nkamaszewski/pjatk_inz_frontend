import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { ALL } from 'providers/FilterContext';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import styled from 'styled-components';
import { ErrorHelperText } from '../ErrorHelperText';
import { useGroupesQuery } from './useGroupesQuery';

const GroupSelectStyle = styled.div`
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

const GroupSelect = ({
  value,
  onChange,
  onBlur,
  withAll = false,
  name,
  touched,
  error,
}: Props) => {
  const groupsQuery = useGroupesQuery(withAll);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const schema = useLanguageSchema();
  return (
    <GroupSelectStyle>
      <FormControlStyled>
        <InputLabel>{capFL(schema.group)}</InputLabel>
        <Select
          value={value}
          onChange={handleSelectChange}
          name={name}
          onBlur={onBlur}
        >
          {groupsQuery.data?.map((group) => (
            <MenuItem key={group.IdGroup} value={group.IdGroup}>
              {group.IdGroup === ALL
                ? schema.all
                : `${group.Name} ${schema.numberOfPeopleV2} ${group.NumberOfPerson}`}
            </MenuItem>
          ))}
        </Select>
        {touched && error && <ErrorHelperText text={error} />}
      </FormControlStyled>
    </GroupSelectStyle>
  );
};

export default GroupSelect;
