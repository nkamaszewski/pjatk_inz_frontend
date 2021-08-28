import { Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteCompany } from '../../api/Company';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../contexts/NotificationContext';
import { CompanyDTO } from '../../types/DTO/Company';
import { RoomDTO } from '../../types/DTO/Room';
import CompaniesListHeader from './CompaniesListHeader';
import CompanyFieldset from './CompanyFieldset';

const CompaniesListStyle = styled.div`
  padding: 16px;

  .grid-company {
    display: grid;
    grid-template-columns: 1fr 160px 1fr 1fr 56px 56px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  companies: CompanyDTO[];
  fetchCompanies: () => void;
}

const CompaniesList = ({ companies, fetchCompanies }: Props) => {
  const [editCompany, setEditCompany]: [RoomDTO | null, Function] =
    useState(null);
  const { setSnackbar } = useSnackbar();
  const handleCloseDrawer = () => setEditCompany(null);
  const handleDeleteItem = async (id: string) => {
    try {
      await deleteCompany(id);
      fetchCompanies();
      setSnackbar(createSnackbarSuccess('usunięto firmę'));
    } catch (e) {
      setSnackbar(createSnackbarError('nie udało się usunąć firmy!'));
    }
  };
  return (
    <CompaniesListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editCompany)}
        onClose={handleCloseDrawer}
      >
        <CompanyFieldset
          closeDrawer={handleCloseDrawer}
          fetchCompanies={fetchCompanies}
          editCompany={editCompany}
        />
      </Drawer>
      <CompaniesListHeader />
      {companies.map((company) => (
        <Card key={company.IdCompany} className="grid-company row">
          <p>{company.Name}</p>
          <p>{company.TIN}</p>
          <p>
            {company.Street} {company.Number}
          </p>
          <p>
            {company.PostalCode} {company.City}
          </p>

          <EditBtn onClick={() => setEditCompany(company)} />
          <DeleteBtn onClick={() => handleDeleteItem(company.IdCompany)} />
        </Card>
      ))}
    </CompaniesListStyle>
  );
};

export default CompaniesList;
