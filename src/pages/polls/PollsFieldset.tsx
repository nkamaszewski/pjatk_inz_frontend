import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { OfferDTO } from '../../types/DTO/Offer';
import { QuestionnaireOfferDTO } from '../../types/DTO/QuestionnaireOffer';
import PollsContent from './PollsContent';

interface Props {
  closeDrawer: () => void;
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
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editOffer ? 'Edytuj' : 'Dodaj'} ankietę`}
        closeDrawer={closeDrawer}
      />
      <PollsContent
        closeDrawer={closeDrawer}
        fetchQuestionnaireOffers={fetchQuestionnaireOffers}
        editOffer={editOffer}
        polls={polls}
      />
    </FieldsetStyled>
  );
};

export default PollsFieldset;
