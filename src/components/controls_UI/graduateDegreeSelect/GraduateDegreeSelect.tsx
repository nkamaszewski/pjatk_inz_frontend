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
import { useLanguage } from 'providers/LanguageProvider';
import React, { useState } from 'react';
import styled from 'styled-components';
import { GraduateDegreeDTO } from '../../../types/DTO/GraduateDegree';
import { useGraduateDegreeMutation } from './useGraduateDegreeMutation';
import { useGraduateDegreesQuery } from './useGraduateDegreesQuery';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';

const GraduateDegreeSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EMPTY_GRADUATE_DEGREE = {
  IdGraduateDegree: '',
  Name: '',
} as GraduateDegreeDTO;

const GraduateDegreeSelect = ({ value, onChange }: Props) => {
  const [addingMode, setAddingMode] = useState(false);
  const [graduateDegree, setGraduateDegree] = useState(EMPTY_GRADUATE_DEGREE);
  const graduateDegreesQuery = useGraduateDegreesQuery();
  const graduateDegreeMutation = useGraduateDegreeMutation();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGraduateDegree((prevGraduateDegree) => ({
      ...prevGraduateDegree,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnCancel = () => {
    setAddingMode(false);
    setGraduateDegree(EMPTY_GRADUATE_DEGREE);
  };

  const handleOnConfirm = () => {
    try {
      const newGraduateDegree: any = { ...graduateDegree };
      delete newGraduateDegree.IdGraduateDegree;
      graduateDegreeMutation.mutateAsync(newGraduateDegree).then((res) => {
        setAddingMode(false);

        onChange(res.data.IdGraduateDegree);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setGraduateDegree(EMPTY_GRADUATE_DEGREE);
    }
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <GraduateDegreeSelectStyle>
      <FormControlStyled>
        <InputLabel>{schema.degreeOfStudy}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {graduateDegreesQuery.data?.data.map((graduateD) => (
            <MenuItem
              key={graduateD.IdGraduateDegree}
              value={graduateD.IdGraduateDegree}
            >
              {graduateD.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControlStyled>
      <Tooltip title={schema.addDegreeOfStudy}>
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>{schema.addDegreeOfStudyToTheDatabase}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={graduateDegree.Name}
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
    </GraduateDegreeSelectStyle>
  );
};

export default GraduateDegreeSelect;
