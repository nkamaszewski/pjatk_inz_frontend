import { Button, TextField } from '@material-ui/core';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { postQuestionnaireOffer, updateQuestionnaireOffer } from '../../api/QuestionnaireOffer';
import { NotificationContext } from '../../contexts/NotificationContext';
import { createSnackbarSuccess } from '../../hooks/useNotification';
import { QuestionnaireOffer } from '../../types/DTO/QuestionnaireOffer';


const PollsContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchQuestionnaireOffers: Function;
  editQuestionnaireOffer?: QuestionnaireOffer | null;
}

const PollsContent = ({
  closeDrawer,
  fetchQuestionnaireOffers,
  editQuestionnaireOffer,
}: Props) => {
  const [year, setYear] = useState(editQuestionnaireOffer?.Year ?? 0);
  const notificationCtx = useContext(NotificationContext);

  const handleOnYearChange = (e: any) => {
    e.persist();
    setYear(e.target.value);
  };

  const handleOnSave = async () => {
    try {
      if (editQuestionnaireOffer) {
        await updateQuestionnaireOffer({
          IdQuestionnaireOffer: editQuestionnaireOffer.IdQuestionnaireOffer,
          Year: year,
          IdPerson: '1'
        });
        notificationCtx.setSnackbar(
          createSnackbarSuccess('Ankieta została wyedytowana')
        );
      } else {
        await postQuestionnaireOffer({ Year: year, IdPerson: '1' });
        notificationCtx.setSnackbar(
          createSnackbarSuccess('Abkieta została dodana')
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      fetchQuestionnaireOffers();
      closeDrawer();
    }
  };

  return (
    <PollsContentStyle>
      <h3>Dodaj ankietę</h3>
      <TextField
      type = "number"
        fullWidth
        label="Rok"
        value={year}
        onChange={handleOnYearChange}
      />
      <Button
        disabled={!Boolean(year)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        Zapisz
      </Button>
    </PollsContentStyle>
  );
};

export default PollsContent;
