import Link from "next/link";
import React from "react";
import Spacer from "../generic/Spacer";
import Typography from "../generic/Typography";

interface Props {
  icon?: JSX.Element;
  href: string;
  color?: string;
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
}) => {
  return (
    <Link href={href}>
      <a
        className={"navigationBarItem"}
      >
        <style jsx>{`
          .navigationBarItem {
            padding: 10px 20px;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .navigationBarItem:hover {
            background-color: rgba(
              0,
              0,
              0,
              0.35
            );
          }
          .navigationBarItem
            > :global(*) {
            display: inline-block;
          }
        `}</style>
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
    </Link>
  );
};

NavigationBarItem.defaultProps = {
  color: "var(--secondaryText)",
};

export default NavigationBarItem;
