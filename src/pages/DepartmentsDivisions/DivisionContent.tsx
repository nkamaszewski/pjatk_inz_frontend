import { Button } from '@material-ui/core';
import { useAddDivisionMutation } from 'api/division/useAddDivisionMutation';
import { useUpdateDivisionMutation } from 'api/division/useUpdateDivisionMutation';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { DivisionDTO } from '../../types/DTO/Division';
import { useDivisionForm } from './useDivisionForm';

const DivisionContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  Name: '',
};
interface Props {
  closeDrawer: Function;
  editDivision?: DivisionDTO | null;
}

const DivisionContent = ({ closeDrawer, editDivision }: Props) => {
  const addMutation = useAddDivisionMutation();
  const updateMutation = useUpdateDivisionMutation();
  const divisionForm = useDivisionForm()({
    initialValues: editDivision ?? initialValues,
    onSubmit: async (values) => {
      if (editDivision) {
        await updateMutation.mutateAsync({
          ...values,
          IdDivision: editDivision.IdDivision,
        });
      } else {
        await addMutation.mutateAsync(values);
      }
      closeDrawer();
    },
  });

  const schema = useLanguageSchema();

  return (
    <DivisionContentStyle>
      <FormikTextField
        label={schema.name}
        name="Name"
        value={divisionForm.values.Name}
        onChange={divisionForm.handleChange}
        onBlur={divisionForm.handleBlur}
        error={divisionForm.errors.Name}
        touched={divisionForm.touched.Name}
        autoFocus
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => divisionForm.handleSubmit()}
      >
        {schema.save}
      </Button>
    </DivisionContentStyle>
  );
};

export default DivisionContent;
