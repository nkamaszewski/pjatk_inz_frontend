import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postEducation } from '../../api/Education';
import { postStudy } from '../../api/Study';
import GraduateDegreeSelect from '../../components/controls_UI/GraduateDegreeSelect';
import StudyModeSelect from '../../components/controls_UI/StudyModeSelect';
import UniuversitySelect from '../../components/controls_UI/UniuversitySelect';

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
  const [studyModeId, setStudyModeId] = useState('');
  const [graduateDegreeId, setGraduateDegreeId] = useState('');
  const [education, setEducation] = useState({
    Price: 0,
    PriceAccommodation: 0,
    PriceTransit: 0,
  });

  const handleOnSave = () => {
    try {
      postEducation(education).then((res) => {
        const { IdEducation } = res.data;
        postStudy({
          IdEducation,
          FieldOfStudy: fieldOfStudy,
          IdUniversity: universitetId,
          IdStudyMode: studyModeId,
          IdGraduateDegree: graduateDegreeId,
        }).then(() => fetchStudies());
      });
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  const handleOnFieldOfStudyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFieldOfStudy(event.target.value);
  };

  const handleOnEducationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <StudyContentStyle>
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

      <StudyModeSelect value={studyModeId} onChange={setStudyModeId} />

      <GraduateDegreeSelect
        value={graduateDegreeId}
        onChange={setGraduateDegreeId}
      />

      <TextField
        label="Cena"
        name="Price"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.Price}
        onChange={handleOnEducationChange}
      />

      <TextField
        label="Cena zakwaterowania"
        name="PriceAccommodation"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.PriceAccommodation}
        onChange={handleOnEducationChange}
      />

      <TextField
        label="Koszt transportu"
        name="PriceTransit"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.PriceTransit}
        onChange={handleOnEducationChange}
      />

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
