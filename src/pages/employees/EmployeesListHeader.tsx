import styled from 'styled-components';

const EmployeesListHeaderStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  background-color: rgba(196, 196, 196, 0.25);
  font-size: 28px;
  padding: 16px;
`;

const EmployeesListHeader = () => {
  return (
    <EmployeesListHeaderStyle>
      <p>Nazwisko</p>
      <p>Imię</p>
      <p>Pion</p>
      <p>Wydział</p>
      <p>Stanowisko</p>
    </EmployeesListHeaderStyle>
  );
};

export default EmployeesListHeader;
