import { css } from "@emotion/react";
import React from "react";
import designSystem from "../../../styles/designSystem";

export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

/**
 * An Button React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const Button: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      css={css`
        & {
          padding: 0.7em 1em;
          background-color: ${designSystem
            .colors.brand.secondary};
          color: ${designSystem.colors
            .brand.primary};
          outline: none;
          border: none;
          border-radius: 3.125em;
        }
        &:disabled {
          opacity: 0.35;
        }
        &:hover:not(:disabled) {
          background-color: #015b7c;
        }
      `}
      {...props}
      className={className}
    >
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  type: "submit",
};
