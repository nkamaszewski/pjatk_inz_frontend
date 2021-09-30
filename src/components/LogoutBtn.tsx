import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@material-ui/core';
import styled from 'styled-components';
import { useAuth } from '../providers/AuthProvider';
import { useTheme } from '../providers/ThemeContext';

const LogoutBtnStyled = styled.div`
  font-size: 22px;
  @keyframes colorAnimation {
    from {
      color: ${({ theme }) => theme.primaryColor};
    }
    to {
      color: ${({ theme }) => theme.error};
    }
  }
  &:hover {
    cursor: pointer;
    animation: colorAnimation 1s;
    animation-fill-mode: forwards;
  }
`;

interface Props {}

export const LogoutBtn = ({}: Props) => {
  const { theme } = useTheme();
  const { logOut } = useAuth();
  return (
    <Tooltip title="wyloguj">
      <LogoutBtnStyled onClick={logOut} theme={theme}>
        <FontAwesomeIcon icon={faPowerOff} />
      </LogoutBtnStyled>
    </Tooltip>
  );
};
