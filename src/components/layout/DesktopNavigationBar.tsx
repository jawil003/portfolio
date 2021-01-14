/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React from "react";
import useIcons from "src/hooks/useIcons.hook";
import Logo from "../elements/custom/Logo";
import NavigationBarItem from "../elements/custom/NavigationBarItem";
import FlexContainer from "../elements/generic/FlexContainer";
import Spacer from "../elements/generic/Spacer";
import {
  header as items,
  footer as footerItems,
} from "../../config/routes.json";
import HamburgerMenuIcon from "../icons/hamburgerMenu.icon";

/**
 * An NavigationBar React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBar: React.FC = () => {
  const getIcon = useIcons();
  const scaleX = useMotionValue(0);
  const display = useTransform(
    scaleX,
    [0, 1],
    ["none", "block"],
  );

  return (
    <>
      <nav
        style={{
          marginTop: "10px",
          height: "100px",
          padding: "15px",
        }}
      >
        <div
          style={{ height: "100%" }}
          onClick={() => scaleX.set(1)}
        >
          <HamburgerMenuIcon height="100%" />
        </div>
      </nav>
      <motion.nav
        onClick={() => scaleX.set(0)}
        style={{
          display,
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          transformOrigin:
            "left center",
          background:
            "rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            display: "grid",
            justifyContent: "start",
            padding: "10px 0px",
            alignContent: "start",
            alignItems: "start",
            gridTemplateRows:
              "repeat(3, auto) 1fr auto",
            float: "left",
            height: "100%",
            background:
              "var(--primary)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0px 20px",
            }}
          >
            <Logo />
          </div>
          <Spacer height="40px" />
          <FlexContainer
            direction="column"
            rowGap="10px"
          >
            {items.map(
              ({
                name,
                href,
                icon,
              }) => (
                <NavigationBarItem
                  key={name}
                  href={href}
                  icon={getIcon({
                    name: icon,
                    height: "25px",
                  })}
                >
                  {name}
                </NavigationBarItem>
              ),
            )}
          </FlexContainer>
          <div />
          <FlexContainer
            direction="column"
            rowGap="10px"
          >
            {footerItems.map(
              ({
                name,
                href,
                icon,
              }) => (
                <NavigationBarItem
                  key={name}
                  href={href}
                  icon={getIcon({
                    name: icon,
                    height: "25px",
                  })}
                >
                  {name}
                </NavigationBarItem>
              ),
            )}
          </FlexContainer>
        </div>
      </motion.nav>
    </>
  );
};

NavigationBar.defaultProps = {};

export default React.memo(
  NavigationBar,
);
