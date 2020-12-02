import { motion } from "framer-motion";
import React, { forwardRef, PropsWithChildren } from "react";
import flyFromRight from "../variants/flyFromRight";
import flyFromTop from "../variants/flyFromTop";

interface Props {
  icon: JSX.Element;
  fill?: boolean;
  latest?: boolean;
}

/**
 * An Grid React Component.
 * @author
 * @version 0.1
 */
const HeaderWithIcon = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, icon, latest, fill }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          width: "100%",
          height: latest
            ? "calc(100vh - calc(100px + 73px))"
            : "calc(100vh - 100px)",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridTemplateRows: "100%",
        }}
      >
        <motion.div
          variants={flyFromTop}
          initial="initial"
          animate="animate"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: fill ? "stretch" : "center",
            padding: "105px",
          }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={flyFromRight}
          initial="initial"
          animate="animate"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10%",
          }}
        >
          {icon}
        </motion.div>
      </div>
    );
  }
);

HeaderWithIcon.defaultProps = { latest: false, fill: false };

export default HeaderWithIcon;
