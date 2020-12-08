import { motion, useSpring } from "framer-motion";
import React, { useState } from "react";
import Tooltip from "./Tooltip";

interface Props {
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
const IconButton: React.FC<Props> = ({
  size,
  children,
  color,
  onClick,
  tooltipOrientation,
  tooltipText,
}) => {
  const [toolTipHidden, setToolTipHidden] = useState(true);
  const scale = useSpring(1);
  return (
    <div style={{ position: "relative" }}>
      <motion.div
        onMouseOver={() => {
          setToolTipHidden(false);
          scale.set(1.2);
        }}
        onMouseOut={() => {
          setToolTipHidden(true);
          scale.set(1);
        }}
        onClick={onClick}
        style={{
          scale,
          margin: "10px 10px",
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
      <Tooltip hidden={toolTipHidden} orientation={tooltipOrientation}>
        {tooltipText}
      </Tooltip>
    </div>
  );
};

IconButton.defaultProps = { color: "var(--blue)", size: "54px" };

export default IconButton;
