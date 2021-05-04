import { css } from "@emotion/react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import React from "react";

export interface Props {
  show: boolean;
}

/**
 * An DialogWrapper React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const DialogWrapper: React.FC<Props> = ({
  show,
  children,
}) => {
  return (
    <UniversalPortal selector="#modal">
      <div>
        <div
          css={css`
            & {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              min-width: 100vw;
              max-width: 100vw;
              width: 100vw;
              height: 100vh;
              min-height: 100vh;
              max-height: 100vh;
              margin: 0px;
              padding: 0px;
              box-sizing: border-box;
              justify-content: center;
              align-items: center;
              display: ${show
                ? "flex"
                : "none"};
              flex-direction: column;
            }
            &:after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              min-width: 100vw;
              max-width: 100vw;
              width: 100vw;
              height: 100vh;
              min-height: 100vh;
              max-height: 100vh;
              background-color: #000000;
              opacity: 0.2;

              z-index: 1;
            }
          `}
        >
          <div
            css={css`
              & {
                box-sizing: border-box;
                background-color: var(
                  --greenblue
                );
                min-width: 400px;
                min-height: 200px;
                border-radius: 10px;
                z-index: 999;
                flex-direction: column;
                padding: 20px;
                margin: -10px 0px;
              }

              & > * {
                margin: 10px 0px;
                color: var(--white);
              }
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </UniversalPortal>
  );
};
