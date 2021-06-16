import styled from 'styled-components';
import EmploymentListHeader from './EmploymentListHeader';

const EmploymentListStyle = styled.div`
  padding: 16px;
`;

interface Props {
  data: any[];
}

const EmploymentList = ({ data }: Props) => {
  return (
    <EmploymentListStyle>
      <EmploymentListHeader />
    </EmploymentListStyle>
  );
};

export default EmploymentList;
