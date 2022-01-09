import { Button } from '@material-ui/core';
import { useAddPositionMutation } from 'api/position/useAddPositionMutation';
import { useUpdatePositionMutation } from 'api/position/useUpdatePositionMutation';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { PositionDTO } from '../../types/DTO/Position';
import { usePositionForm } from './usePositionForm';

const PositionContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  Name: '',
};
interface Props {
  closeDrawer: () => void;
  editPosition?: PositionDTO | null;
}

const PositionContent = ({ closeDrawer, editPosition }: Props) => {
  const addMutation = useAddPositionMutation();
  const updateMutation = useUpdatePositionMutation();
  const positionForm = usePositionForm()({
    initialValues: editPosition ?? initialValues,
    onSubmit: async (values) => {
      if (editPosition) {
        await updateMutation.mutateAsync({ ...editPosition, ...values });
      } else {
        await addMutation.mutateAsync(values);
      }
      closeDrawer();
    },
  });
  const schema = useLanguageSchema();

  return (
    <PositionContentStyle>
      <FormikTextField
        label={schema.name}
        name="Name"
        value={positionForm.values.Name}
        onChange={positionForm.handleChange}
        onBlur={positionForm.handleBlur}
        error={positionForm.errors.Name}
        touched={positionForm.touched.Name}
        autoFocus
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          positionForm.handleSubmit();
        }}
      >
        {schema.save}
      </Button>
    </PositionContentStyle>
  );
};

export default PositionContent;
