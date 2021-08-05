import styled from 'styled-components';

const CoachListHeaderStyle = styled.div`
  background-color: rgba(196, 196, 196, 0.25);
  font-size: 28px;
  padding: 16px;
`;

const CoachListHeader = () => {
  return (
    <CoachListHeaderStyle className="grid-coach">
      <p>Imię</p>
      <p>Nazwisko</p>
      <p>Tytuł zawodowy</p>
    </CoachListHeaderStyle>
  );
};

export default CoachListHeader;
