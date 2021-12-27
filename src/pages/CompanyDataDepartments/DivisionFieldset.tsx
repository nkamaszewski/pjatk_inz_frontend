import { useLanguage } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { DivisionDTO } from '../../types/DTO/Division';
import DivisionContent from './DivisionContent';

interface Props {
  closeDrawer: () => void;
  fetchDivisionsDepartments: () => void;
  editDivision: DivisionDTO | null;
}

const DivisionFieldset = ({
  closeDrawer,
  fetchDivisionsDepartments,
  editDivision,
}: Props) => {
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FieldsetStyled>
      <HeaderFieldset title={schema.editDepartment} closeDrawer={closeDrawer} />
      <DivisionContent
        closeDrawer={closeDrawer}
        fetchDivisionsDepartments={fetchDivisionsDepartments}
        editDivision={editDivision}
      />
    </FieldsetStyled>
  );
};

export default DivisionFieldset;
