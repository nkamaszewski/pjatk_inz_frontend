import { Switch, withStyles } from '@material-ui/core';
import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext, useTheme } from '../contexts/ThemeContext';
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
  grid-template-columns: 1fr 120px 80px 80px;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryBackground};
  color: ${({ theme }) => theme.primaryColor};
  width: 100%;
  height: 90px;

  h1 {
    padding-left: 36px;
  }
`;

interface Props {
  title: string;
}

const PageHeader = ({ title }: Props) => {
  const { theme, setDarkTheme, setLightTheme } = useTheme();
  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) setDarkTheme();
    else setLightTheme();
  };
  return (
    <PageHeaderStyle theme={theme}>
      <h1>{title}</h1>
      <h4>{`Motyw ${theme.themeName === 'dark' ? 'ciemny' : 'jasny'}`}</h4>
      <YellowSwitch
        checked={theme.themeName === 'dark'}
        onChange={handleThemeChange}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <LogoutBtn />
    </PageHeaderStyle>
  );
};

export default PageHeader;
