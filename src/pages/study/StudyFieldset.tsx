import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { StudiesListDTO } from '../../types/DTO/Study';
import StudyContent from './StudyContent';
interface Props {
  closeDrawer: () => void;
  fetchStudies: Function;
  editStudy?: StudiesListDTO | null;
}

const StudyFieldset = ({ closeDrawer, fetchStudies, editStudy }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Dodaj Studia`} closeDrawer={closeDrawer} />
      <StudyContent
        closeDrawer={closeDrawer}
        fetchStudies={fetchStudies}
        editStudy={editStudy}
      />
    </FieldsetStyled>
  );
};

export default StudyFieldset;
