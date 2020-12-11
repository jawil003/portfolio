import React from "react";
import MailIcon from "../icons/mail.icon";
import WorldWideIcon from "../icons/worldwide.icon";
import NavigationBarItem from "../elements/custom/NavigationBarItem";

interface Props {
  color?: string;
}

//TODO: Complete Color Mechanism

/**
 * An Footer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Footer: React.FC<Props> = ({ color }) => {
  return (
    <footer
      style={{
        height: "70px",
        padding: "5px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <NavigationBarItem
        color={color}
        href="/contact"
        icon={<MailIcon color={color} height="23px" />}
      >
        Kontakt
      </NavigationBarItem>
      <NavigationBarItem
        color={color}
        href="/impressum"
        icon={<WorldWideIcon color={color} height="23px" />}
      >
        Impressum
      </NavigationBarItem>
    </footer>
  );
};

Footer.defaultProps = { color: "var(--secondaryText)" };

export default Footer;
