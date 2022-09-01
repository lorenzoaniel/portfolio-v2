import { createGlobalStyle } from "styled-components";

const NormalizeStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    height: 100vh;
    width: 100vw;

    body {
      height: 100%;
      width: 100%;

      #root {
        height: inherit;
        width: inherit;
      }
    }
  }
`;

export default NormalizeStyle;
