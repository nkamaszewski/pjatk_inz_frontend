import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { AddtionalApplicationsContent } from './AddtionalApplicationsContent';

interface Props {
  closeDrawer: () => void;
  editAdditionalApplication?: any | null;
  IdApplicationFor?: string | undefined;
}

export const AddtionalApplicationsFieldset = ({
  closeDrawer,
  editAdditionalApplication,
  IdApplicationFor,
}: Props) => {
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={schema.addAnApplication}
        closeDrawer={closeDrawer}
      />
      <AddtionalApplicationsContent
        closeDrawer={closeDrawer}
        editAdditionalApplication={editAdditionalApplication}
        IdApplicationFor={IdApplicationFor}
      />
    </FieldsetStyled>
  );
};
