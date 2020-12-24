import { motion } from "framer-motion";
import React, { forwardRef, PropsWithChildren } from "react";
import flyFromTop from "../../variants/flyFromTop";
import styles from "./HeaderWithSpacer.module.css";

const getHeightForSection = (first?: boolean, latest?: boolean) => {
  if (first && latest) {
    return "calc(100vh - calc(70px + 100px))";
  } else if (first) {
    return "calc(100vh - 100px)";
  } else if (latest) {
    return "calc(100vh - 70px)";
  }
  return "100vh";
};

interface Props {
  align?: "left" | "right";
  first?: boolean;
  latest?: boolean;
}

/**
 * An Grid React Component.
 * @author
 * @version 0.1
 */
const HeaderWithSpacer = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, latest, align, first }, ref) => {
    return (
      <header
        className={styles.header}
        ref={ref}
        style={{
          height: getHeightForSection(first, latest),
        }}
      >
        <motion.div variants={flyFromTop} initial="initial" animate="animate">
          {align === "right" ? (
            <div
              style={{
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                maxWidth: "500px",
              }}
            >
              {children}
            </div>
          ) : undefined}
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
  }
);

HeaderWithSpacer.defaultProps = { latest: false, align: "right", first: false };

export default HeaderWithSpacer;
