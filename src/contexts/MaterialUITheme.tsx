import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeState } from '../hooks/useTheme';

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
  children: JSX.Element;
  theme: ThemeState;
}

const MaterialUITheme = ({ children, theme }: Props) => {
  return (
    <ThemeProvider
      theme={theme.themeName === 'dark' ? muiThemeDark : muiThemeLight}
    >
      {children}
    </ThemeProvider>
  );
};

export default MaterialUITheme;
