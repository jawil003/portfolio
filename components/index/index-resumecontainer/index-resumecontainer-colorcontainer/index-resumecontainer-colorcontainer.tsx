import { css } from "@emotion/react";
import React, {
  forwardRef,
  PropsWithChildren,
} from "react";

export interface Props {
  color: string;
  className?: string;
}

/**
 * An ColorContainer React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexResumeColorContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<Props>
>(
  (
    { children, color, className },
    ref,
  ) => {
    return (
      <div
        ref={ref}
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
  },
);

IndexResumeColorContainer.displayName =
  "ColorContainer";
