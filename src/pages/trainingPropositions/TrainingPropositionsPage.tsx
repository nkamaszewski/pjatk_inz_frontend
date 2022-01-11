import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestionnaireOffers } from 'api/QuestionnaireOffer';
import AddFab from 'components/AddFab';
import PageHeader from 'components/PageHeader';
import { QuestionnaireOfferDTO } from 'types/DTO/QuestionnaireOffer';
import { TrainingPropositionFieldset } from './TrainingPropositionFieldset';
import { TrainingPropositionsList } from './TrainingPropositionsList';

const TrainingPropositionsPageStyle = styled.div``;

export const TrainingPropositionsPage = () => {
  const [polls, setPolls]: [QuestionnaireOfferDTO[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
      <AddFab onClick={() => setIsOpen(true)} />

      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <TrainingPropositionFieldset
          closeDrawer={() => setIsOpen(false)}
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
