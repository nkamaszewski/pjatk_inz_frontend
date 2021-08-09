import { Divider, Drawer } from '@material-ui/core';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { deleteQuestionnaireOffer } from '../../api/QuestionnaireOffer';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { NotificationContext } from '../../contexts/NotificationContext';
import { createSnackbarError, createSnackbarSuccess } from '../../hooks/useNotification';
import { QuestionnaireOffer } from '../../types/DTO/QuestionnaireOffer';
import PollsFieldset from './PollsFieldset';


const PollsListStyle = styled.div`
  padding: 24px;

  .row-content {
    display: grid;
    grid-template-columns: 1fr 56px 56px;
  }
`;

interface Props {
  questionnaireOffers: QuestionnaireOffer[];
  fetchQuestionnaireOffers: Function;
}

const PollsList = ({ questionnaireOffers, fetchQuestionnaireOffers }: Props) => {
  const [editQuestionnaireOffer, setEditQuestionnaireOffer]: [QuestionnaireOffer | null, Function] =
    useState(null);
  const notificationCtx = useContext(NotificationContext);

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteQuestionnaireOffer(id);
      notificationCtx.setSnackbar(
        createSnackbarSuccess('Usunięto ankietę!')
      );
      fetchQuestionnaireOffers();
    } catch (e) {
      console.error(e);
      notificationCtx.setSnackbar(
        createSnackbarError('Nie udało się usunąć ankiety!')
      );
    }
  };

  const handleCloseDrawer = () => setEditQuestionnaireOffer(null);

  return (
    <PollsListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editQuestionnaireOffer)}
        onClose={handleCloseDrawer}
      >
        <PollsFieldset
          closeDrawer={handleCloseDrawer}
          fetchQuestionnaireOffers={fetchQuestionnaireOffers}
          editQuestionnaireOffer={editQuestionnaireOffer}
        />
      </Drawer>
      {questionnaireOffers.map((questionnaireoffer) => (
        <div key={questionnaireoffer.IdQuestionnaireOffer}>
          <div className="row-content">
            <h3>{questionnaireoffer.Year}</h3>
            <EditBtn onClick={() => setEditQuestionnaireOffer(questionnaireoffer)} />
            <DeleteBtn onClick={() => handleDeleteItem(questionnaireoffer.IdQuestionnaireOffer)} />
          </div>
          <Divider />
        </div>
      ))}
    </PollsListStyle>
  );
};

export default PollsList;
