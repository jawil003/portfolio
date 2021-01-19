/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  motion,
  useAnimation,
} from "framer-motion";
import React, { useState } from "react";
import { useNavigationIcons } from "src/hooks/useIcons.hook";
import Logo from "../elements/responsive/Logo";
import NavigationBarItem from "../elements/responsive/NavigationBarItem";
import FlexContainer from "../elements/generic/FlexContainer";
import Spacer from "../elements/generic/Spacer";
import {
  header as items,
  footer as footerItems,
} from "../../config/routes.json";
import HamburgerMenuIcon from "../icons/hamburgerMenu.icon";
import designSystem from "@style/designSystem";

interface Props {
  className?: string;
}

/**
 * An NavigationBar React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBar: React.FC<Props> = ({
  className,
}) => {
  const getIcon = useNavigationIcons();
  const navBar = useAnimation();
  const [show, setShow] = useState<
    "none" | "block"
  >("none");

  return (
    <>
      <nav
        className={className}
        style={{
          position: "relative",
          zIndex: 9998,
          marginTop: "10px",
          height: "100px",
          padding: "15px",
        }}
      >
        <div
          style={{ height: "100%" }}
          onClick={() => {
            setShow("block");
            navBar.start({
              x: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            });
          }}
        >
          <HamburgerMenuIcon height="100%" />
        </div>
      </nav>
      <nav
        className={className}
        onClick={() => {
          navBar
            .start({
              x: -200,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            })
            .then(() => {
              setShow("none");
            });
        }}
        style={{
          display: show,
          position: "fixed",
          zIndex: 9999,
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
        <motion.div
          animate={navBar}
          style={{
            x: -200,
            display: "grid",
            justifyContent: "start",
            padding: "10px 0px",
            alignContent: "start",
            alignItems: "start",
            gridTemplateRows:
              "repeat(3, auto) 1fr auto",
            float: "left",
            height: "100%",
            background: designSystem.brand(
              "primary",
            ),
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
                  })}
                >
                  {name}
                </NavigationBarItem>
              ),
            )}
          </FlexContainer>
        </motion.div>
      </nav>
    </>
  );
};

NavigationBar.defaultProps = {};

export default React.memo(
  NavigationBar,
);
