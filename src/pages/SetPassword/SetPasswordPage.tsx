import { Button } from '@material-ui/core';
import { postChangePassword } from 'api/Password';
import FormikPassword from 'components/controls_UI/formik/FormikPassword';
import { useSnackbar } from 'providers/NotificationContext';
import Lottie from 'react-lottie-player';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import lottieJson from '../../animations/Secure.json';
import { LanguagePanel } from '../../components/LanguagePanel';
import { useLanguage } from '../../providers/LanguageProvider';
import { useTheme } from '../../providers/ThemeContext';
import { useFormikSetPassword } from './useFormikSetPassword';

const SetPasswordPageStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  .form-section {
    display: grid;
    place-items: center;
    grid-template-rows: 100px 1fr;
    background-color: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.primaryColor};
  }

  .form {
    color: ${({ theme }) => theme.primaryBackground};
    background-color: ${({ theme }) => theme.primaryColor};
    width: 400px;
    padding: 36px;
    .header-form {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      grid-column-gap: 16px;
      margin: 24px 0;
    }
    .logo-img {
      width: 180px;
    }

    .submit-btn {
      float: right;
      margin: 16px 0;
    }
  }
`;

const EMPTY_CHANGE_PASSWORD_FORM = {
  password: '',
  confirmPassword: '',
};

const SetPasswordPage = () => {
  const { theme } = useTheme();
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const { setSuccessSnackbar } = useSnackbar();
  const {
    language: { schema },
  } = useLanguage();
  const formik = useFormikSetPassword({
    initialValues: EMPTY_CHANGE_PASSWORD_FORM,
    onSubmit: async ({ password }) => {
      try {
        await postChangePassword('ddd@ddd.pl', password, token);
        setSuccessSnackbar('zmieniono hasło!');
      } catch (e) {
        console.error(e);
      }
    },
  });

  return (
    <SetPasswordPageStyle theme={theme}>
      <section className="form-section">
        <LanguagePanel />
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <div className="header-form">
            <img src={theme.logoSrc} alt="logo" className="logo-img" />
            <h2>{schema.setPassword}</h2>
          </div>

          <FormikPassword
            name="password"
            label={schema.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <FormikPassword
            name="confirmPassword"
            label={schema.confirmPassword}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.errors.confirmPassword}
            touched={formik.touched.confirmPassword}
          />
          <Button className="submit-btn" type="submit">
            {schema.submit}
          </Button>
        </form>
      </section>
      <section>
        <Lottie loop animationData={lottieJson} play />
      </section>
    </SetPasswordPageStyle>
  );
};

export default SetPasswordPage;
