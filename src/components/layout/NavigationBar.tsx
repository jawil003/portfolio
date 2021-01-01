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

const items = [
  { href: "/", name: "Start" },
  {
    href: "/knowledge",
    name: " Was ich kann",
  },
  {
    href: "/resume",
    name: " Was ich gelernt habe",
  },
];

interface Props {
  elementsColor?: string | string[];
}

/**
 * An NavigationBar React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBar: React.FC<Props> = ({
  elementsColor,
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
  }, [width]);

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
                    color={color}
                    href={
                      items[index].href
                    }
                    icon={
                      <HomeIcon
                        color={color}
                        height="23px"
                      />
                    }
                  >
                    {items[index].name}
                  </NavigationBarItem>
                ),
              )
            : items.map(
                ({ href, name }) => (
                  <NavigationBarItem
                    color={
                      elementsColor
                    }
                    href={href}
                    icon={
                      <HomeIcon
                        color={
                          elementsColor
                        }
                        height="23px"
                      />
                    }
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
            color="var(--primary)"
          />
        </div>
      </div>
    </>
  );
};

NavigationBar.defaultProps = {
  elementsColor: "var(--secondaryText)",
};

export default NavigationBar;
