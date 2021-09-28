import React from 'react';
import Structure from './_structure';

const Zircat = ({ Component, pageProps }) => (
  <Structure>
    <Component {...pageProps} />
  </Structure>
);

export default Zircat;
