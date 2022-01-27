import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestionnaireOffers } from 'api/questionnaireOffer/QuestionnaireOffer';
import AddFab from 'components/AddFab';
import PageHeader from 'components/PageHeader';
import { QuestionnaireOfferDTO } from 'types/DTO/QuestionnaireOffer';
import { TrainingPropositionFieldset } from './TrainingPropositionFieldset';
import { TrainingPropositionsList } from './TrainingPropositionsList';
import { useDrawer } from 'hooks/useDrawer';

const TrainingPropositionsPageStyle = styled.div``;

export const TrainingPropositionsPage = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const [polls, setPolls]: [QuestionnaireOfferDTO[], Function] = useState([]);

  const fetchQuestionnaireOffers = () => {
    try {
      getQuestionnaireOffers().then((res) => {
        setPolls(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchQuestionnaireOffers();
  }, []);

  const { applicationsTrainingProposals } = useLanguageSchema();

  return (
    <TrainingPropositionsPageStyle>
      <PageHeader title={applicationsTrainingProposals} />
      <AddFab onClick={openDrawer} />

      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <TrainingPropositionFieldset
          closeDrawer={closeDrawer}
          fetchQuestionnaireOffers={fetchQuestionnaireOffers}
          polls={polls}
        />
      </Drawer>
      {polls.length ? (
        <TrainingPropositionsList
          questionnaireOffers={polls}
          fetchQuestionnaireOffers={fetchQuestionnaireOffers}
        />
      ) : (
        <NoData />
      )}
    </TrainingPropositionsPageStyle>
  );
};
