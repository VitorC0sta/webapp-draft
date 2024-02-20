import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2{
    font-family: "Roboto Slab", serif;
    font-weight: 400;
  }
  
  body {
    font-size: 1.6rem;
  }

`;
