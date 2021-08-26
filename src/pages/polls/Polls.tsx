import { Drawer } from '@material-ui/core';
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

  return (
    <PollsStyle>
      <PageHeader title="Wnioski propozycje szkoleń" />
      <AddFab onClick={() => setIsOpen(true)} />

      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <PollsFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchQuestionnaireOffers={fetchQuestionnaireOffers}
          polls={polls}
        />
      </Drawer>
      <PollsList
        questionnaireOffers={polls}
        fetchQuestionnaireOffers={fetchQuestionnaireOffers}
      />
    </PollsStyle>
  );
};

export default Polls;
