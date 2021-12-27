import React from 'react';
import { createTheme, adaptV4Theme } from '@mui/material/styles';

import { EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK } from './config';
import MuiDecorator from './UI/MuiDecorator';
import { createStore } from './adk/decorator';

const lightBaseTheme = createTheme(
  adaptV4Theme({
    typography: {
      useNextVariants: true,
    },
  })
);
const darkBaseTheme = createTheme(
  adaptV4Theme({
    palette: {
      mode: 'dark',
    },
    typography: {
      useNextVariants: true,
    },
  })
);

lightBaseTheme.themeName = 'Light Theme';
darkBaseTheme.themeName = 'Dark Theme';

export function muiTheme(themes) {
  const store = createStore(
    EVENT_ID_INIT,
    EVENT_ID_DATA,
    EVENT_ID_BACK,
    'iframe'
  );

  store.onConnected(() =>
    store.sendInit({ themes, themeInd: 0 })
  );

  return (story) => {
    const storyItem = story();
    return (
      <MuiDecorator
        story={storyItem}
        initData={{ themes, themeInd: 0 }}
      />
    );
  };
}
