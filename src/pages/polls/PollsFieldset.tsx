import styled from 'styled-components';
import { OfferDTO } from '../../types/DTO/Offer';
import { QuestionnaireOfferDTO } from '../../types/DTO/QuestionnaireOffer';
import PollsContent from './PollsContent';

const QuestionnaireOfferFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchQuestionnaireOffers: Function;
  editOffer?: OfferDTO | null;
  polls: QuestionnaireOfferDTO[];
}

const PollsFieldset = ({
  closeDrawer,
  fetchQuestionnaireOffers,
  editOffer,
  polls,
}: Props) => {
  return (
    <QuestionnaireOfferFieldsetStyle>
      <PollsContent
        closeDrawer={closeDrawer}
        fetchQuestionnaireOffers={fetchQuestionnaireOffers}
        editOffer={editOffer}
        polls={polls}
      />
    </QuestionnaireOfferFieldsetStyle>
  );
};

export default PollsFieldset;
