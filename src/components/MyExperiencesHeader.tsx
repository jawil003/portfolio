import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import flyFromTop from "../variants/flyFromTop";
import DesigningDesign from "./designs/designing.design";

interface Props {
  children?: any;
}

/**
 * An MyExperiencesHeader React Component.
 * @author Jannik Will
 * @version 0.1
 */
const MyExperiencesHeader = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    return (
      <motion.div
        variants={flyFromTop}
        initial="initial"
        animate="animate"
        ref={ref}
        style={{
          height: "calc(100vh - 100px)",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridTemplateRows: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "105px",
          }}
        >
          {children}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DesigningDesign width="80%" />
        </div>
      </motion.div>
    );
  }
);

export default MyExperiencesHeader;