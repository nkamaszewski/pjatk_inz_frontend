import { Button } from '@material-ui/core';
import Lottie from 'react-lottie-player';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import lottieJson from '../../animations/CloudComputing.json';
import FormikPassword from '../../components/controls_UI/formik/FormikPassword';
import FormikTextField from '../../components/controls_UI/formik/FormikTextField';
import { useAuth } from '../../contexts/AuthProvider';
import { useTheme } from '../../contexts/ThemeContext';
import { useFormikLogin } from './useFormikLogin';

const RegisterPageStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  .form-section {
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

    .register {
      float: left;
      margin: 22px 0;

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

const EMPTY_USER_REGISTER = {
  firstName: '',
  lastName: '',
  phone: '+48 ',
  email: '',
  pesel: '',
  password: '',
};

const RegisterPage = () => {
  const { theme } = useTheme();
  const history = useHistory();
  const auth = useAuth();
  const formik = useFormikLogin({
    initialValues: EMPTY_USER_REGISTER,
    onSubmit: async (values) => {
      const isAuthenticated = await auth.register(values);
      if (isAuthenticated) {
        history.push('/pracownicy');
      }
    },
  });

  const handleOnLogin = () => history.push('/logowanie');
  return (
    <RegisterPageStyle theme={theme}>
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
            <h2>Zarejestruj się</h2>
          </div>
          <FormikTextField
            name="firstName"
            label="Imię"
            autoFocus={true}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.errors.firstName}
            touched={formik.touched.firstName}
          />
          <FormikTextField
            name="lastName"
            label="Nazwisko"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.errors.lastName}
            touched={formik.touched.lastName}
          />
          <FormikTextField
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <FormikTextField
            name="phone"
            label="Telefon"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.errors.phone}
            touched={formik.touched.phone}
          />
          <FormikTextField
            name="pesel"
            type="number"
            label="Pesel"
            value={formik.values.pesel}
            onChange={formik.handleChange}
            error={formik.errors.pesel}
            touched={formik.touched.pesel}
          />
          <FormikPassword
            name="password"
            label="Hasło"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <p className="register">
            Masz już konto?
            <span className="register-link" onClick={handleOnLogin}>
              Zaloguj się
            </span>
          </p>
          <Button className="submit-btn" type="submit">
            Zarejestruj
          </Button>
        </form>
      </section>
      <section>
        <Lottie loop animationData={lottieJson} play />
      </section>
    </RegisterPageStyle>
  );
};

export default RegisterPage;
