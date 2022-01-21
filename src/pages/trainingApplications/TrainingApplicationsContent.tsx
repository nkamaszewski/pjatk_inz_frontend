import { Button } from '@material-ui/core';
import { useAddApplicationMutation } from 'api/application/useAddApplicationMutation';
import { useUpdateApplicationMutation } from 'api/application/useUpdateApplicationMutation';
import { OtherEducationSelect } from 'components/controls_UI/OtherEducationSelect';
import { RadioButtons } from 'components/controls_UI/RadioButtons';
import StatusSelect from 'components/controls_UI/StatusSelect';
import { formatDate } from 'helpers/formatDate';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import StudySelect from '../../components/controls_UI/studySelect/StudySelect';
import SwitchBtn from '../../components/controls_UI/SwitchBtn';
import TrainingSelect from '../../components/controls_UI/trainingSelect/TrainingSelect';
import { ApplicationForDTO } from '../../types/DTO/ApplicationFor';
import { useTrainingApplicationForm } from './useTrainingApplicationForm';

const EDUCATION_TYPES = [
  { value: 'study', label: 'Studia' },
  { value: 'training', label: 'Kurs' },
  { value: 'other', label: 'Inne' },
];

const TrainingApplicationsContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  educationType: '',
  IdEducation: '',
  IdStatus: '',
  Compatibility: false,
};
interface Props {
  closeDrawer: Function;
  editApplicationFor?: ApplicationForDTO | null;
}

export const TrainingApplicationsContent = ({
  closeDrawer,
  editApplicationFor,
}: Props) => {
  const [educationType, setEducationType] = useState<string>(
    editApplicationFor?.EducationType ?? 'study'
  );
  const addMutation = useAddApplicationMutation();
  const updateMutation = useUpdateApplicationMutation();
  const trainingAppForm = useTrainingApplicationForm()({
    initialValues: editApplicationFor ?? initialValues,
    onSubmit: async (values) => {
      if (editApplicationFor) {
        await updateMutation.mutateAsync({
          ...values,
          IdApplicationFor: editApplicationFor.IdApplicationFor,
          DateOfSubmission: formatDate(new Date()) as string,
        });
      } else {
        await addMutation.mutateAsync({
          ...values,
          DateOfSubmission: formatDate(new Date()) as string,
        });
      }
      closeDrawer();
    },
  });

  const schema = useLanguageSchema();

  return (
    <TrainingApplicationsContentStyle>
      <RadioButtons
        options={EDUCATION_TYPES}
        value={educationType}
        onChange={(v) => {
          trainingAppForm.setFieldValue('IdEducation', '');
          setEducationType(v);
        }}
      />

      {educationType === 'study' && (
        <StudySelect
          value={trainingAppForm.values.IdEducation}
          name="IdEducation"
          onChange={(id) => trainingAppForm.setFieldValue('IdEducation', id)}
          onBlur={trainingAppForm.handleBlur}
          error={trainingAppForm.errors.IdEducation}
          touched={trainingAppForm.touched.IdEducation}
        />
      )}
      {educationType === 'training' && (
        <TrainingSelect
          value={trainingAppForm.values.IdEducation}
          name="IdEducation"
          onChange={(id) => trainingAppForm.setFieldValue('IdEducation', id)}
          onBlur={trainingAppForm.handleBlur}
          error={trainingAppForm.errors.IdEducation}
          touched={trainingAppForm.touched.IdEducation}
        />
      )}
      {educationType === 'other' && (
        <OtherEducationSelect
          value={trainingAppForm.values.IdEducation}
          name="IdEducation"
          onChange={(id) => trainingAppForm.setFieldValue('IdEducation', id)}
          onBlur={trainingAppForm.handleBlur}
          error={trainingAppForm.errors.IdEducation}
          touched={trainingAppForm.touched.IdEducation}
        />
      )}

      <SwitchBtn
        value={trainingAppForm.values.Compatibility}
        onChange={(checked) =>
          trainingAppForm.setFieldValue('Compatibility', checked)
        }
        name="Compatibility"
        label={schema.isItInLineWithTheTermsOfReference}
      />

      <StatusSelect
        value={trainingAppForm.values.IdStatus}
        name="IdStatus"
        onChange={(id) => trainingAppForm.setFieldValue('IdStatus', id)}
        onBlur={trainingAppForm.handleBlur}
        error={trainingAppForm.errors.IdStatus}
        touched={trainingAppForm.touched.IdStatus}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => trainingAppForm.handleSubmit()}
      >
        {schema.save}
      </Button>
    </TrainingApplicationsContentStyle>
  );
};
