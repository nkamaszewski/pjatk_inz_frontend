import { Drawer } from '@material-ui/core';
import { useApplicationsForRefundQuery } from 'api/applicationForRefund/useApplicationsForRefundQuery';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { AddtionalApplicationsFieldset } from './AddtionalApplicationsFieldset';
import { AddtionalApplicationsList } from './AddtionalApplicationsList';

export const AddtionalApplicationsPage = () => {
  const additionalApplicationsQuery = useApplicationsForRefundQuery();
  const { open, openDrawer, closeDrawer } = useDrawer();

  const { additionalApplications } = useLanguageSchema();

  return (
    <div>
      <PageHeader title={additionalApplications} />
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <AddtionalApplicationsFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {additionalApplicationsQuery.data?.data.length ? (
        <AddtionalApplicationsList
          additionalApplications={additionalApplicationsQuery.data.data}
        />
      ) : (
        <NoData />
      )}
    </div>
  );
};
