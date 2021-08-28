import { Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteApplicationsForRefund } from '../../api/ApplicationForRefund';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { useDictionary } from '../../contexts/DictionaryContext';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../contexts/NotificationContext';
import { formatDate } from '../../helpers/formatDate';
import { ApplicationForRefundList } from '../../types/DTO/ApplicationForRefund';
import DocumentAdditionalFieldset from './DocumentAdditionalFieldset';
import DocumentAdditionalListHeader from './DocumentAdditionalListHeader';

const DocumentAdditionalListStyle = styled.div`
  padding: 16px;

  .grid-document {
    display: grid;
    grid-template-columns: 1fr repeat(2, 140px) 56px 56px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  documents: ApplicationForRefundList[];
  fetchDocuments: () => void;
}

const DocumentAdditionalList = ({ documents, fetchDocuments }: Props) => {
  const [editDocument, setEditDocument] =
    useState<ApplicationForRefundList | null>(null);
  const { setSnackbar } = useSnackbar();
  const { statuses } = useDictionary();
  const handleCloseDrawer = () => setEditDocument(null);
  const handleDeleteItem = async (id: string) => {
    try {
      await deleteApplicationsForRefund(id);
      fetchDocuments();
      setSnackbar(createSnackbarSuccess('usunięto wniosek'));
    } catch (e) {
      setSnackbar(createSnackbarError('nie udało się usunąć wniosku!'));
    }
  };
  const getStatusName = (id: string) =>
    statuses.find(({ IdStatus }) => IdStatus === id)?.Name ?? '';
  return (
    <DocumentAdditionalListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editDocument)}
        onClose={handleCloseDrawer}
      >
        <DocumentAdditionalFieldset
          closeDrawer={handleCloseDrawer}
          fetchDocuments={fetchDocuments}
          editDocument={editDocument}
        />
      </Drawer>
      <DocumentAdditionalListHeader />
      {documents.map((doc) => (
        <>
          {doc.applicationForRefundApplicationForReasons.map((application) => (
            <Card
              key={doc.IdApplicationForRefund}
              className="grid-document row"
            >
              <p>{application.applicationForReasonsReasonForRefund.Name}</p>
              <p>{getStatusName(application.IdStatus)}</p>
              <p>{formatDate(doc.DateOfSubmission)}</p>
              <EditBtn onClick={() => setEditDocument(doc)} />
              <DeleteBtn
                onClick={() => handleDeleteItem(doc.IdApplicationForRefund)}
              />
            </Card>
          ))}
        </>
      ))}
    </DocumentAdditionalListStyle>
  );
};

export default DocumentAdditionalList;
