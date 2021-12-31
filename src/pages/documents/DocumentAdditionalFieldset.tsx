import { useLanguage } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import DocumentAdditionalContent from './DocumentAdditionalContent';

interface Props {
  closeDrawer: () => void;
  fetchDocuments: () => void;
}

const DocumentAdditionalFieldset = ({ closeDrawer, fetchDocuments }: Props) => {
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FieldsetStyled>
      <HeaderFieldset title={schema.addAnApplication} closeDrawer={closeDrawer} />
      <DocumentAdditionalContent
        closeDrawer={closeDrawer}
        fetchDocuments={fetchDocuments}
      />
    </FieldsetStyled>
  );
};

export default DocumentAdditionalFieldset;
