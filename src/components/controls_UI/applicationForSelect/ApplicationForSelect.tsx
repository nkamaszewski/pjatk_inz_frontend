import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { formatDate } from 'helpers/formatDate';
import { useLanguage } from 'providers/LanguageProvider';
import React from 'react';
import styled from 'styled-components';
import { useAppForQuery } from './useAppForQuery';

const ApplicationForSelectStyle = styled.div``;

interface Props {
  value: string;
  onChange: Function;
}

const ApplicationForSelect = ({ value, onChange }: Props) => {
  const appForQuery = useAppForQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <ApplicationForSelectStyle>
      <FormControlStyled>
        <InputLabel>{schema.trainingApplication}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {appForQuery.data?.data.map(
            ({
              IdApplicationFor,
              Nazwa,
              FirstName,
              LastName,
              DateOfSubmission,
              Status,
            }) => (
              <MenuItem key={IdApplicationFor} value={IdApplicationFor}>
                {formatDate(DateOfSubmission)} {Nazwa} {FirstName} {LastName}{' '}
                {Status}
              </MenuItem>
            )
          )}
        </Select>
      </FormControlStyled>
    </ApplicationForSelectStyle>
  );
};

export default ApplicationForSelect;
