import Link from "next/link";
import React from "react";
import Typography from "../generic/Typography";
import styles from "./NavigationBarItem.module.css";

interface Props {
  icon: JSX.Element;
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
        className={
          styles.navigationBarItem
        }
      >
        <div style={{ height: "100%" }}>
          {icon}
        </div>
        <Typography
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
