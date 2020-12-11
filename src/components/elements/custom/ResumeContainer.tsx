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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      {children}
    </div>
  );
};

export default ResumeContainer;
