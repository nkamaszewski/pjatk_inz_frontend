import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postEducation, updateEducation } from '../../api/Education';
import { postStudy, updateStudy } from '../../api/Study';
import GraduateDegreeSelect from '../../components/controls_UI/GraduateDegreeSelect';
import StudyModeSelect from '../../components/controls_UI/StudyModeSelect';
import UniuversitySelect from '../../components/controls_UI/UniuversitySelect';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../contexts/NotificationContext';
import { StudiesListDTO } from '../../types/DTO/Study';

const StudyContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchStudies: Function;
  editStudy?: StudiesListDTO | null;
}

const StudyContent = ({ closeDrawer, fetchStudies, editStudy }: Props) => {
  const [fieldOfStudy, setFieldOfStudy] = useState(
    editStudy?.FieldOfStudy ?? ''
  );
  const [universitetId, setUniversitetId] = useState(
    editStudy?.IdUniversity ?? ''
  );
  const [studyModeId, setStudyModeId] = useState(editStudy?.IdStudyMode ?? '');
  const [graduateDegreeId, setGraduateDegreeId] = useState(
    editStudy?.studysGraduateDegree.IdGraduateDegree ?? ''
  );
  const [education, setEducation] = useState({
    Price: editStudy?.studyEducation.Price ?? 0,
    PriceAccommodation: editStudy?.studyEducation.PriceAccommodation ?? 0,
    PriceTransit: editStudy?.studyEducation.PriceTransit ?? 0,
  });
  const { setSnackbar } = useSnackbar();

  const handleOnSave = async () => {
    try {
      if (editStudy) {
        await updateEducation({
          IdEducation: editStudy.IdEducation,
          ...education,
        });
        await updateStudy({
          IdEducation: editStudy.IdEducation,
          FieldOfStudy: fieldOfStudy,
          IdUniversity: universitetId,
          IdStudyMode: studyModeId,
          IdGraduateDegree: graduateDegreeId,
        });
        setSnackbar(createSnackbarSuccess('Studia zostały wyedytowane'));
      } else {
        const response = await postEducation(education);
        const { IdEducation } = response.data;
        await postStudy({
          IdEducation,
          FieldOfStudy: fieldOfStudy,
          IdUniversity: universitetId,
          IdStudyMode: studyModeId,
          IdGraduateDegree: graduateDegreeId,
        });
        setSnackbar(createSnackbarSuccess('Dodano studia'));
      }
      fetchStudies();
    } catch (e) {
      setSnackbar(createSnackbarError('Operacja nie powiodła się!'));
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
