import { css } from "@emotion/react";
import designSystem from "@style/designSystem";
import {
  motion,
  useAnimation,
} from "framer-motion";
import React, {
  useEffect,
} from "react";
import { useInView } from "react-intersection-observer";
import flyFromTop from "../../variants/flyFromTop";

interface Props {
  align?: "left" | "right";
  first?: boolean;
}

/**
 * An Grid React Component.
 * @author
 * @version 0.1
 */
const HeaderWithSpacer: React.FC<Props> = ({
  children,
  align,
}) => {
  const { ref, inView } = useInView();
  const textAnimation = useAnimation();
  useEffect(() => {
    if (inView)
      textAnimation.start("animate");
  }, [inView, textAnimation]);
  return (
    <header
      ref={ref}
      css={css`
        & {
          margin-top: 100px;
          overflow: hidden;
          height: 100%;
          width: 100%;
          flex: 1;
          display: flex;
          justify-content: center;
        }

        /* desktop/tablet */
        @media (min-width: ${designSystem
            .breakpoints
            .tabletPortraitUp}) {
          & {
            flex-direction: row;
          }
          & > * {
            flex: 1;
          }
          & > :first-of-type {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* mobile */
        @media (max-width: ${designSystem
            .breakpoints
            .tabletPortraitUp}) {
          & {
            flex-direction: column;
            align-items: center;
          }
          & > * {
            flex: 1;
          }
          & > :first-of-type {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          & > :last-child {
            display: none;
          }
        }
      `}
    >
      <motion.div
        variants={flyFromTop}
        initial="initial"
        animate={textAnimation}
      >
        {align === "right"
          ? children
          : undefined}
      </motion.div>
      <div>
        {align === "left" ? (
          <div
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              maxWidth: "500px",
            }}
          >
            {children}{" "}
          </div>
        ) : undefined}
      </div>
    </header>
  );
};

HeaderWithSpacer.displayName =
  "HeaderWithSpacer";

HeaderWithSpacer.defaultProps = {
  align: "right",
  first: false,
};

export default HeaderWithSpacer;
