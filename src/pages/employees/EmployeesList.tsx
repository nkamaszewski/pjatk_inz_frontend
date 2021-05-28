import styled from 'styled-components';
import EmployeesListHeader from './EmployeesListHeader';

const EmployeesListStyle = styled.div`
  padding: 16px;
`;

interface Props {
  data: any[];
}

const EmployeesList = ({ data }: Props) => {
  return (
    <EmployeesListStyle>
      <EmployeesListHeader />
    </EmployeesListStyle>
  );
};

export default EmployeesList;
