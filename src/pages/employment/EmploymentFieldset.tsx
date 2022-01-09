import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { EmploymentDTO } from '../../types/DTO/Employment';
import EmploymentContent from './EmploymentContent';

interface Props {
  closeDrawer: () => void;
  editEmployee?: EmploymentDTO | null;
}

const EmploymentFieldset = ({ closeDrawer, editEmployee }: Props) => {
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editEmployee ? capFL(schema.edit) : schema.add} ${
          schema.employment
        }`}
        closeDrawer={closeDrawer}
      />

      <EmploymentContent
        closeDrawer={closeDrawer}
        editEmployee={editEmployee}
      />
    </FieldsetStyled>
  );
};

export default EmploymentFieldset;
