import React from "react";
import MailIcon from "../icons/mail.icon";
import WorldWideIcon from "../icons/worldwide.icon";
import NavigationBarItem from "../elements/custom/NavigationBarItem";
import useBreakpoint from "src/hooks/useBreakpoints.hook";

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
  const { width } = useBreakpoint();
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
        {width > 466 ? "Kontakt" : undefined}
      </NavigationBarItem>
      <NavigationBarItem
        color={color}
        href="/impressum"
        icon={<WorldWideIcon color={color} height="23px" />}
      >
        {width > 466 ? "Impressum" : undefined}
      </NavigationBarItem>
    </footer>
  );
};

Footer.defaultProps = { color: "var(--secondaryText)" };

export default Footer;
