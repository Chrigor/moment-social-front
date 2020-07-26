import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0!important;
    padding:0!important;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100vh;
    overflow:hidden;
  }

  *, button, input {
    border:0;
    outline:0;

    font-family:'Roboto', sans-serif;
  }
`

  