import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import { getApplicationsForRefund } from '../../api/ApplicationForRefund';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { ApplicationForRefundList } from '../../types/DTO/ApplicationForRefund';
import { AddtionalApplicationsFieldset } from './AddtionalApplicationsFieldset';
import { AddtionalApplicationsList } from './AddtionalApplicationsList';

export const AddtionalApplicationsPage = () => {
  const [documents, setDocuments] = useState<ApplicationForRefundList[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchDocuments = () => {
    try {
      getApplicationsForRefund().then((res) => {
        setDocuments(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const { additionalApplications } = useLanguageSchema();

  return (
    <div>
      <PageHeader title={additionalApplications} />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <AddtionalApplicationsFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchDocuments={fetchDocuments}
        />
      </Drawer>
      {documents.length ? (
        <AddtionalApplicationsList
          documents={documents}
          fetchDocuments={fetchDocuments}
        />
      ) : (
        <NoData />
      )}
    </div>
  );
};
