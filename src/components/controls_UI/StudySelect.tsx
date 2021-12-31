import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStudies } from '../../api/Study';
import { StudyDTO } from '../../types/DTO/Study';

const StudySelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const StudySelect = ({ value, onChange }: Props) => {
  const [studies, setStudies]: [StudyDTO[], Function] = useState([]);

  const fetchStudies = () => {
    try {
      getStudies().then((res) => {
        setStudies(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchStudies, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <StudySelectStyle>
      <FormControl fullWidth>
        <InputLabel>{capFL(schema.studies)}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {studies.map((studies) => (
            <MenuItem key={studies.IdEducation} value={studies.IdEducation}>
              {studies.FieldOfStudy}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StudySelectStyle>
  );
};

export default StudySelect;
