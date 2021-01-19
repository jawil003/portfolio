import { css } from "@emotion/react";
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
  onClick?: () => void;
  className?: string;
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
  variant,
  onClick,
  className,
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
      onFocus={() => scaleX.set(1)}
      onBlur={() => scaleX.set(0)}
      css={css`
        & {
          position: relative;
          overflow: hidden;
          margin: 8px 0px;
          padding: 10px 20px;
          border-radius: 5px;
          background-color: ${variant ===
          "filled"
            ? backgroundColor
            : color};
          outline: none;
          border: ${variant ===
          "outlined"
            ? ` 1px solid ${backgroundColor}`
            : "none}"};
          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px
              rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px
              rgba(0, 0, 0, 0.12);
        }
        & > .button-label {
          position: relative;
          z-index: 3;
          font-size: 1.15em;
          font-weight: 500;
        }
        &
          > .button-animated-background {
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
        }
      `}
      className={`button-container ${
        className || ""
      }`}
    >
      <motion.span
        className="button-label"
        style={{
          color:
            variant === "outlined"
              ? colorValue
              : color,
        }}
      >
        {text}
      </motion.span>
      <motion.div
        className="button-animated-background"
        style={{
          scaleX,
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
