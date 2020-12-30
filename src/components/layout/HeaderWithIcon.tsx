import { motion } from "framer-motion";
import React, {
  forwardRef,
  PropsWithChildren,
} from "react";
import flyFromRight from "../../variants/flyFromRight";
import flyFromTop from "../../variants/flyFromTop";
import styles from "./HeaderWithIcon.module.css";

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
  icon: JSX.Element;
  fill?: boolean;
  first?: boolean;
  latest?: boolean;
  style?: React.CSSProperties;
  align?: "left" | "right";
}

/**
 * An Grid React Component.
 * @author
 * @version 0.1
 */
const HeaderWithIcon = forwardRef<
  HTMLDivElement,
  PropsWithChildren<Props>
>(
  (
    {
      children,
      icon,
      latest,
      first,
      align,
    },
    ref,
  ) => {
    return (
      <header
        className={styles.header}
        ref={ref}
        style={{
          height: getHeightForSection(
            first,
            latest,
          ),
        }}
      >
        <motion.div
          variants={flyFromTop}
          initial="initial"
          animate="animate"
        >
          {align === "right"
            ? children
            : icon}
        </motion.div>
        <motion.div
          variants={flyFromRight}
          initial="initial"
          animate="animate"
        >
          {align === "left"
            ? children
            : icon}
        </motion.div>
      </header>
    );
  },
);

HeaderWithIcon.defaultProps = {
  latest: false,
  fill: false,
  align: "right",
};

export default HeaderWithIcon;
