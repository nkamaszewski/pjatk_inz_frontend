import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
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
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editOffer ? capFL(schema.edit) : schema.add} ${
          schema.questionnaire
        }`}
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
