import { css } from "@emotion/core";
import theme from "../theme/";

export default css`
  html,
  body {
    font-family: ${theme.fonts.baseLight};
    background-color: ${theme.colors.white};
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.xs};
    width: 100%;
  }

  html {
    display: flex;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .main {
    flex-grow: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  b,
  storng {
    font-weight: normal;
    font-family: ${theme.fonts.heading};
  }
  a {
    color: #16993b;
    &:hover {
      color: #63c56c;
    }
    &:focus,
    &:active {
      color: #0b6d3b;
    }
    &:hover,
    &:focus {
      text-decoration: none !important;
    }
  }
`;
