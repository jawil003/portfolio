import React from "react";
import Typography from "../generic/Typography";

interface Props {
  title: string;
  description: string;
}

/**
 * An CategoryHeader React Component.
 * @author Jannik Will
 * @version 0.1
 */
const CategoryHeader: React.FC<Props> = ({
  title,
  description,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "100vw",
        padding: "0px 20px"
      }}
    >
      <Typography
        align="center"
        variant="h4"
        wrap
       
      >
        {title}
      </Typography>
      <Typography
        wrap
        align="center"
        italic
        
      >
        {description}
      </Typography>
    </div>
  );
};

export default CategoryHeader;
