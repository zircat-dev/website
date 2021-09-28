import { css } from '@emotion/react';

const globalStyles = css`
  html {
    box-sizing: border-box;
    background-color: #222328;
  }
  * {
    box-sizing: inherit;
    &:before {
      box-sizing: inherit;
    }
    &:after {
      box-sizing: inherit;
    }
  }
  body {
    -webkit-font-smoothing: antialiased;
    padding: 0;
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f2f2f2;
    border: none;
    box-shadow: none;
  }
  ::-webkit-scrollbar-thumb {
    background: #dfdfe7;
    border: none;
    box-shadow: none;
  }
  * {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;

export { globalStyles };
