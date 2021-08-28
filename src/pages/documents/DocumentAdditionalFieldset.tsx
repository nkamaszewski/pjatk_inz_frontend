import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { ApplicationForRefundList } from '../../types/DTO/ApplicationForRefund';
import RoomContent from './DocumentAdditionalContent';

interface Props {
  closeDrawer: () => void;
  fetchDocuments: () => void;
  editDocument?: ApplicationForRefundList | null;
}

const DocumentAdditionalFieldset = ({
  closeDrawer,
  fetchDocuments,
  editDocument,
}: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editDocument ? 'Edytuj' : 'Dodaj'} wniosek`}
        closeDrawer={closeDrawer}
      />
      <RoomContent
        closeDrawer={closeDrawer}
        fetchDocuments={fetchDocuments}
        editDocument={editDocument}
      />
    </FieldsetStyled>
  );
};

export default DocumentAdditionalFieldset;
