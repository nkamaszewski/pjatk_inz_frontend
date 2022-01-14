import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useParticipationsWithoutQuestionnairesQuery } from 'api/participation/useParticipationsWithoutQuestionnairesQuery';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import { ErrorHelperText } from './ErrorHelperText';

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
}

export const ParticipationWithoutQuestionnaireSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched = false,
  error,
}: Props) => {
  const participationsWithoutQuestionnairesQuery =
    useParticipationsWithoutQuestionnairesQuery();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };
  const schema = useLanguageSchema();

  return (
    <FormControlStyled>
      <InputLabel>{capFL(schema.position)}</InputLabel>
      <Select
        value={value}
        onChange={handleSelectChange}
        onBlur={onBlur}
        name={name}
      >
        {participationsWithoutQuestionnairesQuery.data?.data.map(
          (participation) => (
            <MenuItem
              key={participation.IdParticipation}
              value={participation.IdParticipation}
            >
              {participation.Name}
            </MenuItem>
          )
        )}
      </Select>
      {touched && error && <ErrorHelperText text={error} />}
    </FormControlStyled>
  );
};
