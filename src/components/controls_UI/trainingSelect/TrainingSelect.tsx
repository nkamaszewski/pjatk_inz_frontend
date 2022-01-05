import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import React from 'react';
import styled from 'styled-components';
import { useTrainingsQuery } from './useTrainingsQuery';

const EmployeeSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const TrainingSelect = ({ value, onChange }: Props) => {
  const trainingsQuery = useTrainingsQuery();
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <EmployeeSelectStyle>
      <FormControl fullWidth>
        <InputLabel>{capFL(schema.course)}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {trainingsQuery.data?.data.map((training) => (
            <MenuItem
              key={training.trainingEducation.IdEducation}
              value={training.trainingEducation.IdEducation}
            >{`${training.trainingTopic.Topic}, organizator: ${training.trainingCompany.Name}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </EmployeeSelectStyle>
  );
};

export default TrainingSelect;
