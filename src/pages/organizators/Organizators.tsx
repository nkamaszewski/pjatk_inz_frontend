import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getCompanies } from '../../api/Company';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { CompanyDTO } from '../../types/DTO/Company';
import CompaniesList from './CompanieList';
import CompanyFieldset from './CompanyFieldset';

const Organizators = () => {
  const [companies, setCompanies]: [CompanyDTO[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div>
      <PageHeader title="Organizatorzy szkoleń" />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <CompanyFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchCompanies={fetchCompanies}
        />
      </Drawer>
      <CompaniesList companies={companies} fetchCompanies={fetchCompanies} />
    </div>
  );
};

export default Organizators;
