import Link from "next/link";
import React from "react";
import Spacer from "./Spacer";
import Typography from "./Typography";
import { css } from "@emotion/react";
import designSystem from "@style/designSystem";
interface Props {
  icon?: JSX.Element;
  href: string;
  color?: string;
  external?: boolean;
}

/**
 * An NavigationBarItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBarItem: React.FC<Props> = ({
  children,
  icon,
  href,
  color,
  external,
}) => {
  if (external)
    return (
      <a
        href={href}
        css={css`
          & {
            padding: 10px 20px;
            height: 100%;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #000;
            cursor: pointer;
          }
          & > svg {
            fill: #000;
          }

          &:hover {
            background-color: rgba(
              0,
              0,
              0,
              0.35
            );
          }
          & > * {
            display: inline-block;
          }
        `}
      >
        {icon
          ? [
              <div
                key="iconContainer"
                style={{
                  display:
                    "inline-flex",
                  alignItems: "center",
                }}
              >
                {icon}
              </div>,
              <Spacer
                key="iconTextSpacer"
                width="10px"
              />,
            ]
          : undefined}
        <Typography
          inline
          variant="b1"
          bold="semi-bold"
          color={color}
        >
          {children}
        </Typography>
      </a>
    );
  else
    return (
      <Link href={href}>
        <a
          css={css`
            & {
              padding: 10px 20px;
              height: 100%;
              display: flex;
              align-items: center;
              text-decoration: none;
              color: #000;
              cursor: pointer;
            }
            & > svg {
              fill: #000;
            }

            &:hover {
              background-color: rgba(
                0,
                0,
                0,
                0.35
              );
            }
            & > * {
              display: inline-block;
            }
          `}
        >
          {icon
            ? [
                <div
                  key="iconContainer"
                  style={{
                    display:
                      "inline-flex",
                    alignItems:
                      "center",
                  }}
                >
                  {icon}
                </div>,
                <Spacer
                  key="iconTextSpacer"
                  width="10px"
                />,
              ]
            : undefined}
          <Typography
            inline
            variant="b1"
            bold="semi-bold"
            color={color}
          >
            {children}
          </Typography>
        </a>
      </Link>
    );
};

NavigationBarItem.defaultProps = {
  color:
    designSystem.colors.brand
      .secondaryText,
  external: false,
};

export default NavigationBarItem;
