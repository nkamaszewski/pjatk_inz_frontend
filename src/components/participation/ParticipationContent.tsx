import styled from 'styled-components';

const ParticipationContentStyled = styled.div`
  .grid-group {
    padding: 16px;
    margin: 4px 0;
    display: grid;
    grid-template-columns: 200px 1fr 56px;
  }
`;

interface ParticipationContentProps {}

export const ParticipationContent = ({}: ParticipationContentProps) => {
  return (
    <ParticipationContentStyled>
      <header className="grid-group">
        <p>Imię</p>
        <p>Nazwisko</p>
      </header>
      {/* {employeeGroup.map((eg) => (
        <Card key={eg.IdEmployeeGroup} className="grid-group">
          <p>{eg.employeeGroupGroup.Name}</p>
          <p>{eg.employeeGroupGroup.NumberOfPerson}</p>
          <DeleteBtn onClick={() => handleDeleteItem(eg.IdEmployeeGroup)} />
        </Card>
      ))} */}
    </ParticipationContentStyled>
  );
};
