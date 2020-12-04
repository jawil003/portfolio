import { motion, useSpring } from "framer-motion";
import React from "react";

interface Props {
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * An SkillCategoriesItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const IconButton: React.FC<Props> = ({ children, color, onClick }) => {
  const scale = useSpring(1);
  return (
    <motion.div
      onClick={onClick}
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
      {children}
    </motion.div>
  );
};

IconButton.defaultProps = { color: "var(--blue)" };

export default IconButton;
