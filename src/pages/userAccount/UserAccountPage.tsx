import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Divider, Drawer } from '@material-ui/core';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { FormikTextField } from '../../components/controls_UI/formik/FormikTextField';
import SwitchBtn from '../../components/controls_UI/SwitchBtn';
import PageHeader from '../../components/PageHeader';
import { useAuth } from '../../providers/AuthProvider';
import { PersonDTO } from '../../types/DTO/Person';
import ChangePasswordFieldset from './ChangePasswordFieldset';
import { useUpdateUserMutation } from './useUpdateUserMutation';
import { useUserForm } from './useUserForm';

const UserAccountPageStyled = styled.div`
  .form {
    display: flex;
  }

  .user-data {
    width: 400px;
    padding: 36px;
    .user-data-details {
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

  .change-btn {
    height: 44px;
    align-self: center;
  }
`;

const UserAccountPage = () => {
  const [editMode, setEditMode] = useState(false);
  const drawer = useDrawer();
  const {
    auth: { user },
    modifyUser,
  } = useAuth();
  const {
    userAccountPage: { _form, _header },
    changePassword,
  } = useLanguageSchema();

  const updateUserMutation = useUpdateUserMutation();

  const formik = useUserForm()({
    initialValues: user ?? ({} as PersonDTO),
    onSubmit: async (values) => {
      const response = await updateUserMutation.mutateAsync(values);
      modifyUser(response.data.Person);
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
                <p className="user-data-details">{user?.Email}</p>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faPhone} />
                <p className="user-data-details">{user?.Phone}</p>
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
                onBlur={formik.handleBlur}
                error={formik.errors.FirstName}
                touched={formik.touched.FirstName}
              />
              <FormikTextField
                name="LastName"
                label={_form.lastName}
                value={formik.values.LastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.LastName}
                touched={formik.touched.LastName}
              />
              <FormikTextField
                name="Email"
                label={_form.email}
                value={formik.values.Email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.Email}
                touched={formik.touched.Email}
              />
              <FormikTextField
                name="Phone"
                label={_form.phone}
                value={formik.values.Phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
          onChange={(checked) => {
            setEditMode(checked);
            if (!checked) {
              formik.resetForm({ values: user ?? ({} as PersonDTO) });
            }
          }}
          label={_form.switchBtn}
        />
        <Button
          className="change-btn"
          variant="contained"
          color="primary"
          onClick={drawer.openDrawer}
        >
          {changePassword}
        </Button>
      </div>
      <Divider />
      <section className=""></section>
      <Drawer anchor="right" open={drawer.open} onClose={drawer.closeDrawer}>
        <ChangePasswordFieldset closeDrawer={drawer.closeDrawer} />
      </Drawer>
    </UserAccountPageStyled>
  );
};

export default UserAccountPage;
