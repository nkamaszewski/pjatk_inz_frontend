import styled from 'styled-components';

const StudyListHeaderStyle = styled.div`
  background-color: rgba(196, 196, 196, 0.25);
  font-size: 28px;
  padding: 16px;
`;

const StudyListHeader = () => {
  return (
    <StudyListHeaderStyle className="grid-coach">
      <p>Kierunek</p>
      <p>Uczelnia</p>
      <p>Miasto</p>
      <p>Tryb</p>
      <p>Poziom</p>
    </StudyListHeaderStyle>
  );
};

export default StudyListHeader;
