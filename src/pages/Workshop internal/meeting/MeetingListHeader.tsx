import styled from 'styled-components';

const GroupListHeaderStyle = styled.div`
  background-color: rgba(196, 196, 196, 0.25);
  font-size: 28px;
  padding: 16px;
`;

const GroupListHeader = () => {
  return (
    <GroupListHeaderStyle className="grid-meeting">
      <p>Data</p>
      <p>Od godziny</p>
      <p>Do godziny</p>
    </GroupListHeaderStyle>
  );
};

export default GroupListHeader;
