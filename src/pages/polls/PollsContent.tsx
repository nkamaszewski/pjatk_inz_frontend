import { Button, TextField } from '@material-ui/core';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { postOffer, updateOffer } from '../../api/Offers';
import QuestionnaireOfferSelect from '../../components/controls_UI/QuestionnaireOfferSelect';
import { NotificationContext } from '../../contexts/NotificationContext';
import { createSnackbarSuccess } from '../../hooks/useNotification';
import { OfferDTO } from '../../types/DTO/Offer';
import { QuestionnaireOffer } from '../../types/DTO/QuestionnaireOffer';

const PollsContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchQuestionnaireOffers: Function;
  editOffer?: OfferDTO | null;
}

const PollsContent = ({
  closeDrawer,
  fetchQuestionnaireOffers,
  editOffer,
}: Props) => {
  const [questionnaireOfferId, setQuestionnaireOfferId] = useState(
    editOffer?.IdQuestionnaireOffer ?? ''
  );
  const [topic, setTopic] = useState(editOffer?.Topic ?? '');
  const [link, setLink] = useState(editOffer?.Link ?? '');
  const [price, setPrice] = useState(editOffer?.Price ?? 0);

  const notificationCtx = useContext(NotificationContext);

  const handleOnTopicChange = (e: any) => {
    setTopic(e.target.value);
  };
  const handleOnLinkChange = (e: any) => {
    setLink(e.target.value);
  };
  const handleOnPriceChange = (e: any) => {
    setPrice(e.target.value);
  };

  const handleOnSave = async () => {
    try {
      if (editOffer) {
        await updateOffer({
          IdOffer: editOffer.IdOffer,
          Topic: topic,
          Link: link,
          Price: price,
          IdQuestionnaireOffer: editOffer.IdQuestionnaireOffer,
        });
        notificationCtx.setSnackbar(
          createSnackbarSuccess('Ankieta została wyedytowana')
        );
      } else {
        await postOffer({
          Topic: topic,
          Link: link,
          Price: price,
          IdQuestionnaireOffer: questionnaireOfferId,
        });
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
      <QuestionnaireOfferSelect
        value={questionnaireOfferId}
        onChange={setQuestionnaireOfferId}
      />

      <TextField
        type="text"
        fullWidth
        label="Temat"
        value={topic}
        onChange={handleOnTopicChange}
      />
      <TextField
        type="text"
        fullWidth
        label="Link"
        value={link}
        onChange={handleOnLinkChange}
      />
      <TextField
        type="number"
        fullWidth
        label="Koszt"
        value={price}
        onChange={handleOnPriceChange}
      />
      <Button
        // disabled={!Boolean(year)}
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
