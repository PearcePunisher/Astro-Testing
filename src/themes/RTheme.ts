import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#e32421',
    },
    secondary: {
      main: '#E3217F',
    },
    background: {
      paper: 'linear-gradient(45deg, rgba(227, 36, 33, 0.5), rgba(0, 0, 0, 0.5))',
      default: '#272934',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
      disabled: '#777777',
    },
    divider: 'rgba(255,255,255,0.2)',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: 'linear-gradient(135deg, rgba(227,36,33,0.5) 0%, rgba(29,31,33,0.8) 55%);',
        },
      },
    },
  },
};
