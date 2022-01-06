import { Button, TextField } from '@material-ui/core';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { useLanguage } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getEmployee, postEmployee } from '../../api/Employee';
import DepartmentSelect from '../../components/controls_UI/departmentSelect/DepartmentSelect';
import PersonSelect from '../../components/controls_UI/personSelect/PersonSelect';
import PositionSelect from '../../components/controls_UI/positionSelect/PositionSelect';
import { EmploymentDTO } from '../../types/DTO/Employment';
import { useAddEmploymentMutation } from './useAddEmploymentMutation';
import { useEmploymentForm } from './useEmploymentForm';
import { useUpdateEmploymentMutation } from './useUpdateEmploymentMutation';

const EmploymentContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  editEmployee?: EmploymentDTO | null;
}

const initialValues = {
  DateFrom: '',
  DateTo: '',
  IdDepartment: '',
  IdPosition: '',
  IdPerson: '',
};

const EmploymentContent = ({ closeDrawer, editEmployee }: Props) => {
  const [pesel, setPesel] = useState(0);
  const [password, setPassword] = useState('');
  const addMutation = useAddEmploymentMutation();
  const updateMutation = useUpdateEmploymentMutation();
  const employmentForm = useEmploymentForm()({
    initialValues,
    onSubmit: async (values) => {
      if (showEmployeeConfig) {
        await postEmployee({
          IdPerson: values.IdPerson,
          Pesel: pesel,
          Password: password,
        });
      }

      const empDTO = {
        DateFrom: values.DateFrom,
        DateTo: values.DateTo,
        IdDepartment: values.IdDepartment,
        IdPosition: values.IdPosition,
        IdPerson: values.IdPerson,
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

  const [showEmployeeConfig, setShowEmployeeConfig] = useState(false);

  useEffect(() => {
    if (employmentForm.values.IdPerson) {
      getEmployee(employmentForm.values.IdPerson)
        .then((res) => {
          if (res.status === 404) {
            setShowEmployeeConfig(true);
          }
        })
        .catch((e) => {
          setShowEmployeeConfig(true);
        });
    }
  }, [employmentForm.values.IdPerson]);

  const handleOnSave = () => {
    employmentForm.submitForm();
  };

  const handleOnPeselChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesel(Number(event.target.value));
  };
  const handleOnPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
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

      <DepartmentSelect
        name="IdDepartment"
        value={employmentForm.values.IdDepartment}
        onChange={(id) => employmentForm.setFieldValue('IdDepartment', id)}
        onBlur={employmentForm.handleBlur}
        error={employmentForm.errors.IdDepartment}
        touched={employmentForm.touched.IdDepartment}
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

      {showEmployeeConfig && (
        <>
          <TextField
            label="Pesel"
            name="pesel"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={pesel}
            onChange={handleOnPeselChange}
          />
          <TextField
            label="Hasło"
            name="password"
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            value={password}
            onChange={handleOnPasswordChange}
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
