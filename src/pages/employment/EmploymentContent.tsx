import { Button } from '@material-ui/core';
import FormikPassword from 'components/controls_UI/formik/FormikPassword';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { RoleSelect } from 'components/controls_UI/roleSelect/RoleSelect';
import { DivisionDepartmentCascade } from 'components/DivisionDepartmentCascade';
import { formatDate } from 'helpers/formatDate';
import { useLanguage } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { postEmployee } from '../../api/Employee';
import PersonSelect from '../../components/controls_UI/personSelect/PersonSelect';
import PositionSelect from '../../components/controls_UI/positionSelect/PositionSelect';
import { EmploymentDTO } from '../../types/DTO/Employment';
import { useAddEmploymentMutation } from './useAddEmploymentMutation';
import { useEmploymentForm } from './useEmploymentForm';
import { useShowEmployeeConfig } from './useShowEmployeeConfig';
import { useUpdateEmploymentMutation } from './useUpdateEmploymentMutation';

const EmploymentContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: () => void;
  editEmployee?: EmploymentDTO | null;
}

const initialValues = {
  DateFrom: '',
  DateTo: '',
  IdDivision: '',
  IdDepartment: '',
  IdPosition: '',
  IdPerson: '',
  showEmployeeConfig: false,
  Pesel: 0,
  Password: '',
  IdRole: '',
};

const EmploymentContent = ({ closeDrawer, editEmployee }: Props) => {
  const addMutation = useAddEmploymentMutation();
  const updateMutation = useUpdateEmploymentMutation();
  const employmentForm = useEmploymentForm()({
    initialValues: editEmployee
      ? {
          ...editEmployee,
          DateFrom: formatDate(editEmployee?.DateFrom),
          DateTo: formatDate(editEmployee?.DateTo),
          showEmployeeConfig: false,
          Pesel: 0,
          Password: '',
        }
      : initialValues,
    onSubmit: async (values) => {
      if (values.showEmployeeConfig) {
        await postEmployee({
          IdPerson: values.IdPerson,
          Pesel: values.Pesel,
          Password: values.Password,
        });
      }

      const empDTO = {
        DateFrom: values.DateFrom,
        DateTo: values.DateTo ? values.DateTo : null,
        IdDivision: values.IdDivision,
        IdDepartment: values.IdDepartment,
        IdPosition: values.IdPosition,
        IdPerson: values.IdPerson,
        IdRole: values.IdRole,
      };

      if (editEmployee) {
        const payload = { ...empDTO, IdEmployment: editEmployee.IdEmployment };
        await updateMutation.mutateAsync(payload);
      } else {
        await addMutation.mutateAsync(empDTO);
      }
      closeDrawer();
    },
  });

  useShowEmployeeConfig(employmentForm);

  const handleOnSave = () => {
    employmentForm.submitForm();
  };

  const {
    language: { schema },
  } = useLanguage();

  return (
    <EmploymentContentStyle>
      <FormikTextField
        label={schema.dateFrom}
        name="DateFrom"
        type="date"
        value={employmentForm.values.DateFrom}
        onChange={employmentForm.handleChange}
        onBlur={employmentForm.handleBlur}
        error={employmentForm.errors.DateFrom}
        touched={employmentForm.touched.DateFrom}
        autoFocus
      />
      <FormikTextField
        label={schema.dateTo}
        name="DateTo"
        type="date"
        value={employmentForm.values.DateTo}
        onChange={employmentForm.handleChange}
        onBlur={employmentForm.handleBlur}
        error={employmentForm.errors.DateTo}
        touched={employmentForm.touched.DateTo}
      />

      <RoleSelect
        name="IdRole"
        value={employmentForm.values.IdRole}
        onChange={(id) => employmentForm.setFieldValue('IdRole', id)}
        onBlur={employmentForm.handleBlur}
        error={employmentForm.errors.IdRole}
        touched={employmentForm.touched.IdRole}
      />

      <DivisionDepartmentCascade
        divisionProps={{
          name: 'IdDivision',
          value: employmentForm.values.IdDivision,
          onChange: (id) => employmentForm.setFieldValue('IdDivision', id),
          onBlur: employmentForm.handleBlur,
          error: employmentForm.errors.IdDivision,
          touched: employmentForm.touched.IdDivision,
        }}
        departmentProps={{
          name: 'IdDepartment',
          value: employmentForm.values.IdDepartment,
          onChange: (id) => employmentForm.setFieldValue('IdDepartment', id),
          onBlur: employmentForm.handleBlur,
          error: employmentForm.errors.IdDepartment,
          touched: employmentForm.touched.IdDepartment,
        }}
        idRole={employmentForm.values.IdRole}
      />

      <PositionSelect
        name="IdPosition"
        value={employmentForm.values.IdPosition}
        onChange={(id) => employmentForm.setFieldValue('IdPosition', id)}
        onBlur={employmentForm.handleBlur}
        error={employmentForm.errors.IdPosition}
        touched={employmentForm.touched.IdPosition}
      />

      <PersonSelect
        name="IdPerson"
        value={employmentForm.values.IdPerson}
        onChange={(id) => employmentForm.setFieldValue('IdPerson', id)}
        onBlur={employmentForm.handleBlur}
        error={employmentForm.errors.IdPerson}
        touched={employmentForm.touched.IdPerson}
      />

      {employmentForm.values.showEmployeeConfig && (
        <>
          <FormikTextField
            label="Pesel"
            name="Pesel"
            type="number"
            value={employmentForm.values.Pesel}
            onChange={employmentForm.handleChange}
            onBlur={employmentForm.handleBlur}
            error={employmentForm.errors.Pesel}
            touched={employmentForm.touched.Pesel}
          />

          <FormikPassword
            label="Hasło"
            name="Password"
            value={employmentForm.values.Password}
            onChange={employmentForm.handleChange}
            onBlur={employmentForm.handleBlur}
            error={employmentForm.errors.Password}
            touched={employmentForm.touched.Password}
          />
        </>
      )}

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        {schema.save}
      </Button>
    </EmploymentContentStyle>
  );
};

export default EmploymentContent;
