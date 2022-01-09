import { Button } from '@material-ui/core';
import FormikPassword from 'components/controls_UI/formik/FormikPassword';
import { useChangePasswordToken } from 'hooks/useChangePasswordToken';
import { useAuth } from 'providers/AuthProvider';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { useChangePassowrdForm } from './useChangePasswordForm';
import { useChangePasswordMutation } from './useChangePasswordMutation';

const ChangePasswordContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const EMPTY_FORM = { newPassword: '', confirmedNewPassword: '' };

interface Props {
  closeDrawer: Function;
}

const ChangePasswordContent = ({ closeDrawer }: Props) => {
  const token = useChangePasswordToken();
  const changePasswordMutation = useChangePasswordMutation();
  const {
    auth: { user },
  } = useAuth();
  const schema = useLanguageSchema();
  const formik = useChangePassowrdForm()({
    initialValues: EMPTY_FORM,
    onSubmit: async ({ newPassword }) => {
      await changePasswordMutation.mutateAsync({
        email: user ? user.Email : null,
        password: newPassword,
        token,
      });

      closeDrawer();
    },
  });

  return (
    <ChangePasswordContentStyle>
      <FormikPassword
        name="newPassword"
        label={schema.newPassword}
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.newPassword}
        touched={formik.touched.newPassword}
      />
      <FormikPassword
        name="confirmedNewPassword"
        label={schema.confirmNewPassword}
        value={formik.values.confirmedNewPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.confirmedNewPassword}
        touched={formik.touched.confirmedNewPassword}
      />

      <Button variant="contained" color="primary" onClick={formik.submitForm}>
        Zapisz
      </Button>
    </ChangePasswordContentStyle>
  );
};

export default ChangePasswordContent;
