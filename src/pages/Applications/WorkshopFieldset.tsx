import { useLanguage } from 'providers/LanguageProvider';
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
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editApplicationFor ? schema.edit : schema.add} ${schema.application}`}
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
