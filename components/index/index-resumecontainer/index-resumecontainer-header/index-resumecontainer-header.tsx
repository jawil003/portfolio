import React from "react";
import designSystem from "../../../../styles/designSystem";
import { Typography } from "../../../shared/typography";

export interface Props {}

/**
 * An ResumeHeader React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexResumeContainerHeader: React.FC<Props> = ({
  children,
}) => {
  return (
    <Typography
      variant="h4"
      bold="semi-bold"
      italic
      color={
        designSystem.colors.brand
          .secondaryText
      }
    >
      {children}
    </Typography>
  );
};
