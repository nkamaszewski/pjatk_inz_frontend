import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import TrainingContent from './TrainingContent';

interface Props {
  closeDrawer: () => void;
  fetchTrainings: Function;
}

const TrainingFieldset = ({ closeDrawer, fetchTrainings }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Dodaj Kurs`} closeDrawer={closeDrawer} />
      <TrainingContent
        closeDrawer={closeDrawer}
        fetchTrainings={fetchTrainings}
      />
    </FieldsetStyled>
  );
};

export default TrainingFieldset;
