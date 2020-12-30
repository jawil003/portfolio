import React from "react";
import Typography from "../generic/Typography";

interface Props {}

/**
 * An ResumeHeader React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ResumeHeader: React.FC<Props> = ({
  children,
}) => {
  return (
    <Typography
      variant="h4"
      italic
      color="var(--primary)"
    >
      {children}
    </Typography>
  );
};

export default ResumeHeader;
