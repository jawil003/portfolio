import React from "react";
import NavigationBarItem from "../elements/custom/NavigationBarItem";
import useBreakpoint from "src/hooks/useBreakpoints.hook";
import useIcons from "src/hooks/useIcons.hook";

const items = [
  {
    href: "/contact",
    name: "Kontakt",
    icon: "MailIcon",
  },
  {
    href: "/impressum",
    name: "Impressum",
    icon: "WorldWideIcon",
  },
];

interface Props {
  color?: string | string[];
}

/**
 * An Footer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Footer: React.FC<Props> = ({
  color,
}) => {
  const { width } = useBreakpoint();
  const getIcon = useIcons();
  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          height: 70px;
          padding: 5px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
      {color instanceof Array
        ? color.map((c, index) => (
            <NavigationBarItem
              key={items[index].name}
              color={c}
              href={items[index].href}
              icon={getIcon(
                items[index].icon,
                "23px",
              )}
            >
              {width > 466
                ? items[index].name
                : undefined}
            </NavigationBarItem>
          ))
        : items.map((i) => (
            <NavigationBarItem
              key={i.name}
              color={color}
              href={i.href}
              icon={getIcon(
                i.icon,
                "23px",
              )}
            >
              {width > 466
                ? i.name
                : undefined}
            </NavigationBarItem>
          ))}
    </footer>
  );
};

Footer.defaultProps = {
  color: "var(--secondaryText)",
};

export default Footer;
