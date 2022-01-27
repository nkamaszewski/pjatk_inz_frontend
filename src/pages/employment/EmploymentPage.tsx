import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import EmploymentFieldset from './EmploymentFieldset';
import EmploymentList from './EmploymentList';
import { useEmploymentQuery } from './useEmploymentQuery';

const EmploymentPage = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const employmentQuery = useEmploymentQuery();
  const schema = useLanguageSchema();

  return (
    <div>
      <PageHeader title={schema.employees} />
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <EmploymentFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {employmentQuery.data?.data.length ? (
        <EmploymentList employments={employmentQuery.data.data} />
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default EmploymentPage;
