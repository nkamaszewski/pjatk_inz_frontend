import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import styled from 'styled-components';
import { ErrorHelperText } from '../ErrorHelperText';
import { useTrainingsQuery } from '../../../api/training/useTrainingsQuery';

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

const TrainingSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched,
  error,
}: Props) => {
  const trainingsQuery = useTrainingsQuery();
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const schema = useLanguageSchema();
  return (
    <EmployeeSelectStyle>
      <FormControlStyled>
        <InputLabel>{capFL(schema.course)}</InputLabel>
        <Select
          value={value}
          onChange={handleSelectChange}
          onBlur={onBlur}
          name={name}
        >
          {trainingsQuery.data?.data.map((training) => (
            <MenuItem
              key={training.trainingEducation.IdEducation}
              value={training.trainingEducation.IdEducation}
            >{`${training.trainingTopic.Topic}, organizator: ${training.trainingCompany.Name}`}</MenuItem>
          ))}
        </Select>
        {touched && error && <ErrorHelperText text={error} />}
      </FormControlStyled>
    </EmployeeSelectStyle>
  );
};

export default TrainingSelect;
