import { Button } from '@material-ui/core';
import { useAddAdditionalApplicationMutation } from 'api/additionalApplication/useAddAdditionalApplicationMutation';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { ReasonForRefundSelect } from 'components/controls_UI/ReasonForRefundSelect';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import ApplicationForSelect from '../../components/controls_UI/applicationForSelect/ApplicationForSelect';
import { useAddtionalApplicationsForm } from './useAddtionalApplicationsForm';

const AddtionalApplicationsContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  Id: '',
  Name: '',
  DateOfSubmission: '',
};
interface Props {
  closeDrawer: Function;
  editAdditionalApplication?: any | null;
}

export const AddtionalApplicationsContent = ({
  closeDrawer,
  editAdditionalApplication,
}: Props) => {
  const addMutation = useAddAdditionalApplicationMutation();
  const additionalApplicationForm = useAddtionalApplicationsForm()({
    // initialValues: editAdditionalApplication ?? initialValues,
    initialValues,
    onSubmit: async (values) => {
      if (editAdditionalApplication) {
      } else {
        await addMutation.mutateAsync(values);
      }
      closeDrawer();
    },
  });

  const schema = useLanguageSchema();

  return (
    <AddtionalApplicationsContentStyle>
      <ApplicationForSelect
        value={additionalApplicationForm.values.Id}
        onChange={(id) => additionalApplicationForm.setFieldValue('Id', id)}
        name="Id"
        onBlur={additionalApplicationForm.handleBlur}
        error={additionalApplicationForm.errors.Id}
        touched={additionalApplicationForm.touched.Id}
      />
      <ReasonForRefundSelect
        value={additionalApplicationForm.values.Name}
        onChange={(id) => additionalApplicationForm.setFieldValue('Name', id)}
        name="Name"
        onBlur={additionalApplicationForm.handleBlur}
        error={additionalApplicationForm.errors.Name}
        touched={additionalApplicationForm.touched.Name}
      />
      <FormikTextField
        label={schema.dateOfSubmission}
        name="DateOfSubmission"
        type="date"
        value={additionalApplicationForm.values.DateOfSubmission}
        onChange={additionalApplicationForm.handleChange}
        onBlur={additionalApplicationForm.handleBlur}
        error={additionalApplicationForm.errors.DateOfSubmission}
        touched={additionalApplicationForm.touched.DateOfSubmission}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => additionalApplicationForm.handleSubmit()}
      >
        {schema.save}
      </Button>
    </AddtionalApplicationsContentStyle>
  );
};
