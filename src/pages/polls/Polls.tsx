import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestionnaireOffers } from '../../api/QuestionnaireOffer';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { QuestionnaireOfferDTO } from '../../types/DTO/QuestionnaireOffer';
import PollsFieldset from './PollsFieldset';
import PollsList from './PollsList';

const PollsStyle = styled.div``;

const Polls = () => {
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
    <PollsStyle>
      <PageHeader title={applicationsTrainingProposals} />
      <AddFab onClick={() => setIsOpen(true)} />

      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <PollsFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchQuestionnaireOffers={fetchQuestionnaireOffers}
          polls={polls}
        />
      </Drawer>
      {polls.length ? (
        <PollsList
          questionnaireOffers={polls}
          fetchQuestionnaireOffers={fetchQuestionnaireOffers}
        />
      ) : (
        <NoData />
      )}
    </PollsStyle>
  );
};

export default Polls;
