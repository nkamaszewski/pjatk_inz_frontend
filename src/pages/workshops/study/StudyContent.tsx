import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postCoach } from '../../../api/Coach';
import PersonSelect from '../../../components/controls_UI/PersonSelect';
import UniuversitySelect from '../../../components/controls_UI/UniuversitySelect';

const StudyContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchStudies: Function;
}

const StudyContent = ({ closeDrawer, fetchStudies }: Props) => {
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [universitetId, setUniversitetId] = useState('');

  const handleOnSave = () => {
    // try {
    //   postCoach({
    //     IdPerson: selectedPerson,
    //     JobTitle: jobTitle,
    //   }).then(() => fetchCoaches());
    // } catch (e) {
    //   console.error(e);
    // } finally {
    //   closeDrawer();
    // }
  };

  const handleOnFieldOfStudyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFieldOfStudy(event.target.value);
  };

  return (
    <StudyContentStyle>
      <h3>Dodaj Studia</h3>
      <TextField
        label="Kierunek studiów"
        name="fieldOfStudy"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={fieldOfStudy}
        onChange={handleOnFieldOfStudyChange}
      />

      <UniuversitySelect value={universitetId} onChange={setUniversitetId} />

      <Button
        disabled={!Boolean(fieldOfStudy)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        Zapisz
      </Button>
    </StudyContentStyle>
  );
};

export default StudyContent;
