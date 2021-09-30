import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ReactNode } from 'react';
import { useTheme } from './ThemeContext';

const muiThemeDark = createMuiTheme({
  palette: {
    primary: {
      main: '#023047',
    },
    // secondary: {
    //   main: green[500],
    // },
  },
});

const muiThemeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#bbdefb',
    },
    // secondary: {
    //   main: green[500],
    // },
  },
});

interface Props {
  children: ReactNode;
}

const MaterialUIThemeProvider = ({ children }: Props) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider
      theme={theme.themeName === 'dark' ? muiThemeDark : muiThemeLight}
    >
      {children}
    </ThemeProvider>
  );
};

export default MaterialUIThemeProvider;
