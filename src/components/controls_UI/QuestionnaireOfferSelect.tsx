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
import { useAuth } from 'providers/AuthProvider';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  getQuestionnaireOffers,
  postQuestionnaireOffer,
} from '../../api/QuestionnaireOffer';
import { QuestionnaireOfferDTO } from '../../types/DTO/QuestionnaireOffer';

const EmployeeSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EMPTY_QUESTIONNAIRE_OFFER = {
  Year: 0,
} as QuestionnaireOfferDTO;

const QuestionnaireOfferSelect = ({ value, onChange }: Props) => {
  const [questionnaireOffers, setQuestionnaireOffers]: [
    QuestionnaireOfferDTO[],
    Function
  ] = useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [questionnaireOffer, setQuestionnaireOffer] = useState(
    EMPTY_QUESTIONNAIRE_OFFER
  );
  const auth = useAuth();

  const fetchQuestionnaireOffers = () => {
    try {
      getQuestionnaireOffers().then((res) => {
        setQuestionnaireOffers(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchQuestionnaireOffers, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionnaireOffer((prevQuestionnaireOffer) => ({
      ...prevQuestionnaireOffer,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnCancel = () => {
    setAddingMode(false);
    setQuestionnaireOffer(EMPTY_QUESTIONNAIRE_OFFER);
  };

  const handleOnConfirm = () => {
    try {
      postQuestionnaireOffer({
        Year: questionnaireOffer.Year,
        IdPerson: auth.auth.user?.IdPerson ?? '1',
      }).then((res) => {
        setAddingMode(false);
        fetchQuestionnaireOffers();
        onChange(res.data.IdPerson);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setQuestionnaireOffer(EMPTY_QUESTIONNAIRE_OFFER);
    }
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <EmployeeSelectStyle>
      <FormControl fullWidth>
        <InputLabel>Rok wniosku</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {questionnaireOffers.map((qo) => (
            <MenuItem
              key={qo.IdQuestionnaireOffer}
              value={qo.IdQuestionnaireOffer}
            >{`${qo.Year}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title="dodaj rok wniosku">
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>{schema.addAPersonToTheDatabase}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={questionnaireOffer.Year}
            onChange={handleOnChange}
            margin="dense"
            name="Year"
            label="Rok"
            type="number"
            fullWidth
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
    </EmployeeSelectStyle>
  );
};

export default QuestionnaireOfferSelect;
