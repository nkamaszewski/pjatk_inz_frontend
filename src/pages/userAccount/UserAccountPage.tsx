import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Divider } from '@material-ui/core';
import { updateUser } from 'api/User';
import { useLanguage } from 'contexts/LanguageProvider';
import { useSnackbar } from 'contexts/NotificationContext';
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
  const [editMode, setEditMode] = useState(false);
  const {
    auth: { user },
    modifyUser,
  } = useAuth();
  const {
    language: {
      schema: {
        userAccountPage: { _form, _header },
      },
    },
  } = useLanguage();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();

  const formik = useFormikUser({
    initialValues: user ?? ({} as PersonDTO),
    onSubmit: async (values) => {
      try {
        const response = await updateUser(values);
        modifyUser(response.data.Person);
        setSuccessSnackbar(_form.submitSuccess);
      } catch (e) {
        console.error('useFormikUser', e);
        setErrorSnackbar(_form.submitError);
      }
    },
  });

  return (
    <UserAccountPageStyled>
      <PageHeader title={_header.title} />
      <div className="form">
        <section className="user-data">
          {!editMode ? (
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
              }}
            >
              <FormikTextField
                name="FirstName"
                label={_form.firstName}
                autoFocus={true}
                value={formik.values.FirstName}
                onChange={formik.handleChange}
                error={formik.errors.FirstName}
                touched={formik.touched.FirstName}
              />
              <FormikTextField
                name="LastName"
                label={_form.lastName}
                value={formik.values.LastName}
                onChange={formik.handleChange}
                error={formik.errors.LastName}
                touched={formik.touched.LastName}
              />
              <FormikTextField
                name="Email"
                label={_form.email}
                value={formik.values.Email}
                onChange={formik.handleChange}
                error={formik.errors.Email}
                touched={formik.touched.Email}
              />
              <FormikTextField
                name="Phone"
                label={_form.phone}
                value={formik.values.Phone}
                onChange={formik.handleChange}
                error={formik.errors.Phone}
                touched={formik.touched.Phone}
              />

              <Button
                color="primary"
                variant="contained"
                className="save-btn"
                type="submit"
              >
                {_form.submitBtn}
              </Button>
            </form>
          )}
        </section>
        <SwitchBtn
          value={editMode}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEditMode(event.target.checked)
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
