import React from "react";
import Spacer from "./elements/Spacer";
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
          padding: "20%",
          display: "grid",
          gridTemplateRows: "35% auto 1fr",
          gridTemplateColumns: "auto",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            gridTemplateColumns: "84px",
            gridTemplateRows: "84px",
          }}
        >
          {icon}
        </div>
        <Spacer height="10px" />
        <div
          style={{
            display: "grid",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h5" align="center">
            {title}
          </Typography>
          <Spacer height="10px" />
          <Typography italic align="center">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
