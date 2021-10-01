import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { ApplicationForDTO } from '../../types/DTO/ApplicationFor';
import WorkshopContent from './WorkshopContent';

interface Props {
  closeDrawer: () => void;
  fetchApplications: Function;
  editApplicationFor?: ApplicationForDTO | null;
}

const WorkshopFieldset = ({
  closeDrawer,
  fetchApplications,
  editApplicationFor,
}: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editApplicationFor ? 'Edytuj' : 'Dodaj'} wniosek`}
        closeDrawer={closeDrawer}
      />
      <WorkshopContent
        closeDrawer={closeDrawer}
        fetchApplications={fetchApplications}
        editApplicationFor={editApplicationFor}
      />
    </FieldsetStyled>
  );
};

export default WorkshopFieldset;
