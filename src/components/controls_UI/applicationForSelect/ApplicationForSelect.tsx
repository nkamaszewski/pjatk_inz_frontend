import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useApplicationsQuery } from 'api/application/useApplicationsQuery';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { formatDate } from 'helpers/formatDate';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import { ErrorHelperText } from '../ErrorHelperText';

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
}

const ApplicationForSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched = false,
  error,
}: Props) => {
  const appForQuery = useApplicationsQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const schema = useLanguageSchema();
  return (
    <FormControlStyled>
      <InputLabel>{schema.trainingApplication}</InputLabel>
      <Select
        value={value}
        onChange={handleSelectChange}
        onBlur={onBlur}
        name={name}
      >
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
      {touched && error && <ErrorHelperText text={error} />}
    </FormControlStyled>
  );
};

export default ApplicationForSelect;
