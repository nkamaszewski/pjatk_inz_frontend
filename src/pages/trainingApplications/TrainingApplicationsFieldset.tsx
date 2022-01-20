import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { ApplicationForDTO } from '../../types/DTO/ApplicationFor';
import { TrainingApplicationsContent } from './TrainingApplicationsContent';

interface Props {
  closeDrawer: () => void;
  fetchApplications: Function;
  editApplicationFor?: ApplicationForDTO | null;
}

export const TrainingApplicationsFieldset = ({
  closeDrawer,
  fetchApplications,
  editApplicationFor,
}: Props) => {
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editApplicationFor ? schema.edit : schema.add} ${
          schema.application
        }`}
        closeDrawer={closeDrawer}
      />
      <TrainingApplicationsContent
        closeDrawer={closeDrawer}
        fetchApplications={fetchApplications}
        editApplicationFor={editApplicationFor}
      />
    </FieldsetStyled>
  );
};
