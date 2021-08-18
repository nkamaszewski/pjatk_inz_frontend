import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import StudyContent from './StudyContent';
interface Props {
  closeDrawer: () => void;
  fetchStudies: Function;
}

const StudyFieldset = ({ closeDrawer, fetchStudies }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Dodaj Studia`} closeDrawer={closeDrawer} />
      <StudyContent closeDrawer={closeDrawer} fetchStudies={fetchStudies} />
    </FieldsetStyled>
  );
};

export default StudyFieldset;
