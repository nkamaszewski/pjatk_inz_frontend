import styled from 'styled-components';

const EmploymentListHeaderStyle = styled.div`
  background-color: rgba(196, 196, 196, 0.25);
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
