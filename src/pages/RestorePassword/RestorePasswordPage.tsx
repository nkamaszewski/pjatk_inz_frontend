import { Button } from '@material-ui/core';
import { postRestore } from 'api/Password';
import { useSnackbar } from 'providers/NotificationContext';
import Lottie from 'react-lottie-player';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import lottieJson from '../../animations/Newsletter.json';
import FormikTextField from '../../components/controls_UI/formik/FormikTextField';
import { LanguagePanel } from '../../components/LanguagePanel';
import { useAuth } from '../../providers/AuthProvider';
import { useLanguage } from '../../providers/LanguageProvider';
import { useTheme } from '../../providers/ThemeContext';
import { useFormikRestorePassword } from './useFormikRestorePassword';

const RestorePasswordPageStyle = styled.div`
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

const EMPTY_USER_LOGIN = { email: '', password: '' };

const RestorePasswordPage = () => {
  const { theme } = useTheme();
  const history = useHistory();
  const { setSuccessSnackbar } = useSnackbar();
  const auth = useAuth();
  const {
    language: {
      schema: {
        remindPage: {
          _header: { title },
          _form,
        },
      },
    },
  } = useLanguage();
  const formik = useFormikRestorePassword({
    initialValues: EMPTY_USER_LOGIN,
    onSubmit: async ({ email }) => {
      try {
        await postRestore(email);
        setSuccessSnackbar('Link do zmiany hasła został wysłany na maila.');
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleOnLogin = () => history.push('/logowanie');
  return (
    <RestorePasswordPageStyle theme={theme}>
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
            <h2>{title}</h2>
          </div>
          <FormikTextField
            name="email"
            label={_form.email}
            autoFocus={true}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <p className="register">
            {_form.footer}
            <span className="register-link" onClick={handleOnLogin}>
              {_form.footerLink}
            </span>
          </p>
          <Button className="submit-btn" type="submit">
            {_form.submitBtn}
          </Button>
        </form>
      </section>
      <section>
        <Lottie loop animationData={lottieJson} play />
      </section>
    </RestorePasswordPageStyle>
  );
};

export default RestorePasswordPage;
