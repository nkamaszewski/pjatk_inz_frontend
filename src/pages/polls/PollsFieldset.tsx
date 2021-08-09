import styled from 'styled-components';
import { QuestionnaireOffer } from '../../types/DTO/QuestionnaireOffer';
import PollsContent from './PollsContent';

const QuestionnaireOfferFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchQuestionnaireOffers: Function;
  editQuestionnaireOffer?: QuestionnaireOffer | null;
}

const PollsFieldset = ({
  closeDrawer,
  fetchQuestionnaireOffers,
  editQuestionnaireOffer,
}: Props) => {
  return (
    <QuestionnaireOfferFieldsetStyle>
      <PollsContent
        closeDrawer={closeDrawer}
        fetchQuestionnaireOffers={fetchQuestionnaireOffers}
        editOffer={null}
      />
    </QuestionnaireOfferFieldsetStyle>
  );
};

export default PollsFieldset;
