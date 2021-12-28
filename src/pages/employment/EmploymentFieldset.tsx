import { useLanguage } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { EmploymentDTO } from '../../types/DTO/Employment';
import EmploymentContent from './EmploymentContent';

interface Props {
  closeDrawer: () => void;
  fetchEmployments: Function;
  editEmployee?: EmploymentDTO | null;
}

const EmploymentFieldset = ({
  closeDrawer,
  fetchEmployments,
  editEmployee,
}: Props) => {
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editEmployee ? schema.edit : schema.add} ${schema.employment}`}
        closeDrawer={closeDrawer}
      />

      <EmploymentContent
        closeDrawer={closeDrawer}
        fetchEmployments={fetchEmployments}
        editEmployee={editEmployee}
      />
    </FieldsetStyled>
  );
};

export default EmploymentFieldset;
