import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: "Roboto Condensed", sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`
export default GlobalStyle
