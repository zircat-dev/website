import React, { useEffect } from 'react';
import { setConfiguration } from 'react-grid-system';
import { Global } from '@emotion/react';
import { globalStyles } from './globalStyles';

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    console.log('hit');
    setConfiguration({
      gutterWidth: 32,
      gridColumns: 12,
      breakpoints: [375, 768, 1024, 1440],
      containerWidths: ['100%', 1224],
    });
  }, []);

  return (
    <>
      <Global styles={globalStyles} />
      {children}
    </>
  );
};

export { ThemeProvider };
