import React from "react";

interface Props {}

/**
 * An ResumeContainer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ResumeContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default ResumeContainer;
