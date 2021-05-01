import { css } from "@emotion/react";
import React from "react";

export interface Props {
  text: string;
  variant?: "error" | "success";
  onClick?: () => void;
  className?: string;
}

/**
 * An Button React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const Button: React.FC<Props> = ({
  text,
  variant,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      css={css`
        & {
          background-color: ${variant ===
          "success"
            ? "#3d899b"
            : "#B74A66"};
          padding: 0.8333333333333334em
            1.6666666666666667em;
          border: none;
          outline: none;
          height: 2.8333333333333335em;
          min-width: 7.5em;
          border-radius: 1.25em;
          font-style: normal;
          font-weight: 400;
          font-weight: normal;
          font-size: 0.8333333333333334em;
          color: #fff;
        }
      `}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  variant: "success",
};
