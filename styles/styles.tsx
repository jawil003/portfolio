import {
  css,
  Global,
} from "@emotion/react";
import designSystem from "./designSystem";

const rules = css`
  body {
    font-family: ${designSystem.font
      .base.family};
    margin: 0px;
    font-size: ${designSystem.font.base
      .size};
    overflow-x: hidden;
    padding: 0px 20px;
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    margin: 0px;
  }
`;

const globalStyles = (
  <Global
    styles={css`
      ${rules}
    `}
  />
);

export default globalStyles;
