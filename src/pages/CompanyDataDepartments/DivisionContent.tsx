import { Button, TextField } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { postDivision, updateDivision } from '../../api/Division';
import {
  createSnackbarError,
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
      } else {
        await postDivision(newDivision);
        fetchDivisionsDepartments();
        setSnackbar(createSnackbarSuccess('dodano pion'));
      }
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('Operacja nie powiodła się!'));
    } finally {
      closeDrawer();
    }
  };
  const {
    language: { schema },
  } = useLanguage();

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
