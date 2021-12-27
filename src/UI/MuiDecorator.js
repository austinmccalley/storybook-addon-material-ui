import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, StyledEngineProvider, createTheme, adaptV4Theme } from '@mui/material/styles';

import withChannel from '../adk/WithChannel';
import { EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK } from '../config';

const currentTheme = data => {
  try {
    const theme = data.themes[data.themeInd];
    return createTheme(adaptV4Theme(theme));
  } catch (err) {
    return createTheme(adaptV4Theme({}));
  }
};

const MuiDecorator = ({ data, story }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={currentTheme(data)}>
      <div>{story}</div>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default withChannel({ EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK })(
  MuiDecorator
);
