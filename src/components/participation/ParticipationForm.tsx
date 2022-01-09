import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { useAddParticipationMutation } from 'api/participation/useAddParticipationMutation';
import { EmployeeSelect } from 'components/controls_UI/employeeSelect/EmployeeSelect';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useParticipationForm } from './useParticipationForm';

interface ParticipationFormProps {
  open: boolean;
  close: () => void;
  IdEducation: string;
}

const initialValues = {
  IdEducation: '',
  IdPerson: '',
  DateOfRegistration: '',
  EndDate: '',
  CertificateOfCompletion: '',
};

export const ParticipationForm = ({
  open,
  close,
  IdEducation,
}: ParticipationFormProps) => {
  const addMutation = useAddParticipationMutation();
  const participationForm = useParticipationForm()({
    initialValues: { ...initialValues, IdEducation },
    onSubmit: async (values) => {
      await addMutation.mutateAsync(values);
      close();
    },
  });

  const schema = useLanguageSchema();

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>{schema.addAParticipant}</DialogTitle>
      <DialogContent
        style={{ width: '500px', display: 'grid', gridRowGap: '16px' }}
      >
        <EmployeeSelect
          value={participationForm.values.IdPerson}
          onChange={(id) => participationForm.setFieldValue('IdPerson', id)}
          name="IdPerson"
          onBlur={participationForm.handleBlur}
          error={participationForm.errors.IdPerson}
          touched={participationForm.touched.IdPerson}
        />
        <FormikTextField
          label={schema.dateOfRegistration}
          name="DateOfRegistration"
          type="date"
          value={participationForm.values.DateOfRegistration}
          onChange={participationForm.handleChange}
          onBlur={participationForm.handleBlur}
          error={participationForm.errors.DateOfRegistration}
          touched={participationForm.touched.DateOfRegistration}
        />
        <FormikTextField
          label={schema.endDate}
          name="EndDate"
          type="date"
          value={participationForm.values.EndDate}
          onChange={participationForm.handleChange}
          onBlur={participationForm.handleBlur}
          error={participationForm.errors.EndDate}
          touched={participationForm.touched.EndDate}
        />
        {/* <TextField
          margin="dense"
          name="CertificateOfCompletion"
          label={schema.theNameOfTheCertificate}
          type="text"
          fullWidth
          value={formik.values.CertificateOfCompletion}
          onChange={formik.handleChange}
        /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          {schema.cancel}
        </Button>
        <Button
          onClick={() => participationForm.handleSubmit()}
          color="primary"
        >
          {schema.add}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
