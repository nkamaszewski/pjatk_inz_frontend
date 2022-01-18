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
import { useAuth } from 'providers/AuthProvider';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React, { useState } from 'react';
import styled from 'styled-components';
import { QuestionnaireOfferDTO } from '../../../types/DTO/QuestionnaireOffer';
import { useQuestionnaireOfferMutation } from '../../../api/questionnaireOffer/useQuestionnaireOfferMutation';

import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { useQuestionnaireOffersQuery } from 'api/questionnaireOffer/useQuestionnaireOffersQuery';

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
  const questionnaireOffersQuery = useQuestionnaireOffersQuery();
  const questionnaireOfferMutation = useQuestionnaireOfferMutation();
  const [addingMode, setAddingMode] = useState(false);
  const [questionnaireOffer, setQuestionnaireOffer] = useState(
    EMPTY_QUESTIONNAIRE_OFFER
  );
  const auth = useAuth();

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
      questionnaireOfferMutation
        .mutateAsync({
          Year: questionnaireOffer.Year,
          IdPerson: auth.auth.user?.IdPerson ?? '1',
        })
        .then((res) => {
          setAddingMode(false);

          onChange(res.data.IdPerson);
        });
    } catch (e) {
      console.error(e);
    } finally {
      setQuestionnaireOffer(EMPTY_QUESTIONNAIRE_OFFER);
    }
  };
  const schema = useLanguageSchema();
  return (
    <EmployeeSelectStyle>
      <FormControlStyled>
        <InputLabel>{schema.yearOfApplication}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {questionnaireOffersQuery.data?.data.map((qo) => (
            <MenuItem
              key={qo.IdQuestionnaireOffer}
              value={qo.IdQuestionnaireOffer}
            >{`${qo.Year} ${qo.person.FirstName} ${qo.person.LastName}`}</MenuItem>
          ))}
        </Select>
      </FormControlStyled>
      <Tooltip title={schema.addTheYearOfTheApplication}>
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>
          {schema.addTheYearOfTheApplicationToTheDatabase}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={questionnaireOffer.Year}
            onChange={handleOnChange}
            margin="dense"
            name="Year"
            label={schema.year}
            type="number"
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
    </EmployeeSelectStyle>
  );
};

export default QuestionnaireOfferSelect;
