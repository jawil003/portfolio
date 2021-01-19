import { css } from "@emotion/react";
import React from "react";

interface Props {
  color: string;
  className?: string;
}

/**
 * An ColorContainer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ColorContainer: React.FC<Props> = ({
  children,
  color,
  className,
}) => {
  return (
    <div
      className={`color-container ${
        className || ""
      }`}
      css={css`
        & {
          background-color: ${color};
          position: relative;
          left: -20px;
          width: calc(100% + 40px);
        }
      `}
    >
      {children}
    </div>
  );
};

export default ColorContainer;
