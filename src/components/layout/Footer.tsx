import React from "react";
import MailIcon from "../icons/mail.icon";
import WorldWideIcon from "../icons/worldwide.icon";
import NavigationBarItem from "../elements/custom/NavigationBarItem";
import useBreakpoint from "src/hooks/useBreakpoints.hook";

const items = [
  { href: "/contact", name: "Kontakt" },
  {
    href: "/impressum",
    name: "Impressum",
  },
];

const getIconForName = (
  name: string,
  options: {
    color: string;
    width?: string;
    height?: string;
  },
) => {
  switch (name) {
    case "Kontakt": {
      return (
        <MailIcon
          color={options.color}
          height={options.height}
          width={options.width}
        />
      );
    }
    case "Impressum": {
      return (
        <WorldWideIcon
          color={options.color}
          height={options.height}
          width={options.width}
        />
      );
    }
    default: {
      return <WorldWideIcon
        color={options.color}
        height={options.height}
        width={options.width}
      />;
    }
  }
};

interface Props {
  color?: string | string[];
}

//TODO: Complete Color Mechanism

/**
 * An Footer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Footer: React.FC<Props> = ({
  color,
}) => {
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
      {color instanceof Array
        ? color.map((c, index) => (
            <NavigationBarItem
              color={c}
              href={items[index].href}
              icon={getIconForName(
                items[index].name,
                {
                  color: c,
                  height: "23px",
                },
              )}
            >
              {width > 466
                ? items[index].name
                : undefined}
            </NavigationBarItem>
          ))
        : items.map((i) => (
            <NavigationBarItem
              color={color}
              href={i.href}
              icon={getIconForName(
                i.name,
                {
                  color: color as string,
                  height: "23px",
                },
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
