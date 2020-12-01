import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import flyFromRight from "../variants/flyFromRight";
import flyFromTop from "../variants/flyFromTop";
import KnowledgeDesign from "./designs/knowledge.design";

interface Props {
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  children?: any;
}

/**
 * An HowCanIHelpYouHeader React Component.
 * @author Jannik Will
 * @version 0.1
 */
const HowCanIHelpYouHeader = forwardRef<HTMLDivElement, Props>(
  ({ children, onScroll }, ref) => {
    return (
      <div
        ref={ref}
        onScroll={onScroll}
        style={{
          height: "calc(100vh - 100px)",
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
            alignItems: "center",
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
          }}
        >
          <KnowledgeDesign width="80%" />
        </motion.div>
      </div>
    );
  }
);

export default HowCanIHelpYouHeader;
