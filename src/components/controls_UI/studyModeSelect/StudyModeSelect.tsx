import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useState } from 'react';
import styled from 'styled-components';
import { StudyModeDTO } from '../../../types/DTO/StudyMode';
import { useStudyModeMutation } from './useStudyModeMutation';
import { useStudyModesQuery } from './useStudyModesQuery';

const StudyModeSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EMPTY_STUDY_MODE = {
  IdStudyMode: '',
  Name: '',
} as StudyModeDTO;

const StudyModeSelect = ({ value, onChange }: Props) => {
  const studyModesQuery = useStudyModesQuery();
  const studyModeMutation = useStudyModeMutation();
  const [addingMode, setAddingMode] = useState(false);
  const [studyMode, setStudyMode] = useState(EMPTY_STUDY_MODE);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudyMode((prevStudyMode) => ({
      ...prevStudyMode,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnCancel = () => {
    setAddingMode(false);
    setStudyMode(EMPTY_STUDY_MODE);
  };

  const handleOnConfirm = () => {
    try {
      const newStudyMode: any = { ...studyMode };
      delete newStudyMode.IdStudyMode;
      studyModeMutation.mutateAsync(newStudyMode).then((res) => {
        setAddingMode(false);

        onChange(res.data.IdStudyMode);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setStudyMode(EMPTY_STUDY_MODE);
    }
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <StudyModeSelectStyle>
      <FormControlStyled>
        <InputLabel>{schema.modeOfStudy}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {studyModesQuery.data?.data.map((studyM) => (
            <MenuItem key={studyM.IdStudyMode} value={studyM.IdStudyMode}>
              {studyM.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControlStyled>
      <Tooltip title={schema.addStudyMode}>
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>{schema.addStudyModeToTheDatabase}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={studyMode.Name}
            onChange={handleOnChange}
            margin="dense"
            name="Name"
            label={schema.name}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel} color="primary">
            {schema.cancel}
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            {schema.add}
          </Button>
        </DialogActions>
      </Dialog>
    </StudyModeSelectStyle>
  );
};

export default StudyModeSelect;
