import { Button, TextField } from '@material-ui/core';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { postGroup } from '../../api/Group';
import TrainingSelect from '../../components/controls_UI/trainingSelect/TrainingSelect';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';

const GroupContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchGroups: Function;
}

const GroupContent = ({ closeDrawer, fetchGroups }: Props) => {
  const [name, setName] = useState('');
  const [numberOfPerson, setNumberOfPerson] = useState(0);
  const [idEducation, setIdEducation] = useState('0');
  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const handleOnSave = async () => {
    try {
      await postGroup({
        Name: name,
        NumberOfPerson: numberOfPerson,
        IdEducation: idEducation,
      });
      setSnackbar(createSnackbarSuccess('Dodano grupę'));
      closeDrawer();
      fetchGroups();
    } catch (e) {
      handleHttpError(e);
      console.error(e);
    }
  };
  const schema = useLanguageSchema();

  return (
    <GroupContentStyle>
      <TextField
        label={schema.name}
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
      />
      <TextField
        label={schema.numberOfPeople}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={numberOfPerson}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNumberOfPerson(Number(event.target.value))
        }
      />

      <TrainingSelect value={idEducation} onChange={setIdEducation} />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        {schema.save}
      </Button>
    </GroupContentStyle>
  );
};

export default GroupContent;
