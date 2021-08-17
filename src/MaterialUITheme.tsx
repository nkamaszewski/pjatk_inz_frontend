import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#023047',
    },
    // secondary: {
    //   main: green[500],
    // },
  },
});

const MaterialUITheme = ({ children }: { children: JSX.Element }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialUITheme;
