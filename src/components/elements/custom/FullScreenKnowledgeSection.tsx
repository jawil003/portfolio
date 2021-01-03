import {
  motion,
  MotionStyle,
} from "framer-motion";
import React, {
  forwardRef,
} from "react";

const getHeightForSection = (
  first?: boolean,
  latest?: boolean,
) => {
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
  first?: boolean;
  latest?: boolean;
  children?: any;
  style?: MotionStyle;
  columnGap?: string;
  rowGap?: string;
}

/**
 * An FullScreenKnowledgeSection React Component.
 * @author
 * @version 0.1
 */
const FullScreenKnowledgeSection = forwardRef<
  HTMLDivElement,
  Props
>(
  (
    { children, latest, style, first, columnGap, rowGap },
    ref,
  ) => {
    return (
      <motion.section
        ref={ref}
        style={{
          ...style,
          overflow: "hidden",
          height: getHeightForSection(
            first,
            latest,
          ),
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          columnGap,
          rowGap,
        }}
      >
        {children}
      </motion.section>
    );
  },
);

FullScreenKnowledgeSection.defaultProps = {
  latest: false,
  first: false,
};

export default FullScreenKnowledgeSection;
