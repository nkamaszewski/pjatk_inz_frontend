import { useContext } from 'react';
import Lottie from 'react-lottie-player';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';
import lottieJson from '../../animations/Security.json';
import { useFormikLogin } from './useFormikLogin';
import CustomFormikTextField from '../../components/controls_UI/formik/CustomFormikTextField';
import { Button } from '@material-ui/core';

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
  const { theme } = useContext(ThemeContext);
  const formik = useFormikLogin({
    initialValues: EMPTY_USER_LOGIN,
    onSubmit: () => {},
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
