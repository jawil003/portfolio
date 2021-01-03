import {
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import React from "react";

export interface Props {
  backgroundColor?: string;
  color?: string;
  text?: string;
  variant?: "outlined" | "filled";
  onClick?: ()=>void;
}

/**
 * An Button React Component.
 * @author Jannik will
 * @version 0.1
 */
const Button: React.FC<Props> = ({
  text,
  backgroundColor,
  color,
  variant, onClick
}) => {
  const scaleX = useSpring(0);
  const colorValue = useTransform(
    scaleX,
    [0, 1],
    [backgroundColor, color],
  );
  return (
    <button
    onClick={onClick}
      onMouseOver={() => scaleX.set(1)}
      onMouseOut={() => scaleX.set(0)}
      style={{
        overflow: "hidden",
        position: "relative",
        margin: "8px 0px",
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor:
          variant === "filled"
            ? backgroundColor
            : color,
        outline: "none",
        border:
          variant === "outlined"
            ? ` 1px solid ${backgroundColor}`
            : "none",
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
      }}
    >
      <motion.span
        style={{
          position: "relative",
          zIndex: 3,
          color:
            variant === "outlined"
              ? colorValue
              : color,
          fontSize: "1.15em",
          fontWeight: 500,
        }}
      >
        {text}
      </motion.span>
      <motion.span
        style={{
          position: "absolute",
          zIndex: 2,
          top: 0,
          left: 0,
          scaleX,
          width: "100%",
          height: "100%",
          display: "block",
          backgroundColor:
            variant === "filled"
              ? "rgba(0,0,0, 0.25)"
              : backgroundColor,
        }}
      />
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: "#165c6f",
  color: "#fff",
  text: "Bitte Text eingeben",
  variant: "filled",
};

export default React.memo(Button);
