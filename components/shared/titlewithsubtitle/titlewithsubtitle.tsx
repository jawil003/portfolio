import { css } from "@emotion/react";
import React from "react";
import { FlexContainer } from "../flexcontainer/flexcontainer";
import { Typography } from "../typography";

export interface Props {
  heading: string;
  description: string;
  className?: string;
}

/**
 * An HeaderWithSubtitle React Component.
 * @author
 * @version 0.1
 */
export const TitleWithSubtitle: React.FC<Props> = ({
  heading,
  description,
  children,
  className,
}) => {
  return (
    <FlexContainer
      rowGap="1em"
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
        component="h1"
      >
        {heading}
      </Typography>
      <Typography
        className="subtitle"
        italic
      >
        {description}
      </Typography>
      {children}
    </FlexContainer>
  );
};

TitleWithSubtitle.displayName =
  "TitleWithSubtitle";
