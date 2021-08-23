import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { DepartmentDTO } from '../../types/DTO/Department';
import { DivisionDTO } from '../../types/DTO/Division';
import DepartmentContent from './DepartmentContent';

interface Props {
  closeDrawer: () => void;
  fetchDivisionsDepartments: () => void;
  editDepartment: DepartmentDTO | null;
  divisions: DivisionDTO[];
}

const DepartmentFieldset = ({
  closeDrawer,
  fetchDivisionsDepartments,
  editDepartment,
  divisions,
}: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Edytuj pion`} closeDrawer={closeDrawer} />
      <DepartmentContent
        closeDrawer={closeDrawer}
        fetchDivisionsDepartments={fetchDivisionsDepartments}
        editDepartment={editDepartment}
        divisions={divisions}
      />
    </FieldsetStyled>
  );
};

export default DepartmentFieldset;
