import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import EmploymentFieldset from './EmploymentFieldset';
import EmploymentList from './EmploymentList';
import { useEmploymentQuery } from './useEmploymentQuery';

const EmploymentPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const employmentQuery = useEmploymentQuery();
  const schema = useLanguageSchema();

  return (
    <div>
      <PageHeader title={schema.employees} />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <EmploymentFieldset closeDrawer={() => setIsOpen(false)} />
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
