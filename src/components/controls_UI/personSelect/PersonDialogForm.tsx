import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { DialogActionsBtn } from 'components/DialogActionsBtn';
import { useLanguage } from 'providers/LanguageProvider';
import { useEffect } from 'react';
import { FormikTextField } from '../formik/FormikTextField';
import { usePersonForm } from './usePersonForm';
import { usePersonMutation } from './usePersonMutation';

const initialValues = {
  FirstName: '',
  LastName: '',
  Email: '',
  Phone: '',
};

interface PersonDialogFormProps {
  open: boolean;
  onClose: () => void;
  onCancel: () => void;
  onSuccessSubmit: (id: string) => void;
}

export const PersonDialogForm = ({
  open,
  onClose,
  onCancel,
  onSuccessSubmit,
}: PersonDialogFormProps) => {
  const personMutation = usePersonMutation();
  const personForm = usePersonForm()({
    initialValues,
    onSubmit: async (values) => {
      const person = await personMutation.mutateAsync(values);
      onSuccessSubmit(person.data.IdPerson);
      onClose();
    },
  });

  const {
    language: { schema },
  } = useLanguage();

  const onConfirm = () => {
    personForm.submitForm();
  };

  useEffect(() => {
    if (!open) {
      personForm.resetForm();
    }

    // eslint-disable-next-line
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{schema.addAPersonToTheDatabase}</DialogTitle>
      <DialogContent>
        <FormikTextField
          autoFocus
          name="FirstName"
          type="text"
          label={schema.firstName}
          value={personForm.values.FirstName}
          onChange={personForm.handleChange}
          onBlur={personForm.handleBlur}
          error={personForm.errors.FirstName}
          touched={personForm.touched.FirstName}
        />
        <FormikTextField
          name="LastName"
          type="text"
          label={schema.lastName}
          value={personForm.values.LastName}
          onChange={personForm.handleChange}
          onBlur={personForm.handleBlur}
          error={personForm.errors.LastName}
          touched={personForm.touched.LastName}
        />
        <FormikTextField
          name="Email"
          type="email"
          label={schema.emailInForm}
          value={personForm.values.Email}
          onChange={personForm.handleChange}
          onBlur={personForm.handleBlur}
          error={personForm.errors.Email}
          touched={personForm.touched.Email}
        />
        <FormikTextField
          name="Phone"
          type="number"
          label={schema.phoneInForm}
          value={personForm.values.Phone}
          onChange={personForm.handleChange}
          onBlur={personForm.handleBlur}
          error={personForm.errors.Phone}
          touched={personForm.touched.Phone}
        />
      </DialogContent>
      <DialogActionsBtn onConfirm={onConfirm} onCancel={onCancel} />
    </Dialog>
  );
};
