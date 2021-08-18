import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import EmploymentContent from './EmploymentContent';

interface Props {
  closeDrawer: () => void;
  fetchEmployments: Function;
}

const EmploymentFieldset = ({ closeDrawer, fetchEmployments }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Dodaj zatrudnienie`} closeDrawer={closeDrawer} />

      <EmploymentContent
        closeDrawer={closeDrawer}
        fetchEmployments={fetchEmployments}
      />
    </FieldsetStyled>
  );
};

export default EmploymentFieldset;
