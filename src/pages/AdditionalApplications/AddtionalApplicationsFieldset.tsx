import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { AddtionalApplicationsContent } from './AddtionalApplicationsContent';

interface Props {
  closeDrawer: () => void;
  fetchDocuments: () => void;
}

export const AddtionalApplicationsFieldset = ({
  closeDrawer,
  fetchDocuments,
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
        fetchDocuments={fetchDocuments}
      />
    </FieldsetStyled>
  );
};
