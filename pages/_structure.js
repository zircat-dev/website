import React from 'react';
import Head from 'next/head';

const Structure = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Zircat" />
        <meta name="author" content="Zircat" />
        <title>Zircat</title>
      </Head>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Structure;
