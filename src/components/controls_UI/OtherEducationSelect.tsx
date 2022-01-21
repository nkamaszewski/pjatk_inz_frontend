import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useOtherEducationsQuery } from 'api/otherEducation/useOtherEducationsQuery';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import styled from 'styled-components';
import { ErrorHelperText } from './ErrorHelperText';

const OtherEducationSelectStyle = styled.div`
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

export const OtherEducationSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched,
  error,
}: Props) => {
  const otherEducationsQuery = useOtherEducationsQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const schema = useLanguageSchema();
  return (
    <OtherEducationSelectStyle>
      <FormControlStyled>
        <InputLabel>{capFL(schema.otherTtrainings)}</InputLabel>
        <Select
          value={value}
          onChange={handleSelectChange}
          onBlur={onBlur}
          name={name}
        >
          {otherEducationsQuery.data?.data.map((otherEducation) => (
            <MenuItem
              key={otherEducation.IdEducation}
              value={otherEducation.IdEducation}
            >
              {otherEducation.Name}
            </MenuItem>
          ))}
        </Select>
        {touched && error && <ErrorHelperText text={error} />}
      </FormControlStyled>
    </OtherEducationSelectStyle>
  );
};
