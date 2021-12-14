import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { postParticipation } from 'api/Participation';
import EmployeeSeelect from 'components/controls_UI/EmployeeSeelect';
import styled from 'styled-components';
import { useFormikParticipation } from './useFormikParticipation';

const ParticipationFormStyled = styled.div``;

interface ParticipationFormProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  IdEducation: string;
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
  IdEducation,
}: ParticipationFormProps) => {
  const formik = useFormikParticipation({
    initialValues: EMPTY_PARTICIPATION,
    onSubmit: async (values) => {
      try {
        await postParticipation({ ...values, IdEducation });
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
  return (
    <ParticipationFormStyled>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dodaj uczestnika</DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <EmployeeSeelect
            value={formik.values.IdPerson}
            onChange={handleChangeEmployee}
          />
          <TextField
            label="Data rejestracji"
            name="DateOfRegistration"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.DateOfRegistration}
            onChange={formik.handleChange}
          />
          <TextField
            label="Data zakończenia"
            name="EndDate"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.EndDate}
            onChange={formik.handleChange}
          />
          <TextField
            margin="dense"
            name="CertificateOfCompletion"
            label="Nazwa certyfikatu"
            type="text"
            fullWidth
            value={formik.values.CertificateOfCompletion}
            onChange={formik.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </ParticipationFormStyled>
  );
};
