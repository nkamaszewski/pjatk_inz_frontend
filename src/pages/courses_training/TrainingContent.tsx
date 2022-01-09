import { Button } from '@material-ui/core';
import { useAddEducationMutation } from 'api/education/useAddEducationMutation';
import { useUpdateEducationMutation } from 'api/education/useUpdateEducationMutation';
import { useAddTrainingMutation } from 'api/training/useAddTrainingMutation';
import { useUpdateTrainingMutation } from 'api/training/useUpdateTrainingMutation';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import CoachSelect from '../../components/controls_UI/coachSelect/CoachSelect';
import { CompanySelect } from '../../components/controls_UI/companySelect/CompanySelect';
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
      <TopicSelect
        value={trainingForm.values.IdTopic}
        onChange={(id) => trainingForm.setFieldValue('IdTopic', id)}
        name="IdTopic"
        onBlur={trainingForm.handleBlur}
        error={trainingForm.errors.IdTopic}
        touched={trainingForm.touched.IdTopic}
      />

      <CompanySelect
        value={trainingForm.values.IdCompany}
        onChange={(id) => trainingForm.setFieldValue('IdCompany', id)}
        name="IdCompany"
        onBlur={trainingForm.handleBlur}
        error={trainingForm.errors.IdCompany}
        touched={trainingForm.touched.IdCompany}
      />

      <CoachSelect
        value={trainingForm.values.IdPerson}
        onChange={(id) => trainingForm.setFieldValue('IdPerson', id)}
        name="IdPerson"
        onBlur={trainingForm.handleBlur}
        error={trainingForm.errors.IdPerson}
        touched={trainingForm.touched.IdPerson}
      />
      <SwitchBtn
        value={trainingForm.values.Internal}
        onChange={(checked) => trainingForm.setFieldValue('Internal', checked)}
        name="Internal"
        onBlur={trainingForm.handleBlur}
        error={trainingForm.errors.Internal}
        touched={trainingForm.touched.Internal}
        label={schema.internalTraining}
      />

      <FormikTextField
        label={schema.dateFrom}
        name="DateFrom"
        type="date"
        value={trainingForm.values.DateFrom}
        onChange={trainingForm.handleChange}
        onBlur={trainingForm.handleBlur}
        error={trainingForm.errors.DateFrom}
        touched={trainingForm.touched.DateFrom}
      />

      <FormikTextField
        label={schema.dateTo}
        name="DateTo"
        type="date"
        value={trainingForm.values.DateTo}
        onChange={trainingForm.handleChange}
        onBlur={trainingForm.handleBlur}
        error={trainingForm.errors.DateTo}
        touched={trainingForm.touched.DateTo}
      />

      <FormikTextField
        label={schema.price}
        name="Price"
        type="number"
        value={trainingForm.values.Price}
        onChange={trainingForm.handleChange}
        onBlur={trainingForm.handleBlur}
        error={trainingForm.errors.Price}
        touched={trainingForm.touched.Price}
      />
      <FormikTextField
        label={schema.accommodationPrice}
        name="PriceAccommodation"
        type="number"
        value={trainingForm.values.PriceAccommodation}
        onChange={trainingForm.handleChange}
        onBlur={trainingForm.handleBlur}
        error={trainingForm.errors.PriceAccommodation}
        touched={trainingForm.touched.PriceAccommodation}
      />
      <FormikTextField
        label="price transit"
        name="PriceTransit"
        type="number"
        value={trainingForm.values.PriceTransit}
        onChange={trainingForm.handleChange}
        onBlur={trainingForm.handleBlur}
        error={trainingForm.errors.PriceTransit}
        touched={trainingForm.touched.PriceTransit}
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
