import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
