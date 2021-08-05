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
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStudyModes, postStudyMode } from '../../api/Study';
import { getTopics, postTopic } from '../../api/Training';
import { TopicDTO } from '../../types/DTO/Topic';
import SubjectSelect from './SubjectSelect';

const TopicSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EMPTY_TOPIC = {
  IdTopic: '',
  Topic: '',
  IdSubject: '',
} as TopicDTO;

const TopicSelect = ({ value, onChange }: Props) => {
  const [topics, setTopics]: [TopicDTO[], Function] = useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [topic, setTopic] = useState(EMPTY_TOPIC);

  const fetchTopics = () => {
    try {
      getTopics().then((res) => {
        setTopics(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchTopics, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic((prevTopic) => ({
      ...prevTopic,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnCancel = () => {
    setAddingMode(false);
    setTopic(EMPTY_TOPIC);
  };

  const handleOnConfirm = () => {
    try {
      postTopic({ Topic: topic.Topic, IdSubject: topic.IdSubject }).then(
        (res) => {
          setAddingMode(false);
          fetchTopics();
          onChange(res.data.IdTopic);
        }
      );
    } catch (e) {
      console.error(e);
    } finally {
      setTopic(EMPTY_TOPIC);
    }
  };
  return (
    <TopicSelectStyle>
      <FormControl fullWidth>
        <InputLabel>Temat</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {topics.map((top) => (
            <MenuItem key={top.IdTopic} value={top.IdTopic}>
              {top.Topic}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title="dodaj temat szkolenia">
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>Dodaj temat szkolenia do bazy danych</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={topic.Topic}
            onChange={handleOnChange}
            margin="dense"
            name="Topic"
            label="Nazwa"
            type="text"
            fullWidth
          />
          <SubjectSelect
            value={topic.IdSubject}
            onChange={(value: string) => {
              setTopic((prevTopic) => ({
                ...prevTopic,
                IdSubject: value,
              }));
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </TopicSelectStyle>
  );
};

export default TopicSelect;
