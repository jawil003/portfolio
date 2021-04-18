import { css } from "@emotion/react";
import React from "react";
import { Typography } from "./Typography";

interface Props {
  heading: string;
  description: string;
  css?: {
    root?: any;
    title?: any;
    subtitle?: any;
  };
  className?: string;
}

/**
 * An HeaderWithSubtitle React Component.
 * @author
 * @version 0.1
 */
const TitleWithSubtitle: React.FC<Props> = ({
  heading,
  description,
  children,
  className,
}) => {
  return (
    <div
      className={className}
      css={[
        css`
          & {
            display: inline-block;
            margin: 0;
            max-width: 500px;
          }
          & > .subtitle {
            width: 0;
            min-width: 100%;
          }
        `,
      ]}
    >
      <Typography variant="h3">
        {heading}
      </Typography>
      <Typography
        className="subtitle"
        italic
        wordSpacing={11}
      >
        {description}
      </Typography>
      {children}
    </div>
  );
};

export default TitleWithSubtitle;
