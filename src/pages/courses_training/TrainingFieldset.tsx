import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { TrainingDTO } from '../../types/DTO/Training';
import TrainingContent from './TrainingContent';

interface Props {
  closeDrawer: () => void;
  editTraining?: TrainingDTO | null;
}

const TrainingFieldset = ({ closeDrawer, editTraining }: Props) => {
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editTraining ? capFL(schema.edit) : schema.add} ${
          schema.course
        }`}
        closeDrawer={closeDrawer}
      />
      <TrainingContent closeDrawer={closeDrawer} editTraining={editTraining} />
    </FieldsetStyled>
  );
};

export default TrainingFieldset;
