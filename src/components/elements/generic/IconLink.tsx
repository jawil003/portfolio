import { motion, useSpring } from "framer-motion";
import Link from "next/link";
import React, { CSSProperties, useState } from "react";
import Tooltip from "./Tooltip";

interface Props {
  size?: string;
  href: string;
  external?: boolean;
  background?: string;
  tooltipOrientation?: "left" | "right" | "top" | "bottom";
  tooltipText: string;
}

/**
 * An IconLink React Component.
 * @author Jannik Will
 * @version 0.1
 */
const IconLink: React.FC<Props> = ({
  children,
  href,
  external,
  size,
  background,
  tooltipText,
  tooltipOrientation,
}) => {
  const scale = useSpring(1);
  const [toolTipHidden, setToolTipHidden] = useState(true);
  return (
    <div style={{ position: "relative" }}>
      {external ? (
        <motion.a
          href={href}
          target="_blank"
          onMouseOver={() => {
            setToolTipHidden(false);
            scale.set(1.2);
          }}
          onMouseOut={() => {
            setToolTipHidden(true);
            scale.set(1);
          }}
          style={{
            backgroundColor: background,
            borderRadius: "100%",
            scale,
            width: size,
            height: size,
            ...styles.container,
          }}
        >
          {children}
        </motion.a>
      ) : (
        <Link href={href}>
          <motion.a
            onMouseOver={() => {
              setToolTipHidden(false);
              scale.set(1.2);
            }}
            onMouseOut={() => {
              setToolTipHidden(true);
              scale.set(1);
            }}
            style={{
              backgroundColor: background,
              scale,
              width: size,
              height: size,
              ...styles.container,
            }}
          >
            {children}
          </motion.a>
        </Link>
      )}
      <Tooltip
        backgroundColor={background}
        hidden={toolTipHidden}
        orientation={tooltipOrientation}
      >
        {tooltipText}
      </Tooltip>
    </div>
  );
};

const styles: { [x: string]: CSSProperties } = {
  container: {
    margin: "10px 0px",

    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

IconLink.defaultProps = { size: "52px" };

export default IconLink;
