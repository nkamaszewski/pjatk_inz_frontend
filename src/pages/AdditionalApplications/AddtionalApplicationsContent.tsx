import { Button } from '@material-ui/core';
import { useAddAdditionalApplicationMutation } from 'api/additionalApplication/useAddAdditionalApplicationMutation';
import { useUpdateApplicationsForReasonMutation } from 'api/applicationForReason/useUpdateApplicationsForReasonMutation';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { ReasonForRefundSelect } from 'components/controls_UI/ReasonForRefundSelect';
import StatusSelect from 'components/controls_UI/StatusSelect';
import { formatDate } from 'helpers/formatDate';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { ApplicationForRefundEditModel } from 'types/DTO/ApplicationForRefund';
import ApplicationForSelect from '../../components/controls_UI/applicationForSelect/ApplicationForSelect';
import { useAddtionalApplicationsForm } from './useAddtionalApplicationsForm';

const AddtionalApplicationsContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  IdApplicationFor: '',
  IdReasonForRefund: '',
  IdStatus: '',
  DateOfSubmission: '',
};
interface Props {
  closeDrawer: Function;
  editAdditionalApplication?: ApplicationForRefundEditModel | null;
  IdApplicationFor?: string | undefined;
}

export const AddtionalApplicationsContent = ({
  closeDrawer,
  editAdditionalApplication,
  IdApplicationFor,
}: Props) => {
  const addMutation = useAddAdditionalApplicationMutation();
  const editMutation = useUpdateApplicationsForReasonMutation();
  const additionalApplicationForm = useAddtionalApplicationsForm()({
    initialValues: IdApplicationFor
      ? { ...initialValues, IdApplicationFor }
      : editAdditionalApplication
      ? {
          ...editAdditionalApplication,
          DateOfSubmission: formatDate(
            editAdditionalApplication.DateOfSubmission
          ) as string,
        }
      : initialValues,
    onSubmit: async (values) => {
      if (editAdditionalApplication) {
        await editMutation.mutateAsync({
          IdApplicationForReasons:
            editAdditionalApplication.IdApplicationForReasons,
          IdReasonForRefund: values.IdReasonForRefund,
          IdStatus: values.IdStatus,
          DateOfSubmission: values.DateOfSubmission,
        });
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
        value={additionalApplicationForm.values.IdApplicationFor}
        onChange={(id) =>
          additionalApplicationForm.setFieldValue('IdApplicationFor', id)
        }
        name="IdApplicationFor"
        onBlur={additionalApplicationForm.handleBlur}
        error={additionalApplicationForm.errors.IdApplicationFor}
        touched={additionalApplicationForm.touched.IdApplicationFor}
        disabled={
          Boolean(IdApplicationFor) || Boolean(editAdditionalApplication)
        }
      />
      <ReasonForRefundSelect
        value={additionalApplicationForm.values.IdReasonForRefund}
        onChange={(id) =>
          additionalApplicationForm.setFieldValue('IdReasonForRefund', id)
        }
        name="IdReasonForRefund"
        onBlur={additionalApplicationForm.handleBlur}
        error={additionalApplicationForm.errors.IdReasonForRefund}
        touched={additionalApplicationForm.touched.IdReasonForRefund}
      />
      <StatusSelect
        value={additionalApplicationForm.values.IdStatus}
        onChange={(id) =>
          additionalApplicationForm.setFieldValue('IdStatus', id)
        }
        name="IdStatus"
        onBlur={additionalApplicationForm.handleBlur}
        error={additionalApplicationForm.errors.IdStatus}
        touched={additionalApplicationForm.touched.IdStatus}
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
