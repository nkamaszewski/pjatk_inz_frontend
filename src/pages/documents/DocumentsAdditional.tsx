import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getApplicationsForRefund } from '../../api/ApplicationForRefund';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { ApplicationForRefundList } from '../../types/DTO/ApplicationForRefund';
import DocumentAdditionalList from './DocumentAdditionalList';

const DocumentsAdditional = () => {
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

  return (
    <div>
      <PageHeader title="Wnioski dodatkowe" />
      <AddFab onClick={() => setIsOpen(true)} />
      {/* <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <RoomFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchRooms={fetchRooms}
        />
      </Drawer> */}
      <DocumentAdditionalList
        documents={documents}
        fetchDocuments={fetchDocuments}
      />
    </div>
  );
};

export default DocumentsAdditional;
