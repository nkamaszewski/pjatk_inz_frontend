import styled from 'styled-components';
import EmploymentContent from './EmploymentContent';

const EmploymentFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchEmployments: Function;
}

const EmploymentFieldset = ({ closeDrawer, fetchEmployments }: Props) => {
  return (
    <EmploymentFieldsetStyle>
      <EmploymentContent
        closeDrawer={closeDrawer}
        fetchEmployments={fetchEmployments}
      />
    </EmploymentFieldsetStyle>
  );
};

export default EmploymentFieldset;
