import { Button } from '@material-ui/core';
import Lottie from 'react-lottie-player';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import lottieJson from '../../animations/Security.json';
import CustomFormikTextField from '../../components/controls_UI/formik/CustomFormikTextField';
import { useAuth } from '../../contexts/AuthProvider';
import { useTheme } from '../../contexts/ThemeContext';
import { useFormikLogin } from './useFormikLogin';

const LoginPageStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  .form-section,
  .login-panel {
    background-color: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.primaryColor};
  }
  .form-section {
    display: grid;
    place-items: center;
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

const EMPTY_USER_LOGIN = { email: '', password: '' };

const LoginPage = () => {
  const { theme } = useTheme();
  const history = useHistory();
  const auth = useAuth();
  const formik = useFormikLogin({
    initialValues: EMPTY_USER_LOGIN,
    onSubmit: async ({ email, password }) => {
      console.log('onSubmit', email, password);

      const isAuthenticated = await auth.logIn(email, password);
      if (isAuthenticated) {
        history.push('/pracownicy');
      }
    },
  });
  return (
    <LoginPageStyle theme={theme}>
      <section className="form-section">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <div className="header-form">
            <img src={theme.logoSrc} alt="logo" className="logo-img" />
            <h2>Logowanie</h2>
          </div>
          <CustomFormikTextField
            name="email"
            label="Email"
            autoFocus={true}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <CustomFormikTextField
            name="password"
            label="Hasło"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <Button className="submit-btn" type="submit">
            Zaloguj
          </Button>
        </form>
      </section>
      <section>
        <Lottie loop animationData={lottieJson} play />
      </section>
    </LoginPageStyle>
  );
};

export default LoginPage;
