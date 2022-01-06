import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import React from 'react';
import styled from 'styled-components';
import { useStudiesQuery } from './useStudiesQuery';

const StudySelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const StudySelect = ({ value, onChange }: Props) => {
  const studiesQuery = useStudiesQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <StudySelectStyle>
      <FormControlStyled>
        <InputLabel>{capFL(schema.studies)}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {studiesQuery.data?.data.map((study) => (
            <MenuItem key={study.IdEducation} value={study.IdEducation}>
              {study.FieldOfStudy}
            </MenuItem>
          ))}
        </Select>
      </FormControlStyled>
    </StudySelectStyle>
  );
};

export default StudySelect;
