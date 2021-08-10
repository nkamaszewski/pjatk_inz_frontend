import { Divider, Drawer } from '@material-ui/core';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { deleteOffer } from '../../api/Offers';
import { deleteQuestionnaireOffer } from '../../api/QuestionnaireOffer';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { NotificationContext } from '../../contexts/NotificationContext';
import {
  createSnackbarError,
  createSnackbarSuccess,
} from '../../hooks/useNotification';
import { OfferDTO } from '../../types/DTO/Offer';
import { QuestionnaireOfferDTO } from '../../types/DTO/QuestionnaireOffer';
import PollsFieldset from './PollsFieldset';

const PollsListStyle = styled.div`
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

const PollsList = ({
  questionnaireOffers,
  fetchQuestionnaireOffers,
}: Props) => {
  const [editOffer, setEditOffer]: [OfferDTO | null, Function] = useState(null);
  const notificationCtx = useContext(NotificationContext);

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteQuestionnaireOffer(id);
      notificationCtx.setSnackbar(createSnackbarSuccess('Usunięto ankietę!'));
      fetchQuestionnaireOffers();
    } catch (e) {
      console.error(e);
      notificationCtx.setSnackbar(
        createSnackbarError('Nie udało się usunąć ankiety!')
      );
    }
  };

  const handleDeleteOffer = async (id: string) => {
    try {
      await deleteOffer(id);
      notificationCtx.setSnackbar(createSnackbarSuccess('Usunięto ofertę!'));
      fetchQuestionnaireOffers();
    } catch (e) {
      console.error(e);
      notificationCtx.setSnackbar(
        createSnackbarError('Nie udało się usunąć oferty!')
      );
    }
  };

  const handleCloseDrawer = () => setEditOffer(null);

  return (
    <PollsListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editOffer)}
        onClose={handleCloseDrawer}
      >
        <PollsFieldset
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
                <p>Temat</p>
                <p>Cena</p>
                <p>Link</p>
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
    </PollsListStyle>
  );
};

export default PollsList;
