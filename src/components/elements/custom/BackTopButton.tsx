import React from "react";
import TopArrowIcon from "../../icons/topArrow.icon";

interface Props {}

/**
 * An BackTopButton React Component.
 * @author Jannik Will
 * @version 0.1
 */
const BackTopButton: React.FC<Props> = () => {
  return (
    <div
      style={{
        width: "64px",
        height: "64px",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        right: 20,
        bottom: 20,
        borderRadius: 100,
      }}
    >
      <TopArrowIcon rotate="top" height="60%" />
    </div>
  );
};

export default BackTopButton;
