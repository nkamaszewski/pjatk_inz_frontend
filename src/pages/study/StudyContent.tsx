import { Button, TextField } from '@material-ui/core';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { postEducation, updateEducation } from '../../api/Education';
import { postStudy, updateStudy } from '../../api/Study';
import GraduateDegreeSelect from '../../components/controls_UI/graduateDegreeSelect/GraduateDegreeSelect';
import StudyModeSelect from '../../components/controls_UI/studyModeSelect/StudyModeSelect';
import UniuversitySelect from '../../components/controls_UI/universitySelect/UniversitySelect';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
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
  const handleHttpError = useHandleHttpError();

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
        setSnackbar(createSnackbarSuccess(schema.theStudiesHaveBeenEdited));
        closeDrawer();
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
        setSnackbar(createSnackbarSuccess(schema.studiesAdded));
        closeDrawer();
      }
      fetchStudies();
    } catch (e) {
      handleHttpError(e);
      console.error(e);
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
  const {
    language: { schema },
  } = useLanguage();

  return (
    <StudyContentStyle>
      <TextField
        label={schema.fieldOfStudy}
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
        label={schema.price}
        name="Price"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.Price}
        onChange={handleOnEducationChange}
      />

      <TextField
        label={schema.accommodationPrice}
        name="PriceAccommodation"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.PriceAccommodation}
        onChange={handleOnEducationChange}
      />

      <TextField
        label={schema.theCostOfTransport}
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
        {schema.save}
      </Button>
    </StudyContentStyle>
  );
};

export default StudyContent;
