import { OtherEducationDTO } from 'types/DTO/OtherEducation';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { WorkshopContent } from './WorkshopContent';

interface Props {
  closeDrawer: () => void;
  fetchWorkshops: () => void;
  workshop?: OtherEducationDTO | null;
}

const WorkshopFieldset = ({ closeDrawer, fetchWorkshops, workshop }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={workshop ? 'Edytuj szkolenie' : 'Dodaj szkolenie'}
        closeDrawer={closeDrawer}
      />
      <WorkshopContent
        closeDrawer={closeDrawer}
        fetchWorkshops={fetchWorkshops}
        workshop={workshop}
      />
    </FieldsetStyled>
  );
};

export default WorkshopFieldset;
