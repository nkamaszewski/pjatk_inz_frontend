import { Avatar, Switch, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthProvider';
import { useTheme } from '../contexts/ThemeContext';
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
  grid-template-columns: 1fr 220px 80px;
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

    .avatar {
      background-color: ${({ theme }) => theme.hoverColor};
    }
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
  const {
    auth: { user },
  } = useAuth();
  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) setDarkTheme();
    else setLightTheme();
  };
  return (
    <PageHeaderStyle theme={theme}>
      <h1>{title}</h1>
      <section>
        <div className="level-1">
          <Avatar className="avatar">
            {user?.FirstName.charAt(0)}
            {user?.LastName.charAt(0)}
          </Avatar>
          <p>
            {user?.FirstName} {user?.LastName}
          </p>
        </div>
        <div className="level-2">
          <h4>{`Motyw ${theme.themeName === 'dark' ? 'ciemny' : 'jasny'}`}</h4>
          <YellowSwitch
            checked={theme.themeName === 'dark'}
            onChange={handleThemeChange}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
      </section>
      <LogoutBtn />
    </PageHeaderStyle>
  );
};

export default PageHeader;
