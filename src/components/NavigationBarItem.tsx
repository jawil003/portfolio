import React from "react";
import Typography from "./elements/Typography";

interface Props {
  icon: JSX.Element;
}

/**
 * An NavigationBarItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBarItem: React.FC<Props> = ({ children, icon }) => {
  return (
    <div
      style={{
        maxHeight: "41px",
        minWidth: "150px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "baseline",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <div style={{ flex: 0.2 }}>{icon}</div>
      <Typography variant="b1" align="center">
        {children}
      </Typography>
    </div>
  );
};

export default NavigationBarItem;
