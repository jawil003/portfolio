import { css } from "@emotion/react";
import React from "react";

export interface Props {
  backgroundColor?: string;
  color?: string;
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

/**
 * An Button React Component.
 * @author Jannik will
 * @version 0.1
 */
export const Button: React.FC<Props> = ({
  text,
  backgroundColor,
  color,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      css={css`
        & {
          position: relative;
          overflow: hidden;
          margin: 8px 0px;
          padding: 15px 30px;
          border-radius: 50px;
          background-color: ${disabled
            ? "grey"
            : backgroundColor};
          outline: none;
          border: none;
        }
        & .button-label {
          position: relative;
          z-index: 3;
          font-size: 1.5em;
          color: ${color};
          font-weight: 500;
        }
      `}
      className={`button-container ${
        className || ""
      }`}
    >
      <span className="button-label">
        {text}
      </span>
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: "#165c6f",
  color: "#fff",
  text: "Bitte Text eingeben",
};
