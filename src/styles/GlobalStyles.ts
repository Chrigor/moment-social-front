import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing:border-box;
    color:var(--white);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    overflow:hidden;
  }
  *, button, input {
    border:0;
    background:none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
