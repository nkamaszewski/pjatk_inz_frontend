import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { StudiesListDTO } from '../../../types/DTO/Study';
import StudyListHeader from './StudyListHeader';

const StudyListStyle = styled.div`
  padding: 16px;

  .grid-coach {
    display: grid;
    grid-template-columns: repeat(5, 20%);
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  studies: StudiesListDTO[];
}

const StudyList = ({ studies }: Props) => {
  // useEffect(() => {
  //   try {
  //     getPersons().then((res: { data: PersonDTO[] }) => {
  //       setPersons(res.data);
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [coaches]);

  // const getPersonDisplayData = (coach: CoachDTO) => {
  //   const person = persons.find(
  //     (p: PersonDTO) => p.IdPerson === coach.IdPerson
  //   );
  //   return person ?? ({} as PersonDTO);
  // };

  return (
    <StudyListStyle>
      <StudyListHeader />
      {studies.map((study) => {
        // const person = getPersonDisplayData(coach);
        return (
          <Card key={study.IdEducation} className="grid-coach row">
            <p>{study.FieldOfStudy}</p>
            <p>{study.studyUniversity.Name}</p>
            <p>{study.studyUniversity.City}</p>
            <p>{study.studysStudyMode.Name}</p>
            <p>{study.studysGraduateDegree.Name}</p>
          </Card>
        );
      })}
    </StudyListStyle>
  );
};

export default StudyList;
