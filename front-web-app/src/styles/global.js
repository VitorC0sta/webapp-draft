import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    .--toastify-color-progress-light {
      color: ${({theme}) => theme.COLORS.DARKBLUE_700}
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2{
    font-weight: 600;
  }
  
  body {
    font-size: 1.6rem;
  }

`;
