import Link from "next/link";
import React from "react";
import useTheme from "../hooks/useTheme.hook";
import Typography from "./elements/Typography";
import styles from "./NavigationBarItem.module.css";

interface Props {
  icon: JSX.Element;
  href: string;
}

/**
 * An NavigationBarItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBarItem: React.FC<Props> = ({ children, icon, href }) => {
  const {
    palette: {
      color: { secondaryText },
    },
  } = useTheme();
  return (
    <Link href={href}>
      <a className={styles.naviagtionBarItem}>
        <div>{icon}</div>
        <Typography variant="b1" bold="semi-bold" color={secondaryText}>
          {children}
        </Typography>
      </a>
    </Link>
  );
};

export default NavigationBarItem;
