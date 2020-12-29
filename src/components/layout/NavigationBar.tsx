import React, { useEffect } from "react";
import Spacer from "../elements/generic/Spacer";
import HomeIcon from "../icons/home.icon";
import KnowledgeIcon from "../icons/knowledge.icon";
import LearningIcon from "../icons/learning.icon";
import Logo from "../elements/custom/Logo";
import NavigationBarItem from "../elements/custom/NavigationBarItem";
import styles from "./NavigationBar.module.css";
import HamburgerMenuIcon from "../icons/hamburgerMenu.icon";
import { motion, useSpring, useTransform } from "framer-motion";
import useBreakpoint from "../../hooks/useBreakpoints.hook";

interface Props {
  elementsColor?: string;
}

/**
 * An NavigationBar React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBar: React.FC<Props> = ({ elementsColor }) => {
  const scaleX = useSpring(0, { duration: 120 });
  const opacity = useTransform(scaleX, [0, 1], [0, 1]);

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
        style={{ scaleX, transformOrigin: "right center", opacity }}
      >
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.links}>
          <NavigationBarItem
            color={elementsColor}
            href="/"
            icon={<HomeIcon color={elementsColor} height="23px" />}
          >
            Start
          </NavigationBarItem>
          <Spacer height="20px" />
          <NavigationBarItem
            color={elementsColor}
            href="/knowledge"
            icon={<KnowledgeIcon color={elementsColor} height="23px" />}
          >
            Was ich kann
          </NavigationBarItem>
          <Spacer height="20px" />
          <NavigationBarItem
            color={elementsColor}
            href="/resume"
            icon={<LearningIcon color={elementsColor} height="23px" />}
          >
            Was ich gelernt habe
          </NavigationBarItem>
        </div>
        <div
          className={styles.mobileNavBackground}
          onClick={() => scaleX.set(0)}
        />
      </motion.nav>

      <div className={styles.mobileNavBarButtonContainer}>
        <div
          style={{ height: "100%", padding: "20px 10px", float: "right" }}
          onClick={() => scaleX.set(1)}
        >
          <HamburgerMenuIcon height="100%" color="var(--primary)" />
        </div>
      </div>
    </>
  );
};

NavigationBar.defaultProps = { elementsColor: "var(--secondaryText)" };

export default NavigationBar;
