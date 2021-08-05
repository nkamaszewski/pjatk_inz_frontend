import Card from '@material-ui/core/Card';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPersons } from '../../../api/Person';
import { CoachDTO } from '../../../types/DTO/Coach';
import { PersonDTO } from '../../../types/DTO/Person';
import CoachListHeader from './CoachListHeader';

const CoachListStyle = styled.div`
  padding: 16px;

  .grid-employment {
    display: grid;
    grid-template-columns: 20% 20% 1fr;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  coaches: CoachDTO[];
}

const CoachList = ({ coaches }: Props) => {
  const [persons, setPersons] = useState([] as PersonDTO[]);

  useEffect(() => {
    try {
      getPersons().then((res: { data: PersonDTO[] }) => {
        setPersons(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getPersonDisplayData = (coach: CoachDTO) => {
    const person = persons.find(
      (p: PersonDTO) => p.IdPerson === coach.IdPerson
    );
    return person ?? ({} as PersonDTO);
  };

  return (
    <CoachListStyle>
      <CoachListHeader />
      {coaches.map((coach) => {
        const person = getPersonDisplayData(coach);
        return (
          <Card key={coach.IdPerson} className="grid-coach row">
            <p>{person.FirstName}</p>
            <p>{person.LastName}</p>
            <p>{coach.JobTitle}</p>
          </Card>
        );
      })}
    </CoachListStyle>
  );
};

export default CoachList;
