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
  className?: string;
}

/**
 * An IconLink React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexIconLink: React.FC<Props> = React.memo(
  ({
    children,
    href,
    external,
    size,
    background,
    className,
  }) => {
    const scale = useSpring(1);
    return (
      <>
        {external ? (
          <motion.a
            className={className}
            onMouseOver={() => {
              scale.set(1.2);
            }}
            onMouseOut={() => {
              scale.set(1);
            }}
            href={href}
            rel="noreferrer"
            target="_blank"
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
        ) : (
          <Link href={href}>
            <motion.a
              className={className}
              onMouseOver={() => {
                scale.set(1.2);
              }}
              onMouseOut={() => {
                scale.set(1);
              }}
              style={{
                backgroundColor: background,
                width: size,
                height: size,
                ...styles.container,
              }}
            >
              {children}
            </motion.a>
          </Link>
        )}
      </>
    );
  },
);

const styles: {
  [x: string]: CSSProperties;
} = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

IndexIconLink.displayName = "IconLink";

IndexIconLink.defaultProps = {
  size: "40px",
};
