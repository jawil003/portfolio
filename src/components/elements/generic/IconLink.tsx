import {
  motion,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import React, {
  CSSProperties,
} from "react";

export interface Props {
  size?: string;
  href: string;
  external?: boolean;
  background?: string;
  children?: any;
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
}) => {
  const scale = useSpring(1);
  return (
    <div
      style={{ position: "relative" }}
    >
      {external ? (
        <motion.a
          onMouseOver={() => {
            scale.set(1.2);
          }}
          onMouseOut={() => {
            scale.set(1);
          }}
          href={href}
          target="_blank"
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
              scale.set(1.2);
            }}
            onMouseOut={() => {
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
    </div>
  );
};

const styles: {
  [x: string]: CSSProperties;
} = {
  container: {
    margin: "10px 0px",

    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

IconLink.defaultProps = {
  size: "40px",
};

export default React.memo(IconLink);
