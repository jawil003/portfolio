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
        className={styles.naviagtionBarItem}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          columnGap: "10px",
          cursor: "pointer",
          height: "63px",
          padding: "20px",
          color: "initial",
          textDecoration: "none",
        }}
      >
        <div style={{ height: "100%" }}>{icon}</div>
        <Typography variant="b1" bold="semi-bold" color={color}>
          {children}
        </Typography>
      </a>
    </Link>
  );
};

NavigationBarItem.defaultProps = { color: "var(--secondaryText)" };

export default NavigationBarItem;
