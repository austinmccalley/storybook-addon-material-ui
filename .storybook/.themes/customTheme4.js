import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';


export const overridings = {
  palette: {
    primary: {
      main: yellow[500],
      contrastText: '#000'
    },
    secondary: {
      main: red[500],
      contrastText: '#fff'
    },
    type: 'dark'
  },
  themeName: 'Yellow and Red Theme'
};

export default createTheme(adaptV4Theme(overridings));
