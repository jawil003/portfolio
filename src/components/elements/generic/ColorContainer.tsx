import React from "react";

interface Props {
  color: string;
}

/**
 * An ColorContainer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ColorContainer: React.FC<Props> = ({
  children,
  color,
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
        position: "relative",
        left: "-20px",
        width: "calc(100% + 40px)",
      }}
    >
      {children}
    </div>
  );
};

export default ColorContainer;
