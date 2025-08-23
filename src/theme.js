import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9333ea', 
    },
    secondary: {
      main: '#facc15', 
    },
    background: {
      default: '#f4f4f5',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontWeight: 800,
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
