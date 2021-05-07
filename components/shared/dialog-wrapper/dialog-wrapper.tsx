import { css } from "@emotion/react";
import { UniversalPortal } from "@jesstelford/react-portal-universal";
import {
  motion,
  useAnimation,
} from "framer-motion";
import React, {
  useEffect,
  useState,
} from "react";

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
  const animation = useAnimation();
  const [
    display,
    setDisplay,
  ] = useState(show);

  useEffect(() => {
    if (show) {
      setDisplay(true);
      animation.start(
        {
          opacity: 1,
        },
        { duration: 2 },
      );
    } else {
      animation
        .start(
          {
            opacity: 0,
          },
          { duration: 2 },
        )
        .then(() => {
          setDisplay(false);
        });
    }
  }, [show]);
  return (
    <UniversalPortal selector="#modal">
      <div>
        <motion.div
          animate={animation}
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
              flex-direction: column;
            }
            & {
              display: ${display
                ? "flex"
                : "none"};
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
              opacity: 0.75;

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
        </motion.div>
      </div>
    </UniversalPortal>
  );
};
