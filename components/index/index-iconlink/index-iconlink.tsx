import { css } from "@emotion/react";
import {
  motion,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import React from "react";

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
            css={css`
              & {
                background-color: ${background};
                width: ${size};
                height: ${size};
              }
              & {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            `}
            style={{
              scale,
            }}
          >
            {children}
          </motion.a>
        ) : (
          <Link href={href} passHref>
            <motion.a
              className={className}
              onMouseOver={() => {
                scale.set(1.2);
              }}
              onMouseOut={() => {
                scale.set(1);
              }}
              css={css`
                & {
                  background-color: ${background};
                  width: ${size};
                  height: ${size};
                }
                & {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              `}
            >
              {children}
            </motion.a>
          </Link>
        )}
      </>
    );
  },
);

IndexIconLink.displayName = "IconLink";

IndexIconLink.defaultProps = {
  size: "40px",
};
