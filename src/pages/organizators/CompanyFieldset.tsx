import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
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
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editCompany ? capFL(schema.edit) : schema.add} ${schema.companyV2}`}
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
