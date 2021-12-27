import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { blue, yellow } from '@mui/material/colors';


export const overridings = {
  palette: {
    primary: {
      main: yellow[500],
      contrastText: '#000'
    },
    secondary: {
      main: blue[500],
      contrastText: '#fff'
    },
    type: 'dark'
  },
  themeName: 'Yellow and Blue Theme'
};

export default createTheme(adaptV4Theme(overridings));
