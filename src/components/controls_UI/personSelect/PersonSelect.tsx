import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ErrorHelperText } from '../ErrorHelperText';
import { PersonDialogForm } from './PersonDialogForm';
import { usePersonsQuery } from './usePersonsQuery';

const EmployeeSelectStyle = styled.div`
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

const PersonSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched = false,
  error,
}: Props) => {
  const [addingMode, setAddingMode] = useState(false);
  const personsQuery = usePersonsQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const schema = useLanguageSchema();
  return (
    <EmployeeSelectStyle>
      <FormControlStyled>
        <InputLabel>{schema.person}</InputLabel>
        <Select
          value={value}
          onChange={handleSelectChange}
          onBlur={onBlur}
          name={name}
        >
          {personsQuery.data?.data.map((person) => (
            <MenuItem
              key={person.IdPerson}
              value={person.IdPerson}
            >{`${person.FirstName} ${person.LastName}`}</MenuItem>
          ))}
        </Select>
        {touched && error && <ErrorHelperText text={error} />}
      </FormControlStyled>
      <Tooltip title={schema.addAPerson}>
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <PersonDialogForm
        open={addingMode}
        onClose={() => {
          setAddingMode(false);
        }}
        onCancel={() => {
          setAddingMode(false);
        }}
        onSuccessSubmit={(id) => {
          onChange(id);
        }}
      />
    </EmployeeSelectStyle>
  );
};

export default PersonSelect;
