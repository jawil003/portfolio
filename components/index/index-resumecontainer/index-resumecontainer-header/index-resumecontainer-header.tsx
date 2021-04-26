import designSystem from "../../../../styles/designSystem";
import React from "react";
import { Typography } from "../../../shared/typography";

/**
 * An ResumeHeader React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexResumeContainerHeader: React.FC = ({
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
