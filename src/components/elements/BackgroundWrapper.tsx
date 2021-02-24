import { css } from "@emotion/react";
import React from "react";

interface Props {
  background: JSX.Element;
  children: JSX.Element | JSX.Element[];
}

/**
 * An HeaderWithBackground React Component.
 * @author
 * @version 0.1
 */
const BackgroundWrapper: React.FC<Props> = ({
  background,
  children,
}) => {
  return (
    <div
      css={css`
        & {
          height: calc(100vh - 120px);
        }
      `}
    >
      <div
        css={css`
          & {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            height: 100%;
            width: 100%;
          }
        `}
      >
        {background}
      </div>
      <div
        css={css`
          & {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
          }
        `}
      >
        <div
          css={css`
            & {
              flex: 1;
              position: relative;
            }
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default BackgroundWrapper;
