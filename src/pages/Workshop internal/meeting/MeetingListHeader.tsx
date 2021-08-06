import styled from 'styled-components';

const GroupListHeaderStyle = styled.div`
  background-color: rgba(196, 196, 196, 0.25);
  font-size: 28px;
  padding: 16px;
`;

const GroupListHeader = () => {
  return (
    <GroupListHeaderStyle className="grid-meeting">
      <p>Od</p>
      <p>Do</p>
    </GroupListHeaderStyle>
  );
};

export default GroupListHeader;
