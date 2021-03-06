import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import styled from 'styled-components';
import { ErrorHelperText } from '../ErrorHelperText';
import { useStudiesQuery } from '../../../api/study/useStudiesQuery';

const StudySelectStyle = styled.div`
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

const StudySelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched,
  error,
}: Props) => {
  const studiesQuery = useStudiesQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const schema = useLanguageSchema();
  return (
    <StudySelectStyle>
      <FormControlStyled>
        <InputLabel>{capFL(schema.studies)}</InputLabel>
        <Select
          value={value}
          onChange={handleSelectChange}
          onBlur={onBlur}
          name={name}
        >
          {studiesQuery.data?.data.map((study) => (
            <MenuItem key={study.IdEducation} value={study.IdEducation}>
              {study.FieldOfStudy}
            </MenuItem>
          ))}
        </Select>
        {touched && error && <ErrorHelperText text={error} />}
      </FormControlStyled>
    </StudySelectStyle>
  );
};

export default StudySelect;
