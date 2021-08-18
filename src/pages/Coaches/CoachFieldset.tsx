import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import CoachContent from './CoachContent';

interface Props {
  closeDrawer: () => void;
  fetchCoaches: Function;
}

const CoachFieldset = ({ closeDrawer, fetchCoaches }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Dodaj Szkoleniowca`} closeDrawer={closeDrawer} />
      <CoachContent closeDrawer={closeDrawer} fetchCoaches={fetchCoaches} />
    </FieldsetStyled>
  );
};

export default CoachFieldset;
