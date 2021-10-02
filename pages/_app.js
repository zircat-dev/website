import React from 'react';
import Structure from './_structure';
import { ThemeProvider } from '../common';
import colors from '../common/Theme/colors';

const Zircat = ({ Component, pageProps }) => (
  <Structure>
    <ThemeProvider theme={{ colors }}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Structure>
);

export default Zircat;
