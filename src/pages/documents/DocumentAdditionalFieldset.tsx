import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import DocumentAdditionalContent from './DocumentAdditionalContent';

interface Props {
  closeDrawer: () => void;
  fetchDocuments: () => void;
}

const DocumentAdditionalFieldset = ({ closeDrawer, fetchDocuments }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Dodaj wniosek`} closeDrawer={closeDrawer} />
      <DocumentAdditionalContent
        closeDrawer={closeDrawer}
        fetchDocuments={fetchDocuments}
      />
    </FieldsetStyled>
  );
};

export default DocumentAdditionalFieldset;
