import {
  motion,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export interface Props {
  size?: string;
  href: string;
  external?: boolean;
  background?: string;
  children?: any;
  className?: string;
}

const IconLinkContainer = motion(styled.a`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`);

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
          <IconLinkContainer
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
              scale: (scale as unknown) as number,
            }}
            css={css`
              & {
                background-color: ${background};
                width: ${size};
                height: ${size};
              }
            `}
          >
            {children}
          </IconLinkContainer>
        ) : (
          <Link href={href}>
            <IconLinkContainer
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
              `}
            >
              {children}
            </IconLinkContainer>
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
