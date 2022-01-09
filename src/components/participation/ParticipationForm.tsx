import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { EmployeeSelect } from 'components/controls_UI/employeeSelect/EmployeeSelect';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { ParticipationDTO } from 'types/DTO/Participation';
import { useFormikParticipation } from './useFormikParticipation';

interface ParticipationFormProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;

  addParticipation: (
    participation: Omit<ParticipationDTO, 'IdParticipation' | 'IdEducation'>
  ) => Promise<void>;
}

const EMPTY_PARTICIPATION = {
  IdPerson: '',
  DateOfRegistration: '',
  EndDate: '',
  CertificateOfCompletion: '',
};

export const ParticipationForm = ({
  open,
  setOpen,

  addParticipation,
}: ParticipationFormProps) => {
  const formik = useFormikParticipation({
    initialValues: EMPTY_PARTICIPATION,
    onSubmit: async (values) => {
      try {
        await addParticipation(values);
        setOpen(false);
      } catch (e) {}
    },
  });

  const handleOnCancel = () => {
    setOpen(false);
  };
  const handleOnConfirm = () => {
    formik.handleSubmit();
  };

  const handleChangeEmployee = (id: string) => {
    formik.setFieldValue('IdPerson', id);
  };
  const schema = useLanguageSchema();

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{schema.addAParticipant}</DialogTitle>
      <DialogContent
        style={{ width: '500px', display: 'grid', gridRowGap: '16px' }}
      >
        <EmployeeSelect
          value={formik.values.IdPerson}
          onChange={handleChangeEmployee}
        />
        <TextField
          label={schema.dateOfRegistration}
          name="DateOfRegistration"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={formik.values.DateOfRegistration}
          onChange={formik.handleChange}
        />
        <TextField
          label={schema.endDate}
          name="EndDate"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={formik.values.EndDate}
          onChange={formik.handleChange}
        />
        <TextField
          margin="dense"
          name="CertificateOfCompletion"
          label={schema.theNameOfTheCertificate}
          type="text"
          fullWidth
          value={formik.values.CertificateOfCompletion}
          onChange={formik.handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnCancel} color="primary">
          {schema.cancel}
        </Button>
        <Button onClick={handleOnConfirm} color="primary">
          {schema.add}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
