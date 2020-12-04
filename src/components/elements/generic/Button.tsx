import React from "react";
import useTheme from "../../../hooks/useTheme.hook";

interface Props {}

/**
 * An Button React Component.
 * @author Jannik will
 * @version 0.1
 */
const Button: React.FC<Props> = ({ children }) => {
  const {
    palette: {
      color: { secondary, primary },
    },
  } = useTheme();
  return (
    <button
      style={{
        padding: "10px 15px",
        borderRadius: "20px",
        backgroundColor: secondary,
        color: primary,
        fontSize: "1.2em",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
