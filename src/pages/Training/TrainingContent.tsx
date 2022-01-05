import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postEducation, updateEducation } from '../../api/Education';
import { postTraining, updateTraining } from '../../api/Training';
import CoachSelect from '../../components/controls_UI/coachSelect/CoachSelect';
import CompanySelect from '../../components/controls_UI/companySelect/CompanySelect';
import SwitchBtn from '../../components/controls_UI/SwitchBtn';
import TopicSelect from '../../components/controls_UI/TopicSelect';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { formatDate } from '../../helpers/formatDate';
import { TrainingDTO } from '../../types/DTO/Training';
import { useLanguage } from 'providers/LanguageProvider';
import { useHandleHttpError } from 'hooks/useHandleHttpError';

const TrainingContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchTrainings: Function;
  editTraining?: TrainingDTO | null;
}

const TrainingContent = ({
  closeDrawer,
  fetchTrainings,
  editTraining,
}: Props) => {
  const [idTopic, setIdTopic] = useState(
    editTraining?.trainingTopic.IdTopic ?? ''
  );
  const [idCompany, setIdCompany] = useState(
    editTraining?.trainingCompany.IdCompany ?? ''
  );
  const [idPerson, setIdPerson] = useState(
    editTraining?.trainingCoach.IdPerson ?? ''
  );
  const [internal, setInternal] = useState(editTraining?.Internal ?? false);
  const [dateFrom, setDateFrom] = useState(
    formatDate(editTraining?.DateFrom) ?? ''
  );
  const [dateTo, setDateTo] = useState(formatDate(editTraining?.DateTo) ?? '');
  const [education, setEducation] = useState({
    Price: editTraining?.trainingEducation.Price ?? 0,
    PriceAccommodation: editTraining?.trainingEducation.PriceAccommodation ?? 0,
    PriceTransit: editTraining?.trainingEducation.PriceTransit ?? 0,
  });

  const { setSnackbar } = useSnackbar();
	const handleHttpError = useHandleHttpError();

  const handleOnSave = async () => {
    try {
      if (editTraining) {
        await updateEducation({
          ...education,
          IdEducation: editTraining.trainingEducation.IdEducation,
        });

        await updateTraining({
          IdEducation: editTraining.trainingEducation.IdEducation,
          IdTopic: idTopic,
          IdCompany: idCompany,
          IdPerson: idPerson,
          Internal: internal,
          DateFrom: dateFrom,
          DateTo: dateTo,
        });
        setSnackbar(createSnackbarSuccess('Edytowano Kurs'));
        closeDrawer();
      } else {
        const response = await postEducation(education);
        const { IdEducation } = response.data;
        await postTraining({
          IdEducation,
          IdTopic: idTopic,
          IdCompany: idCompany,
          IdPerson: idPerson,
          Internal: internal,
          DateFrom: dateFrom,
          DateTo: dateTo,
        });
        setSnackbar(createSnackbarSuccess('Dodano Kurs'));
        closeDrawer();
      }
      fetchTrainings();
    } catch (e) {
			handleHttpError(e);
      console.error(e);
    }
  };

  const handleOnEducationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateFromChange = (e: any) => {
    setDateFrom(e.target.value);
  };
  const handleDateToChange = (e: any) => {
    setDateTo(e.target.value);
  };
  const {
    language: { schema },
  } = useLanguage();

  return (
    <TrainingContentStyle>
      <TopicSelect value={idTopic} onChange={setIdTopic} />

      <CompanySelect value={idCompany} onChange={setIdCompany} />

      <CoachSelect value={idPerson} onChange={setIdPerson} />
      <SwitchBtn
        value={internal}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInternal(event.target.checked)
        }
        label={schema.internalTraining}
      />

      <TextField
        label={schema.dateFrom}
        name="dateFrom"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={dateFrom}
        onChange={handleDateFromChange}
      />
      <TextField
        label={schema.dateTo}
        name="dateTo"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={dateTo}
        onChange={handleDateToChange}
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
        // disabled={!Boolean(fieldOfStudy)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        {schema.save}
      </Button>
    </TrainingContentStyle>
  );
};

export default TrainingContent;
