import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { green, purple, blue, red, yellow } from '@mui/material/colors';

const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  palette: {
    primary: {
      light: accentGreen,
      main: primaryGreen,
      dark: darkGreen,
      contrastText: '#fff'
    },
    secondary: {
      light: accentPurple,
      main: primaryPurple,
      dark: darkPurple,
      contrastText: '#fff'
    }
  },
  themeName: 'Custom Light Theme'
};

export default createTheme(adaptV4Theme(overridings));
