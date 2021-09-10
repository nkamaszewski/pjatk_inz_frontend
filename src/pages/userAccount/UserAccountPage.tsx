import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Divider } from '@material-ui/core';
import { useLanguage } from 'contexts/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import FormikTextField from '../../components/controls_UI/formik/FormikTextField';
import SwitchBtn from '../../components/controls_UI/SwitchBtn';
import PageHeader from '../../components/PageHeader';
import { useAuth } from '../../contexts/AuthProvider';
import { PersonDTO } from '../../types/DTO/Person';
import { useFormikUser } from './useFormikUser';

const UserAccountPageStyled = styled.div`
  .form {
    display: flex;
  }

  .user-data {
    width: 400px;
    padding: 36px;
    p {
      padding: 16px 0;
    }
    .row {
      display: flex;
      align-items: center;
      column-gap: 16px;
    }
    .save-btn {
      float: right;
    }
  }
`;

const UserAccountPage = () => {
  const [userEditModel, setUserEditModel] = useState<PersonDTO | null>(null);
  const {
    auth: { user },
  } = useAuth();
  const {
    language: {
      schema: {
        userAccountPage: { _form, _header },
      },
    },
  } = useLanguage();

  const formik = useFormikUser({
    initialValues: user ?? ({} as PersonDTO),
    onSubmit: async (values) => {
      // const isAuthenticated = await auth.register(values);
      // if (isAuthenticated) {
      //   history.push('/pracownicy');
      // }
    },
  });

  const handleOnSave = () => {};

  return (
    <UserAccountPageStyled>
      <PageHeader title={_header.title} />
      <div className="form">
        <section className="user-data">
          {!userEditModel ? (
            <>
              <h3>
                {user?.FirstName} {user?.LastName}
              </h3>
              <div className="row">
                <FontAwesomeIcon icon={faMailBulk} />
                <p>{user?.Email}</p>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faPhone} />
                <p>{user?.Phone}</p>
              </div>
            </>
          ) : (
            <>
              <FormikTextField
                name="firstName"
                label={_form.firstName}
                autoFocus={true}
                value={formik.values.FirstName}
                onChange={formik.handleChange}
                error={formik.errors.FirstName}
                touched={formik.touched.FirstName}
              />
              <FormikTextField
                name="lastName"
                label={_form.lastName}
                value={formik.values.LastName}
                onChange={formik.handleChange}
                error={formik.errors.LastName}
                touched={formik.touched.LastName}
              />
              <FormikTextField
                name="email"
                label={_form.email}
                value={formik.values.Email}
                onChange={formik.handleChange}
                error={formik.errors.Email}
                touched={formik.touched.Email}
              />
              <FormikTextField
                name="phone"
                label={_form.phone}
                value={formik.values.Phone}
                onChange={formik.handleChange}
                error={formik.errors.Phone}
                touched={formik.touched.Phone}
              />
              <Button
                onClick={handleOnSave}
                color="primary"
                variant="contained"
                className="save-btn"
              >
                {_form.submitBtn}
              </Button>
            </>
          )}
        </section>
        <SwitchBtn
          value={Boolean(userEditModel)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUserEditModel(event.target.checked ? user : null)
          }
          label={_form.switchBtn}
        />
      </div>
      <Divider />
      <section className=""></section>
    </UserAccountPageStyled>
  );
};

export default UserAccountPage;
