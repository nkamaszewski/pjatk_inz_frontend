import { Divider, Drawer } from '@material-ui/core';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteOffer } from 'api/Offers';
import { deleteQuestionnaireOffer } from 'api/QuestionnaireOffer';
import DeleteBtn from 'components/DeleteBtn';
import EditBtn from 'components/EditBtn';
import {
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';
import { OfferDTO } from 'types/DTO/Offer';
import { QuestionnaireOfferDTO } from 'types/DTO/QuestionnaireOffer';
import { TrainingPropositionFieldset } from './TrainingPropositionFieldset';

const TrainingPropositionsListStyle = styled.div`
  padding: 24px;

  .row-content {
    display: grid;
    grid-template-columns: 1fr 56px;
  }

  .subrow {
    display: grid;
    grid-template-columns: 240px 100px 1fr 56px 56px;
    padding: 16px;
  }

  .subrow-hover:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .subheader {
    color: rgba(0, 0, 0, 0.56);
  }
`;

interface Props {
  questionnaireOffers: QuestionnaireOfferDTO[];
  fetchQuestionnaireOffers: Function;
}

export const TrainingPropositionsList = ({
  questionnaireOffers,
  fetchQuestionnaireOffers,
}: Props) => {
  const [editOffer, setEditOffer]: [OfferDTO | null, Function] = useState(null);
  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteQuestionnaireOffer(id);
      setSnackbar(createSnackbarSuccess(schema.theRequestHasBeenDeleted));
      fetchQuestionnaireOffers();
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    }
  };

  const handleDeleteOffer = async (id: string) => {
    try {
      await deleteOffer(id);
      setSnackbar(createSnackbarSuccess(schema.trainingProposalRemoved));
      fetchQuestionnaireOffers();
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    }
  };

  const handleCloseDrawer = () => setEditOffer(null);
  const schema = useLanguageSchema();
  return (
    <TrainingPropositionsListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editOffer)}
        onClose={handleCloseDrawer}
      >
        <TrainingPropositionFieldset
          closeDrawer={handleCloseDrawer}
          fetchQuestionnaireOffers={fetchQuestionnaireOffers}
          editOffer={editOffer}
          polls={questionnaireOffers}
        />
      </Drawer>
      {questionnaireOffers.map((questionnaireoffer) => (
        <div key={questionnaireoffer.IdQuestionnaireOffer}>
          <div className="row-content">
            <h3>{questionnaireoffer.Year}</h3>

            <DeleteBtn
              onClick={() =>
                handleDeleteItem(questionnaireoffer.IdQuestionnaireOffer)
              }
            />
            <div>
              <header className="subrow subheader">
                <p>{schema.topic}</p>
                <p>{schema.price}</p>
                <p>{schema.link}</p>
              </header>
              {questionnaireoffer.questionnaireOfferOffer.map((offer) => (
                <div className="subrow subrow-hover">
                  <p>{offer.Topic}</p>
                  <p>{offer.Price}</p>
                  <p>{offer.Link}</p>
                  <EditBtn onClick={() => setEditOffer(offer)} />
                  <DeleteBtn onClick={() => handleDeleteOffer(offer.IdOffer)} />
                </div>
              ))}
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </TrainingPropositionsListStyle>
  );
};
