import {
  css,
  Global,
} from "@emotion/react";
import designSystem from "./designSystem";

const rules = css`
  body {
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
    font-family: ${designSystem.font
        .base.family.title},
      ${designSystem.font.base.family
        .fallback};
  }
  * {
    font-family: ${designSystem.font
        .base.family.paragraph},
      ${designSystem.font.base.family
        .fallback};
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
