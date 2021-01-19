import { css } from "@emotion/react";
import designSystem from "@style/designSystem";
import { motion } from "framer-motion";
import React, {
  forwardRef,
  PropsWithChildren,
} from "react";
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
const HeaderWithSpacer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<Props>
>(({ children, align }, ref) => {
  return (
    <header
      css={css`
        & {
          overflow: hidden;
          height: 100%;
          width: 100%;
          flex: 1;
          display: flex;
          justify-content: center;
        }

        /* desktop/tablet */
        @media (min-width: ${designSystem.bp(
            "tabletPortraitUp",
          )}) {
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
        @media (max-width: ${designSystem.bp(
            "tabletPortraitUp",
          )}) {
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
      ref={ref}
    >
      <motion.div
        variants={flyFromTop}
        initial="initial"
        animate="animate"
      >
        {align === "right"
          ? children
          : undefined}
      </motion.div>
      <motion.div>
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
      </motion.div>
    </header>
  );
});

HeaderWithSpacer.displayName =
  "HeaderWithSpacer";

HeaderWithSpacer.defaultProps = {
  align: "right",
  first: false,
};

export default HeaderWithSpacer;
