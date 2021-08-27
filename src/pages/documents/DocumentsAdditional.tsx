import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getApplicationsForRefund } from '../../api/ApplicationForRefund';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { ApplicationForRefundDTO } from '../../types/DTO/ApplicationForRefund';

const DocumentsAdditional = () => {
  const [documents, setDocuments] = useState<ApplicationForRefundDTO[]>([]);
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
      {/* <RoomList rooms={rooms} fetchRooms={fetchRooms} /> */}
    </div>
  );
};

export default DocumentsAdditional;
