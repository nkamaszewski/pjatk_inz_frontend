import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSubjects, postSubject } from '../../api/Training';
import { SubjectDTO } from '../../types/DTO/Subject';

const SubjectSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EMPTY_SUBJECT = {
  IdSubject: '',
  Subject: '',
} as SubjectDTO;

const SubjectSelect = ({ value, onChange }: Props) => {
  const [subjects, setSubjects]: [SubjectDTO[], Function] = useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [subject, setSubject] = useState(EMPTY_SUBJECT);

  const fetchSubjects = () => {
    try {
      getSubjects().then((res) => {
        setSubjects(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchSubjects, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject((prevSubject) => ({
      ...prevSubject,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnCancel = () => {
    setAddingMode(false);
    setSubject(EMPTY_SUBJECT);
  };

  const handleOnConfirm = () => {
    try {
      postSubject({ Subject: subject.Subject }).then((res) => {
        setAddingMode(false);
        fetchSubjects();
        onChange(res.data.IdSubject);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setSubject(EMPTY_SUBJECT);
    }
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <SubjectSelectStyle>
      <FormControl fullWidth>
        <InputLabel>{schema.subjectForm}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {subjects.map((sub) => (
            <MenuItem key={sub.IdSubject} value={sub.IdSubject}>
              {sub.Subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title={schema.addTheSubjectOfTheTraining}>
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>{schema.addTheTrainingTopicToTheDatabaseV2}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={subject.Subject}
            onChange={handleOnChange}
            margin="dense"
            name="Subject"
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
    </SubjectSelectStyle>
  );
};

export default SubjectSelect;
