import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { green, purple, blue } from '@mui/material/colors';

const darkGreen = green[900];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  palette: {
    primary: {
      light: accentPurple,
      main: blue[200],
      dark: darkPurple,
    },
    secondary: {
      main: darkGreen,
    },
    type: 'dark'
  },
  themeName: 'Pale Blue Theme'
};

export default createTheme(adaptV4Theme(overridings));
