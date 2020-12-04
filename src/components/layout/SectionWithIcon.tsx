import { motion } from "framer-motion";
import React, { forwardRef, PropsWithChildren } from "react";
import flyFromRight from "../../variants/flyFromRight";
import flyFromTop from "../../variants/flyFromTop";

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
  icon: JSX.Element;
  fill?: boolean;
  first?: boolean;
  latest?: boolean;
  style?: React.CSSProperties;
  align?: "left" | "right";
}

/**
 * An SectionWithIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const SectionWithIcon: React.FC<Props> = forwardRef<
  HTMLDivElement,
  PropsWithChildren<Props>
>(({ children, icon, latest, fill, style, first, align }, ref) => {
  return (
    <section
      ref={ref}
      style={{
        ...style,
        width: "100%",
        height: getHeightForSection(first, latest),
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
          padding: align === "right" ? "105px" : "10%",
        }}
      >
        {align === "right" ? children : icon}
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
          padding: align === "left" ? "105px" : "10%",
        }}
      >
        {align === "left" ? children : icon}
      </motion.div>
    </section>
  );
});

SectionWithIcon.defaultProps = { latest: false, fill: false, align: "right" };

export default SectionWithIcon;
