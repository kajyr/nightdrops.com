import { createGlobalStyle } from "styled-components"

const black = "#24292e"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    margin: 2rem 0;
    color: ${black};
  }

`

export default GlobalStyle
