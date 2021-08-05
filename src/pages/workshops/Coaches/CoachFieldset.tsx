import styled from 'styled-components';
import CoachContent from './CoachContent';

const EmploymentFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchCoaches: Function;
}

const CoachFieldset = ({ closeDrawer, fetchCoaches }: Props) => {
  return (
    <EmploymentFieldsetStyle>
      <CoachContent closeDrawer={closeDrawer} fetchCoaches={fetchCoaches} />
    </EmploymentFieldsetStyle>
  );
};

export default CoachFieldset;
