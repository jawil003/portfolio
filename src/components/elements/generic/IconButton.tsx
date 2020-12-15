import { motion, useSpring } from "framer-motion";
import React from "react";

export interface Props {
  size?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  tooltipOrientation?: "left" | "right" | "top" | "bottom";
  tooltipText: string;
}

/**
 * An SkillCategoriesItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const IconButton: React.FC<Props> = ({ size, children, color, onClick }) => {
  const scale = useSpring(1);
  return (
    <div style={{ position: "relative" }}>
      <motion.div
        onMouseOver={() => {
          scale.set(1.2);
        }}
        onMouseOut={() => {
          scale.set(1);
        }}
        onClick={onClick}
        style={{
          scale,
          height: size,
          width: size,
          backgroundColor: color,
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

IconButton.defaultProps = { color: "var(--blue)", size: "54px" };

export default React.memo(IconButton);
