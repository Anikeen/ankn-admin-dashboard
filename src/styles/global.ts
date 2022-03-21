import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  input,
  button,
  fieldset {
    outline: none;
    border: none;
    font-size: inherit;
    font-family: inherit;
  }
  button {
    background: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: Nunito,sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #333;
    overflow: hidden;
  }
`