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
  return (
    <div
      onMouseOver={() => setToolTipHidden(false)}
      onMouseOut={() => setToolTipHidden(true)}
      onClick={onClick}
      style={{
        position: "relative",
        margin: "10px 0px",
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
      <Tooltip hidden={toolTipHidden} orientation={tooltipOrientation}>
        {tooltipText}
      </Tooltip>
    </div>
  );
};

IconButton.defaultProps = { color: "var(--blue)", size: "54px" };

export default IconButton;
