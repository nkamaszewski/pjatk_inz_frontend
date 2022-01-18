import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { useAddParticipationMutation } from 'api/participation/useAddParticipationMutation';
import { useUpdateParticipationMutation } from 'api/participation/useUpdateParticipationMutation';
import { EmployeeSelect } from 'components/controls_UI/employeeSelect/EmployeeSelect';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { UploadFileBtn } from 'components/controls_UI/UploadFileBtn';
import { formatDate } from 'helpers/formatDate';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { ParticipationDTO } from 'types/DTO/Participation';
import { useParticipationForm } from './useParticipationForm';

interface ParticipationFormProps {
  open: boolean;
  close: () => void;
  IdEducation: string;
  editedParticipation?: ParticipationDTO | null;
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
  editedParticipation,
}: ParticipationFormProps) => {
  const addMutation = useAddParticipationMutation();
  const updateMutation = useUpdateParticipationMutation();
  const participationForm = useParticipationForm()({
    initialValues: editedParticipation
      ? {
          ...editedParticipation,
          DateOfRegistration: formatDate(
            editedParticipation.DateOfRegistration
          ) as string,
          EndDate: editedParticipation.EndDate
            ? (formatDate(editedParticipation.EndDate) as string)
            : '',
          CertificateOfCompletion: '',
        }
      : { ...initialValues, IdEducation },
    onSubmit: async (values) => {
      if (editedParticipation) {
        await updateMutation.mutateAsync({
          ...values,
          CertificateOfCompletion:
            values.CertificateOfCompletion ??
            editedParticipation.CertificateOfCompletion,
          IdParticipation: editedParticipation.IdParticipation,
        });
      } else {
        await addMutation.mutateAsync(values);
      }
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
        <UploadFileBtn
          label="dodaj ceryfikat"
          value={participationForm.values.CertificateOfCompletion as any}
          name="CertificateOfCompletion"
          onChange={(file: File) => {
            participationForm.setFieldValue('CertificateOfCompletion', file);
          }}
          onBlur={participationForm.handleBlur}
          error={participationForm.errors.CertificateOfCompletion}
          touched={participationForm.touched.CertificateOfCompletion}
        />
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
