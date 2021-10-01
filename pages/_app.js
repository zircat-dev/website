import React from 'react';
import Structure from './_structure';
import { ThemeProvider } from '../common';
import colours from '../common/Theme/colours';

const Zircat = ({ Component, pageProps }) => (
  <Structure>
    <ThemeProvider theme={{ colours }}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Structure>
);

export default Zircat;
