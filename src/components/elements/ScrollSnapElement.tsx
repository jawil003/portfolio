import React from "react";

interface Props {
  align: "start" | "center" | "end";
}

/**
 * An ScrollSnapElement React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ScrollSnapElement: React.FC<Props> = ({ align, children }) => {
  return <div style={{ scrollSnapAlign: align }}>{children}</div>;
};

export default ScrollSnapElement;
