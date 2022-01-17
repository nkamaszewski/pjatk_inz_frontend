import { Button } from '@material-ui/core';
import { useAddDepartmentMutation } from 'api/department/useAddDepartmentMutation';
import { useUpdateDepartmentMutation } from 'api/department/useUpdateDepartmentMutation';
import DivisionSelect from 'components/controls_UI/divisionSelect/DivisionSelect';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { DepartmentDTO } from '../../types/DTO/Department';
import { useDepartmentForm } from './useDepartmentForm';

const DepartmentContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  Name: '',
  IdDivision: '',
};
interface Props {
  closeDrawer: Function;
  editDepartment?: DepartmentDTO | null;
}

const DepartmentContent = ({ closeDrawer, editDepartment }: Props) => {
  const addMutation = useAddDepartmentMutation();
  const updateMutation = useUpdateDepartmentMutation();
  const departmentForm = useDepartmentForm()({
    initialValues: editDepartment ?? initialValues,
    onSubmit: async (values) => {
      if (editDepartment) {
        await updateMutation.mutateAsync({
          ...values,
          IdDepartment: editDepartment.IdDepartment,
        });
      } else {
        await addMutation.mutateAsync(values);
      }
      closeDrawer();
    },
  });

  const schema = useLanguageSchema();

  return (
    <DepartmentContentStyle>
      <FormikTextField
        label={schema.name}
        name="Name"
        value={departmentForm.values.Name}
        onChange={departmentForm.handleChange}
        onBlur={departmentForm.handleBlur}
        error={departmentForm.errors.Name}
        touched={departmentForm.touched.Name}
        autoFocus
      />
      <DivisionSelect
        value={departmentForm.values.IdDivision}
        onChange={(id) => departmentForm.setFieldValue('IdDivision', id)}
        name="IdDivision"
        onBlur={departmentForm.handleBlur}
        error={departmentForm.errors.IdDivision}
        touched={departmentForm.touched.IdDivision}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => departmentForm.handleSubmit()}
      >
        {schema.save}
      </Button>
    </DepartmentContentStyle>
  );
};

export default DepartmentContent;
