import { Button, TextField } from '@material-ui/core';
import { useAddEducationMutation } from 'api/education/useAddEducationMutation';
import { useUpdateEducationMutation } from 'api/education/useUpdateEducationMutation';
import { useAddTrainingMutation } from 'api/training/useAddTrainingMutation';
import { useUpdateTrainingMutation } from 'api/training/useUpdateTrainingMutation';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import CoachSelect from '../../components/controls_UI/coachSelect/CoachSelect';
import CompanySelect from '../../components/controls_UI/companySelect/CompanySelect';
import SwitchBtn from '../../components/controls_UI/SwitchBtn';
import TopicSelect from '../../components/controls_UI/topicSelect/TopicSelect';
import {
  mapTrainingDTOToEditModel,
  TrainingDTO,
} from '../../types/DTO/Training';
import { useTrainingForm } from './useTrainingForm';

const TrainingContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  IdEducation: '',
  IdTopic: '',
  IdCompany: '',
  IdPerson: '',
  Internal: false,
  DateFrom: '',
  DateTo: '',
  Price: 0,
  PriceAccommodation: 0,
  PriceTransit: 0,
};

interface Props {
  closeDrawer: Function;
  editTraining?: TrainingDTO | null;
}

const TrainingContent = ({ closeDrawer, editTraining }: Props) => {
  const addEducationMutation = useAddEducationMutation();
  const updateEducationMutation = useUpdateEducationMutation();
  const addMutation = useAddTrainingMutation();
  const updateMutation = useUpdateTrainingMutation();
  const trainingForm = useTrainingForm()({
    initialValues: editTraining
      ? mapTrainingDTOToEditModel(editTraining)
      : initialValues,
    onSubmit: async (values) => {
      const education = {
        Price: values.Price,
        PriceAccommodation: values.PriceAccommodation,
        PriceTransit: values.PriceAccommodation,
      };

      const training = {
        IdEducation: values.IdEducation,
        IdTopic: values.IdTopic,
        IdCompany: values.IdCompany,
        IdPerson: values.IdPerson,
        Internal: values.Internal,
        DateFrom: values.DateFrom,
        DateTo: values.DateTo,
      };

      if (editTraining) {
        await updateEducationMutation.mutateAsync({
          ...education,
          IdEducation: values.IdEducation,
        });
        await updateMutation.mutateAsync(training);
      } else {
        const res = await addEducationMutation.mutateAsync(education);
        await addMutation.mutateAsync({
          ...training,
          IdEducation: res.data.IdEducation,
        });
      }
      closeDrawer();
    },
  });

  const schema = useLanguageSchema();

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
        variant="contained"
        color="primary"
        onClick={() => trainingForm.submitForm()}
      >
        {schema.save}
      </Button>
    </TrainingContentStyle>
  );
};

export default TrainingContent;
