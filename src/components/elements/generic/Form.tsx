import React from "react";

interface Props {
  children?: any;
}

/**
 * An Form React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Form: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100%",
        maxWidth: "450px",
      }}
    >
      {children}
    </div>
  );
};

export default Form;
