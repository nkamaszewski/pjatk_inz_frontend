import styled from 'styled-components';
import { EmploymentDTO } from '../../types/DTO/Employment';
import EmploymentListHeader from './EmploymentListHeader';

const EmploymentListStyle = styled.div`
  padding: 16px;
`;

interface Props {
  employees: EmploymentDTO[];
}

const EmploymentList = ({ employees }: Props) => {
  return (
    <EmploymentListStyle>
      <EmploymentListHeader />
    </EmploymentListStyle>
  );
};

export default EmploymentList;
