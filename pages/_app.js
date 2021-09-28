import React from 'react';
import Structure from './_structure';
import { ThemeProvider } from '../common';

const Zircat = ({ Component, pageProps }) => (
  <Structure>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </Structure>
);

export default Zircat;
