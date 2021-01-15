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
    <header ref={ref}>
      <style jsx>{`
        header {
          overflow: hidden;
          height: 100%;
          width: 100%;
        }
        @media (min-width: 1100px) {
          header {
            flex: 1;
            width: 100%;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 100%;
          }

          header
            > :global(div:first-child) {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          header
            > :global(div:last-child) {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        @media (max-width: 1099px) {
          header {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          header
            > :global(div):first-child {
            height: calc(
              100% - calc(100px + 70px)
            );
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          header
            > :global(div:first-child)
            > :global(h3),
          header
            > :global(div:first-child)
            > :global(p),
          header
            > :global(div:first-child)
            > :global(div) {
          }
        }

        @media (min-width: 500px) and (max-width: 819px) {
          header > div:last-child {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        @media (max-width: 499px) {
          header > div:last-child {
            display: none;
          }
        }
      `}</style>
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
