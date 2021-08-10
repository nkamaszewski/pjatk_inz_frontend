import styled from 'styled-components';
import { OfferDTO } from '../../types/DTO/Offer';
import { QuestionnaireOffer } from '../../types/DTO/QuestionnaireOffer';
import PollsContent from './PollsContent';

const QuestionnaireOfferFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchQuestionnaireOffers: Function;
  editOffer?: OfferDTO | null;
}

const PollsFieldset = ({
  closeDrawer,
  fetchQuestionnaireOffers,
  editOffer,
}: Props) => {
  return (
    <QuestionnaireOfferFieldsetStyle>
      <PollsContent
        closeDrawer={closeDrawer}
        fetchQuestionnaireOffers={fetchQuestionnaireOffers}
        editOffer={editOffer}
      />
    </QuestionnaireOfferFieldsetStyle>
  );
};

export default PollsFieldset;
