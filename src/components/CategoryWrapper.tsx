import { motion, MotionStyle } from "framer-motion";
import React, { forwardRef } from "react";

interface Props {
  latest?: boolean;
  children?: any;
  style?: MotionStyle;
}

/**
 * An CategoryWrapper React Component.
 * @author
 * @version 0.1
 */
const CategoryWrapper = forwardRef<HTMLDivElement, Props>(
  ({ children, latest, style }, ref) => {
    return (
      <motion.div
        ref={ref}
        style={{
          ...style,
          height: latest ? "calc(100vh - 50px)" : "100vh",
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {children}
      </motion.div>
    );
  }
);

CategoryWrapper.defaultProps = { latest: false };

export default CategoryWrapper;
