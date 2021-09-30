import { Avatar, Switch, withStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useAuth } from '../providers/AuthProvider';
import { useTheme } from '../providers/ThemeContext';
import { LanguagePanel } from './LanguagePanel';
import { LogoutBtn } from './LogoutBtn';

const YellowSwitch = withStyles({
  switchBase: {
    color: '#F7BF50',
    '&$checked': {
      color: ' #F7BF50',
    },
    '&$checked + $track': {
      backgroundColor: ' #F7BF50',
    },
  },
  checked: {},
  track: {},
})(Switch);

const PageHeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 180px auto 80px;
  grid-column-gap: 16px;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryBackground};
  color: ${({ theme }) => theme.primaryColor};
  width: 100%;
  height: 90px;

  h1 {
    padding-left: 36px;
  }

  .level-1 {
    display: grid;
    grid-template-columns: 56px 1fr;
    align-items: center;
  }

  @keyframes colorAnimation {
    from {
      color: ${({ theme }) => theme.primaryColor};
    }
    to {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  .level-1:hover {
    cursor: pointer;
    animation: colorAnimation 1s;
    animation-fill-mode: forwards;
  }

  .level-2 {
    display: grid;
    grid-template-columns: 120px 80px;
    align-items: center;
  }
`;

interface Props {
  title: string;
}

const PageHeader = ({ title }: Props) => {
  const { theme, setDarkTheme, setLightTheme } = useTheme();
  const history = useHistory();
  const {
    auth: { user },
  } = useAuth();
  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) setDarkTheme();
    else setLightTheme();
  };

  const handleUserSettings = () => history.push('/moje-konto');

  return (
    <PageHeaderStyle theme={theme}>
      <h1>{title}</h1>
      <LanguagePanel />
      <div className="level-2">
        <h4>{`Motyw ${theme.themeName === 'dark' ? 'ciemny' : 'jasny'}`}</h4>
        <YellowSwitch
          checked={theme.themeName === 'dark'}
          onChange={handleThemeChange}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </div>
      <div onClick={handleUserSettings} className="level-1">
        <Avatar>
          {user?.FirstName.charAt(0)}
          {user?.LastName.charAt(0)}
        </Avatar>
        <p>
          {user?.FirstName} {user?.LastName}
        </p>
      </div>

      <LogoutBtn />
    </PageHeaderStyle>
  );
};

export default PageHeader;
