import { Divider, Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteApplicationsForReason } from '../../api/ApplicationForReason';
import { deleteApplicationsForRefund } from '../../api/ApplicationForRefund';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { useDictionary } from '../../providers/DictionaryContext';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { formatDate } from '../../helpers/formatDate';
import { ApplicationForRefundList } from '../../types/DTO/ApplicationForRefund';
import DocumentAdditionalFieldset from './DocumentAdditionalFieldset';
import DocumentAdditionalListHeader from './DocumentAdditionalListHeader';
import { useLanguageSchema } from 'providers/LanguageProvider';

const DocumentAdditionalListStyle = styled.div`
  padding: 16px;

  .grid-header {
    display: grid;
    grid-template-columns: 1fr 140px 56px;
  }

  .grid-doc {
    display: grid;
    grid-template-columns: 1fr 140px 56px 56px;
    padding: 16px 56px;
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
      setSnackbar(createSnackbarSuccess(schema.theApplicationHasBeenDeleted));
    } catch (e) {
      setSnackbar(createSnackbarError(schema.theRequestCouldNotBeDeleted));
    }
  };
  const handleDeleteItemDetails = async (id: string) => {
    try {
      await deleteApplicationsForReason(id);
      fetchDocuments();
      setSnackbar(createSnackbarSuccess(schema.theApplicationHasBeenDeleted));
    } catch (e) {
      setSnackbar(createSnackbarError(schema.theRequestCouldNotBeDeleted));
    }
  };
  console.log('statuses', statuses);

  const getStatusName = (id: string) =>
    statuses.find(({ IdStatus }) => IdStatus === id)?.Name ?? '';
  const schema = useLanguageSchema();

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
        />
      </Drawer>
      <DocumentAdditionalListHeader />
      {documents.map((doc) => (
        <Card key={doc.IdApplicationForRefund} className="row">
          <header className="grid-header">
            <h4>
              {
                doc.applicationForRefundApplicationFor.applicationForEmployee
                  .employeePerson.FirstName
              }{' '}
              {
                doc.applicationForRefundApplicationFor.applicationForEmployee
                  .employeePerson.LastName
              }
            </h4>
            <h4>{formatDate(doc.DateOfSubmission)}</h4>
            <DeleteBtn
              onClick={() => handleDeleteItem(doc.IdApplicationForRefund)}
            />
          </header>
          <Divider />
          {doc.applicationForRefundApplicationForReasons.map((application) => (
            <section className="grid-doc">
              <p>{application.applicationForReasonsReasonForRefund.Name}</p>
              <p>{getStatusName(application.IdStatus)}</p>
              <EditBtn onClick={() => setEditDocument(doc)} />
              <DeleteBtn
                onClick={() =>
                  handleDeleteItemDetails(application.IdReasonForRefund)
                }
              />
            </section>
          ))}
        </Card>
      ))}
    </DocumentAdditionalListStyle>
  );
};

export default DocumentAdditionalList;
