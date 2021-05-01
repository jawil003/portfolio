import { css } from "@emotion/react";
import React from "react";

export interface Props {
  color?: "green" | "white" | "both";
  active: boolean;
  onChange?: (
    event: React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >,
    value: boolean,
  ) => void;
}

const resolveColors = (
  color: Props["color"],
  active: boolean,
) => {
  switch (color) {
    case "green": {
      return "var(--greenblue)";
    }
    case "white": {
      return "var(--white)";
    }
    default: {
      if (active)
        return "var(--greenblue)";
      return "var(--white)";
    }
  }
};

/**
 * An Switch React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const Switch: React.FC<Props> = ({
  active,
  onChange,
  color,
}) => {
  return (
    <div
      aria-hidden="true"
      onClick={(e) =>
        onChange?.(e, !active)
      }
      css={css`
        & {
          position: relative;
          display: inline-block;
        }
      `}
    >
      <div
        css={css`
          & {
            width: 2.083125em;
            height: 1.25em;
            border-radius: 1.25em;
            background-color: ${resolveColors(
              color,
              active,
            )};
            opacity: ${active
              ? "0.4"
              : "0.2"};
          }
        `}
      />
      <div
        css={css`
          & {
            position: absolute;
            left: ${active
              ? undefined
              : 0};
            right: ${active
              ? 0
              : undefined};
            top: 0;
            width: 1.25em;
            height: 1.25em;
            border-radius: 100%;
            background-color: ${resolveColors(
              color,
              active,
            )};
            box-shadow: 0px 2px 1px -1px
                rgba(0, 0, 0, 0.2),
              0px 1px 1px
                rgba(0, 0, 0, 0.14),
              0px 1px 3px
                rgba(0, 0, 0, 0.12);
          }
        `}
      />
    </div>
  );
};

Switch.defaultProps = { color: "both" };
