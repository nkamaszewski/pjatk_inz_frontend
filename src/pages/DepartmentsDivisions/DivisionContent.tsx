import { Button, TextField } from '@material-ui/core';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { postDivision, updateDivision } from '../../api/Division';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { DivisionDTO } from '../../types/DTO/Division';

const DivisionContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchDivisionsDepartments: Function;
  editDivision?: DivisionDTO | null;
}

const DivisionContent = ({
  closeDrawer,
  fetchDivisionsDepartments,
  editDivision,
}: Props) => {
  const [name, setName] = useState(editDivision?.Name ?? '');
  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const handleOnNameChange = (e: any) => {
    e.persist();
    setName(e.target.value);
  };

  const handleOnSave = async () => {
    const newDivision = { Name: name };
    try {
      if (editDivision) {
        await updateDivision({
          ...newDivision,
          IdDivision: editDivision.IdDivision,
        });
        fetchDivisionsDepartments();
        setSnackbar(createSnackbarSuccess('edytowano pion'));
        closeDrawer();
      } else {
        await postDivision(newDivision);
        fetchDivisionsDepartments();
        setSnackbar(createSnackbarSuccess('dodano pion'));
        closeDrawer();
      }
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    }
  };
  const schema = useLanguageSchema();

  return (
    <DivisionContentStyle>
      <TextField
        fullWidth
        label={schema.name}
        value={name}
        onChange={handleOnNameChange}
      />
      <Button
        disabled={!Boolean(name)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        {schema.save}
      </Button>
    </DivisionContentStyle>
  );
};

export default DivisionContent;
