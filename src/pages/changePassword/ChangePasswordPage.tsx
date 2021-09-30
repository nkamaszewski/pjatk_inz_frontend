import { Button } from '@material-ui/core';
import { postChangePassword } from 'api/Password';
import FormikPassword from 'components/controls_UI/formik/FormikPassword';
import { useSnackbar } from 'contexts/NotificationContext';
import Lottie from 'react-lottie-player';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import lottieJson from '../../animations/Secure.json';
import FormikTextField from '../../components/controls_UI/formik/FormikTextField';
import { LanguagePanel } from '../../components/LanguagePanel';
import { useLanguage } from '../../contexts/LanguageProvider';
import { useTheme } from '../../contexts/ThemeContext';
import { useFormikChangePassword } from './useFormikChangePassword';

const ChangePasswordPageStyle = styled.div`
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

    .register {
      float: left;
      margin: 22px 0;
      font-size: 12px;

      .register-link {
        margin-left: 4px;
      }

      .register-link:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.primaryHover};
      }
    }
    .submit-btn {
      float: right;
      margin: 16px 0;
    }
  }
`;

const EMPTY_CHANGE_PASSWORD_FORM = {
  email: '',
  password: '',
  confirmPassword: '',
};

const ChangePasswordPage = () => {
  const { theme } = useTheme();
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const { setSuccessSnackbar } = useSnackbar();
  const {
    language: { schema },
  } = useLanguage();
  const formik = useFormikChangePassword({
    initialValues: EMPTY_CHANGE_PASSWORD_FORM,
    onSubmit: async ({ email, password }) => {
      try {
        await postChangePassword(email, password, token);
        setSuccessSnackbar('zmieniono hasło!');
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleOnLogin = () => history.push('/logowanie');
  return (
    <ChangePasswordPageStyle theme={theme}>
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
            <h2>{schema.restorePassword}</h2>
          </div>
          <FormikTextField
            name="email"
            label="email"
            autoFocus={true}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
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
          <p className="register">
            {schema.confirmAccount}
            <span className="register-link" onClick={handleOnLogin}>
              {schema.login}
            </span>
          </p>
          <Button className="submit-btn" type="submit">
            {schema.changePassword}
          </Button>
        </form>
      </section>
      <section>
        <Lottie loop animationData={lottieJson} play />
      </section>
    </ChangePasswordPageStyle>
  );
};

export default ChangePasswordPage;