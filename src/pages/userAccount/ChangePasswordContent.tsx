import { Button } from '@material-ui/core';
import { postChangePassword } from 'api/Password';
import FormikPassword from 'components/controls_UI/formik/FormikPassword';
import { useChangePasswordToken } from 'hooks/useChangePasswordToken';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useAuth } from 'providers/AuthProvider';
import { useLanguage } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import styled from 'styled-components';
import { useFormikChangePassword } from './useFormikChangePassword';

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
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const {
    auth: { user },
  } = useAuth();
  const {
    language: { schema },
  } = useLanguage();
  const formik = useFormikChangePassword({
    initialValues: EMPTY_FORM,
    onSubmit: async ({ newPassword }) => {
      try {
        await postChangePassword({
          email: user ? user.Email : null,
          password: newPassword,
          token,
        });
        setSuccessSnackbar('zmieniono hasło!');
        closeDrawer();
      } catch (e) {
        handleHttpError(e);
      }
    },
  });

  return (
    <ChangePasswordContentStyle>
      <FormikPassword
        name="newPassword"
        label={schema.newPassword}
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.errors.newPassword}
        touched={formik.touched.newPassword}
      />
      <FormikPassword
        name="confirmedNewPassword"
        label={schema.confirmNewPassword}
        value={formik.values.confirmedNewPassword}
        onChange={formik.handleChange}
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
