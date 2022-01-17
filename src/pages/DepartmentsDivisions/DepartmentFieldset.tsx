import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { DepartmentDTO } from '../../types/DTO/Department';
import DepartmentContent from './DepartmentContent';

interface Props {
  closeDrawer: () => void;
  editDepartment: DepartmentDTO | null;
}

const DepartmentFieldset = ({ closeDrawer, editDepartment }: Props) => {
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset title={schema.editDepartment} closeDrawer={closeDrawer} />
      <DepartmentContent
        closeDrawer={closeDrawer}
        editDepartment={editDepartment}
      />
    </FieldsetStyled>
  );
};

export default DepartmentFieldset;
