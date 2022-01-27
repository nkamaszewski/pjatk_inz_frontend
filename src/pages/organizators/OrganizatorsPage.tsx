import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import { getCompanies } from '../../api/company/Company';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { CompanyDTO } from '../../types/DTO/Company';
import CompaniesList from './CompanieList';
import CompanyFieldset from './CompanyFieldset';

export const OrganizatorsPage = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const [companies, setCompanies]: [CompanyDTO[], Function] = useState([]);

  const fetchCompanies = () => {
    try {
      getCompanies().then((res) => {
        setCompanies(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);
  const { trainingOrganizers } = useLanguageSchema();

  return (
    <div>
      <PageHeader title={trainingOrganizers} />
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <CompanyFieldset
          closeDrawer={closeDrawer}
          fetchCompanies={fetchCompanies}
        />
      </Drawer>
      {companies.length ? (
        <CompaniesList companies={companies} fetchCompanies={fetchCompanies} />
      ) : (
        <NoData />
      )}
    </div>
  );
};
