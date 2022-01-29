import { Button } from '@material-ui/core';
import Lottie from 'react-lottie-player';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import lottieJson from '../../animations/Security.json';
import FormikPassword from '../../components/controls_UI/formik/FormikPassword';
import { FormikTextField } from '../../components/controls_UI/formik/FormikTextField';
import { LanguagePanel } from '../../components/LanguagePanel';
import { useAuth } from '../../providers/AuthProvider';
import { useLanguage } from '../../providers/LanguageProvider';
import { useTheme } from '../../providers/ThemeContext';
import { useFormikLogin } from './useFormikLogin';

const LoginPageStyle = styled.div`
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

      p {
        font-size: 12px;
        margin: 16px 0;
      }

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

const LoginPage = () => {
  const { theme } = useTheme();
  const history = useHistory();
  const auth = useAuth();
  const {
    language: {
      schema: {
        loginPage: {
          _header: { title },
          _form,
        },
      },
    },
  } = useLanguage();
  const formik = useFormikLogin({
    initialValues: EMPTY_USER_LOGIN,
    onSubmit: async ({ email, password }) => {
      const isAuthenticated = await auth.logIn(email, password);
      if (isAuthenticated) {
        history.push('/pracownicy');
      }
    },
  });

  const handleOnRegister = () => history.push('/rejestracja');
  const handleOnRemind = () => history.push('/przypomnij-haslo');
  return (
    <LoginPageStyle theme={theme}>
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
          <FormikPassword
            name="password"
            label={_form.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <div className="register">
            <p>
              {_form.footer}
              <span className="register-link" onClick={handleOnRegister}>
                {_form.footerLink}
              </span>
            </p>
            <p>
              {_form.footerRemind}
              <span className="register-link" onClick={handleOnRemind}>
                {_form.footerRemindLink}
              </span>
            </p>
          </div>
          <Button className="submit-btn" type="submit">
            {_form.submitBtn}
          </Button>
        </form>
      </section>
      <section>
        <Lottie
          loop
          animationData={lottieJson}
          play
          className="lottie-animation"
        />
      </section>
    </LoginPageStyle>
  );
};

export default LoginPage;
