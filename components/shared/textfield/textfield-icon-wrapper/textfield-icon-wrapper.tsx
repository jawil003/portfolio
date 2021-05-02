import {
  Theme,
  css,
  Interpolation,
} from "@emotion/react";
import React from "react";

export interface Props {
  align: "left" | "right";
  children: React.SVGProps<SVGSVGElement> & {
    css?: Interpolation<Theme>;
  };
}

/**
 * An TextfieldIconWrapper React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const TextfieldIconWrapper: React.FC<Props> = ({
  align,
  children,
}) => {
  return (
    <div
      css={css`
        & {
          position: absolute;
          top: 0;
          right: ${align === "right"
            ? 0
            : ""};
          left: ${align === "left"
            ? 0
            : ""};
          height: 3.0625em;
          width: 3.0625em;
        }
        & > svg {
          fill: #000;
          padding: 10% 0.8em
            calc(10% + 0.2em) 10%;
          width: 100%;
          height: 100%;
        }
      `}
    >
      {children}
    </div>
  );
};
