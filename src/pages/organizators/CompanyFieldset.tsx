import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { CompanyDTO } from '../../types/DTO/Company';
import CompanyContent from './CompanyContent';

interface Props {
  closeDrawer: () => void;
  fetchCompanies: () => void;
  editCompany?: CompanyDTO | null;
}

const CompanyFieldset = ({
  closeDrawer,
  fetchCompanies,
  editCompany,
}: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editCompany ? 'Edytuj' : 'Dodaj'} firmę`}
        closeDrawer={closeDrawer}
      />
      <CompanyContent
        closeDrawer={closeDrawer}
        fetchCompanies={fetchCompanies}
        editCompany={editCompany}
      />
    </FieldsetStyled>
  );
};

export default CompanyFieldset;
