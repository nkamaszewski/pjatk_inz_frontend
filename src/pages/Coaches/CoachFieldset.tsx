import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { CoachDTO } from '../../types/DTO/Coach';
import CoachContent from './CoachContent';

interface Props {
  closeDrawer: () => void;
  fetchCoaches: Function;
  editCoach?: CoachDTO | null;
}

const CoachFieldset = ({ closeDrawer, fetchCoaches, editCoach }: Props) => {
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editCoach ? capFL(schema.edit) : schema.add} ${schema.trainerV2}`}
        closeDrawer={closeDrawer}
      />
      <CoachContent
        closeDrawer={closeDrawer}
        fetchCoaches={fetchCoaches}
        editCoach={editCoach}
      />
    </FieldsetStyled>
  );
};

export default CoachFieldset;
