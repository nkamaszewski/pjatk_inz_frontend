import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postCoach } from '../../api/Coach';
import PersonSelect from '../../components/controls_UI/PersonSelect';

const CoachContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchCoaches: Function;
}

const CoachContent = ({ closeDrawer, fetchCoaches }: Props) => {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleOnSave = () => {
    try {
      postCoach({
        IdPerson: selectedPerson,
        JobTitle: jobTitle,
      }).then(() => fetchCoaches());
    } catch (e) {
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

  return (
    <CoachContentStyle>
      <h3>Dodaj Szkoleniowca</h3>

      <PersonSelect value={selectedPerson} onChange={setSelectedPerson} />
      <TextField
        label="Tytuł zawodowy"
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
        Zapisz
      </Button>
    </CoachContentStyle>
  );
};

export default CoachContent;
