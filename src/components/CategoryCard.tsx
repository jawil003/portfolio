import React from "react";
import Typography from "./elements/Typography";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

/**
 * An CategoryCard React Component.
 * @author Jannik Will
 * @version 0.1
 */
const CategoryCard: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div
      style={{
        padding: "0px 30px",
        paddingTop: "60px",
      }}
    >
      <div
        style={{
          width: "270px",
          height: "405px",
          backgroundColor: "var(--primary)",
          background: "var(--lightgrey)",
          boxShadow: "0px 0px 2px 0px rgba(50, 50, 50, 0.25)",
        }}
      >
        <div>{icon}</div>
        <Typography variant="h5">{title}</Typography>
        <Typography>{description}</Typography>
      </div>
    </div>
  );
};

export default CategoryCard;
