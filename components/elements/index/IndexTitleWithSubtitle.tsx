import { css } from "@emotion/react";
import React from "react";
import FlexContainer from "../FlexContainer";
import { Typography } from "../shared/Typography";

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
export const IndexTitleWithSubtitle: React.FC<Props> = ({
  heading,
  description,
  children,
  className,
}) => {
  return (
    <FlexContainer
      rowGap="20px"
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
      <Typography
        bold="semi-bold"
        variant="h3"
      >
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
    </FlexContainer>
  );
};
