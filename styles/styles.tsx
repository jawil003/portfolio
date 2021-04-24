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

  #body1,
  #body2,
  * {
    font-family: ${designSystem.font
        .base.family.paragraph},
      ${designSystem.font.base.family
        .fallback};
  }

  #heading1,
  #heading2,
  #heading3,
  #heading4,
  #heading5,
  #heading6,
  #subtitle1,
  #subtitle2 {
    font-family: ${designSystem.font
        .base.family.title},
      ${designSystem.font.base.family
        .fallback};
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
