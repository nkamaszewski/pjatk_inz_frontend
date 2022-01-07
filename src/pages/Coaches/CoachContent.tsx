import { Button, TextField } from '@material-ui/core';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { postCoach, updateCoach } from '../../api/Coach';
import PersonSelect from '../../components/controls_UI/personSelect/PersonSelect';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { CoachDTO } from '../../types/DTO/Coach';

const CoachContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchCoaches: Function;
  editCoach?: CoachDTO | null;
}

const CoachContent = ({ closeDrawer, fetchCoaches, editCoach }: Props) => {
  const [selectedPerson, setSelectedPerson] = useState(
    editCoach?.IdPerson ?? ''
  );
  const [jobTitle, setJobTitle] = useState(editCoach?.JobTitle ?? '');
  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const handleOnSave = async () => {
    try {
      if (editCoach) {
        await updateCoach({ IdPerson: editCoach.IdPerson, JobTitle: jobTitle });
      } else {
        await postCoach({
          IdPerson: selectedPerson,
          JobTitle: jobTitle,
        });
      }
      setSnackbar(
        createSnackbarSuccess(
          `${editCoach ? schema.edited : schema.added} ${schema.trainerV2}`
        )
      );
      fetchCoaches();
    } catch (e) {
      handleHttpError(e);
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  const handleOnJobTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJobTitle(event.target.value);
  };
  const {
    language: { schema },
  } = useLanguage();

  return (
    <CoachContentStyle>
      <PersonSelect value={selectedPerson} onChange={setSelectedPerson} />
      <TextField
        label={schema.professionalTitle}
        name="jobTitle"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={jobTitle}
        onChange={handleOnJobTitleChange}
      />

      <Button
        disabled={!Boolean(jobTitle) || !Boolean(selectedPerson)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        {schema.save}
      </Button>
    </CoachContentStyle>
  );
};

export default CoachContent;
