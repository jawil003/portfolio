import {
  css,
  Global,
} from "@emotion/react";
import designSystem from "./designSystem";

const rules = css`
  body {
    font-family: ${designSystem.font
      .base.family};

    font-size: ${designSystem.font.base
      .size};
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
