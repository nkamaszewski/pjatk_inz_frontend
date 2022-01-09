import { Button, TextField } from '@material-ui/core';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { postOffer, updateOffer } from '../../api/Offers';
import QuestionnaireOfferSelect from '../../components/controls_UI/questionnaireOfferSelect/QuestionnaireOfferSelect';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { OfferDTO } from '../../types/DTO/Offer';
import { QuestionnaireOfferDTO } from '../../types/DTO/QuestionnaireOffer';
import { useHandleHttpError } from 'hooks/useHandleHttpError';

const PollsContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchQuestionnaireOffers: Function;
  editOffer?: OfferDTO | null;
  polls: QuestionnaireOfferDTO[];
}

const PollsContent = ({
  closeDrawer,
  fetchQuestionnaireOffers,
  editOffer,
  polls,
}: Props) => {
  const [questionnaireOfferId, setQuestionnaireOfferId] = useState(
    editOffer?.IdQuestionnaireOffer ?? ''
  );
  const [topic, setTopic] = useState(editOffer?.Topic ?? '');
  const [link, setLink] = useState(editOffer?.Link ?? '');
  const [price, setPrice] = useState(editOffer?.Price ?? 0);

  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

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
    const poll = polls.find(
      (p) => p.IdQuestionnaireOffer === questionnaireOfferId
    );
    if (poll && poll.questionnaireOfferOffer.length > 3) {
      setSnackbar(createSnackbarError('Nie udało się utworzyć ankiety'));
      return closeDrawer();
    }

    try {
      if (editOffer) {
        await updateOffer({
          IdOffer: editOffer.IdOffer,
          Topic: topic,
          Link: link,
          Price: price,
          IdQuestionnaireOffer: editOffer.IdQuestionnaireOffer,
        });
        setSnackbar(
          createSnackbarSuccess(schema.theApplicationItemHasBeenEdited)
        );
        closeDrawer();
      } else {
        await postOffer({
          Topic: topic,
          Link: link,
          Price: price,
          IdQuestionnaireOffer: questionnaireOfferId,
        });
        setSnackbar(createSnackbarSuccess(schema.theRequestItemHasBeenAdded));
        closeDrawer();
      }
    } catch (e) {
      handleHttpError(e);
      console.error(e);
    } finally {
      fetchQuestionnaireOffers();
    }
  };
  const schema = useLanguageSchema();

  return (
    <PollsContentStyle>
      <QuestionnaireOfferSelect
        value={questionnaireOfferId}
        onChange={setQuestionnaireOfferId}
      />

      <TextField
        type="text"
        fullWidth
        label={schema.category}
        value={topic}
        onChange={handleOnTopicChange}
      />
      <TextField
        type="text"
        fullWidth
        label={schema.link}
        value={link}
        onChange={handleOnLinkChange}
      />
      <TextField
        type="number"
        fullWidth
        label={schema.cost}
        value={price}
        onChange={handleOnPriceChange}
      />
      <Button
        // disabled={!Boolean(year)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        {schema.save}
      </Button>
    </PollsContentStyle>
  );
};

export default PollsContent;
