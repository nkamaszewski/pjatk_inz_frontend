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
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editCoach ? 'Edytuj' : 'Dodaj'} Szkoleniowca`}
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
