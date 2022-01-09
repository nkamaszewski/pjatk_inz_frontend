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
import { useTopicMutation } from 'api/topic/useTopicMutation';
import { useTopicsQuery } from 'api/topic/useTopicsQuery';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TopicDTO } from '../../../types/DTO/Topic';
import { ErrorHelperText } from '../ErrorHelperText';
import SubjectSelect from '../subjectSelect/SubjectSelect';

const TopicSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
}

const EMPTY_TOPIC = {
  IdTopic: '',
  Topic: '',
  IdSubject: '',
} as TopicDTO;

const TopicSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched,
  error,
}: Props) => {
  const topicsQuery = useTopicsQuery();
  const topicMutation = useTopicMutation();
  const [addingMode, setAddingMode] = useState(false);
  const [topic, setTopic] = useState(EMPTY_TOPIC);

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
      topicMutation
        .mutateAsync({ Topic: topic.Topic, IdSubject: topic.IdSubject })
        .then((res) => {
          setAddingMode(false);
          onChange(res.data.IdTopic);
        });
    } catch (e) {
      console.error(e);
    } finally {
      setTopic(EMPTY_TOPIC);
    }
  };
  const schema = useLanguageSchema();
  return (
    <TopicSelectStyle>
      <FormControlStyled>
        <InputLabel>{schema.topic}</InputLabel>
        <Select
          value={value}
          onChange={handleSelectChange}
          onBlur={onBlur}
          name={name}
        >
          {topicsQuery.data?.data.map((top) => (
            <MenuItem key={top.IdTopic} value={top.IdTopic}>
              {top.Topic}
            </MenuItem>
          ))}
        </Select>
        {touched && error && <ErrorHelperText text={error} />}
      </FormControlStyled>
      <Tooltip title={schema.addATrainingTopic}>
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>{schema.addTheTrainingTopicToTheDatabase}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={topic.Topic}
            onChange={handleOnChange}
            margin="dense"
            name="Topic"
            label={schema.name}
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
            {schema.cancel}
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            {schema.add}
          </Button>
        </DialogActions>
      </Dialog>
    </TopicSelectStyle>
  );
};

export default TopicSelect;
