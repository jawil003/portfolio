import { motion, useSpring } from "framer-motion";
import React from "react";

interface Props {
  icon: JSX.Element;
  color?: string;
}

/**
 * An SkillCategoriesItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const SkillCategoriesItem: React.FC<Props> = ({ icon, color }) => {
  const scale = useSpring(1);
  return (
    <motion.div
      style={{
        margin: "10px 0px",
        height: "64px",
        width: "64px",
        backgroundColor: color,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scale,
      }}
      onHoverStart={() => scale.set(1.2)}
      onHoverEnd={() => scale.set(1)}
    >
      {icon}
    </motion.div>
  );
};

SkillCategoriesItem.defaultProps = { color: "var(--blue)" };

export default SkillCategoriesItem;
