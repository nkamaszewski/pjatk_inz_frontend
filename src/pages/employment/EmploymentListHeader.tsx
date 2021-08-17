import styled from 'styled-components';

const EmploymentListHeaderStyle = styled.div`
  background-color: #caf0f8;
  font-size: 28px;
  padding: 16px;
`;

const EmploymentListHeader = () => {
  return (
    <EmploymentListHeaderStyle className="grid-employment">
      <p>Nazwisko</p>
      <p>Imię</p>
      <p>Pion</p>
      <p>Wydział</p>
      <p>Stanowisko</p>
    </EmploymentListHeaderStyle>
  );
};

export default EmploymentListHeader;
