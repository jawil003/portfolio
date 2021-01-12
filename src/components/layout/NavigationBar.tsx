/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {
  useEffect,
} from "react";
import HomeIcon from "../icons/home.icon";
import Logo from "../elements/custom/Logo";
import NavigationBarItem from "../elements/custom/NavigationBarItem";
import styles from "./NavigationBar.module.css";
import HamburgerMenuIcon from "../icons/hamburgerMenu.icon";
import {
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import useBreakpoint from "../../hooks/useBreakpoints.hook";
import KnowledgeIcon from "../icons/knowledge.icon";
import LearningIcon from "../icons/learning.icon";

const items = [
  { href: "/", name: "Start" },
  {
    href: "/knowledge",
    name: "Was ich kann",
  },
  {
    href: "/resume",
    name: "Was ich gelernt habe",
  },
];

const getIconForName = (
  name: string,
  color: string,
  width: string,
) => {
  switch (name) {
    case "Start": {
      return (
        <HomeIcon
          color={color}
          width={width}
        />
      );
    }
    case "Was ich gelernt habe": {
      return (
        <KnowledgeIcon
          color={color}
          width={width}
        />
      );
    }
    case "Was ich kann": {
      return (
        <LearningIcon
          color={color}
          width={width}
        />
      );
    }
    default: {
      return (
        <HomeIcon
          color={color}
          width={width}
        />
      );
    }
  }
};

interface Props {
  elementsColor?: string | string[];
  mobileMenuColor?: string;
}

/**
 * An NavigationBar React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBar: React.FC<Props> = ({
  elementsColor,
  mobileMenuColor,
}) => {
  const scaleX = useSpring(0, {
    duration: 120,
  });
  const opacity = useTransform(
    scaleX,
    [0, 1],
    [0, 1],
  );

  const { width } = useBreakpoint();

  useEffect(() => {
    if (width < 1100) scaleX.set(0);
    else {
      scaleX.set(1);
    }
  }, [scaleX, width]);

  return (
    <>
      <motion.nav
        className={styles.container}
        style={{
          scaleX,
          transformOrigin:
            "right center",
          opacity,
        }}
      >
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.links}>
          {elementsColor instanceof
          Array
            ? elementsColor.map(
                (color, index) => (
                  <NavigationBarItem
                    key={
                      items[index].name
                    }
                    color={color}
                    href={
                      items[index].href
                    }
                    icon={getIconForName(
                      items[index].name,
                      color,
                      "23px",
                    )}
                  >
                    {items[index].name}
                  </NavigationBarItem>
                ),
              )
            : items.map(
                ({ href, name }) => (
                  <NavigationBarItem
                    key={name}
                    color={
                      elementsColor
                    }
                    href={href}
                    icon={getIconForName(
                      name,
                      elementsColor as string,
                      "23px",
                    )}
                  >
                    {name}
                  </NavigationBarItem>
                ),
              )}
        </div>
        <div
          className={
            styles.mobileNavBackground
          }
          onClick={() => scaleX.set(0)}
        />
      </motion.nav>

      <div
        className={
          styles.mobileNavBarButtonContainer
        }
      >
        <div
          style={{
            height: "100%",
            padding: "20px 10px",
            float: "right",
          }}
          onClick={() => scaleX.set(1)}
        >
          <HamburgerMenuIcon
            height="100%"
            color={mobileMenuColor}
          />
        </div>
      </div>
    </>
  );
};

NavigationBar.defaultProps = {
  elementsColor: "var(--secondaryText)",
};

export default React.memo(
  NavigationBar,
);
