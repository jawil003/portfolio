import React from "react";
import Typography from "./elements/Typography";

interface Props {
  title: string;
  description: string;
}

/**
 * An CategoryHeader React Component.
 * @author Jannik Will
 * @version 0.1
 */
const CategoryHeader: React.FC<Props> = ({ title, description }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography italic>{description}</Typography>
    </div>
  );
};

export default CategoryHeader;
