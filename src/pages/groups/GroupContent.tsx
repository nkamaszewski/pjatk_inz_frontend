import { Button } from '@material-ui/core';
import { useAddGroupMutation } from 'api/group/useAddGroupMutation';
import { useUpdateGroupMutation } from 'api/group/useUpdateGroupMutation';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { GroupDTO } from 'types/DTO/Group';
import TrainingSelect from '../../components/controls_UI/trainingSelect/TrainingSelect';
import { useGroupForm } from './useGroupForm';

const GroupContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  Name: '',
  NumberOfPerson: 0,
  IdEducation: '',
};
interface Props {
  closeDrawer: Function;
  editedGroup?: GroupDTO | null;
}

const GroupContent = ({ closeDrawer, editedGroup }: Props) => {
  const addMutation = useAddGroupMutation();
  const updateMutation = useUpdateGroupMutation();
  const groupForm = useGroupForm()({
    initialValues: editedGroup ?? initialValues,
    onSubmit: async (values) => {
      if (editedGroup) {
        await updateMutation.mutateAsync({
          ...values,
          IdGroup: editedGroup.IdGroup,
        });
      } else {
        await addMutation.mutateAsync(values);
      }
      closeDrawer();
    },
  });

  const schema = useLanguageSchema();

  return (
    <GroupContentStyle>
      <FormikTextField
        label={schema.name}
        name="Name"
        value={groupForm.values.Name}
        onChange={groupForm.handleChange}
        onBlur={groupForm.handleBlur}
        error={groupForm.errors.Name}
        touched={groupForm.touched.Name}
        autoFocus
      />
      <FormikTextField
        label="Ilość uczestników"
        name="NumberOfPerson"
        value={groupForm.values.NumberOfPerson}
        onChange={groupForm.handleChange}
        onBlur={groupForm.handleBlur}
        error={groupForm.errors.NumberOfPerson}
        touched={groupForm.touched.NumberOfPerson}
      />

      <TrainingSelect
        value={groupForm.values.IdEducation}
        onChange={(id) => groupForm.setFieldValue('IdEducation', id)}
        name="IdEducation"
        onBlur={groupForm.handleBlur}
        error={groupForm.errors.IdEducation}
        touched={groupForm.touched.IdEducation}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => groupForm.handleSubmit()}
      >
        {schema.save}
      </Button>
    </GroupContentStyle>
  );
};

export default GroupContent;
