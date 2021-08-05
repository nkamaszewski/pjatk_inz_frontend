import styled from 'styled-components';
import StudyContent from './StudyContent';

const StudyFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchStudies: Function;
}

const StudyFieldset = ({ closeDrawer, fetchStudies }: Props) => {
  return (
    <StudyFieldsetStyle>
      <StudyContent closeDrawer={closeDrawer} fetchStudies={fetchStudies} />
    </StudyFieldsetStyle>
  );
};

export default StudyFieldset;
