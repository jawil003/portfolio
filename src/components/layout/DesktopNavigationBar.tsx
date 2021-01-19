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
import { css } from "@emotion/react";

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
        className={`desktop-navigation-bar-menu-container ${className}`}
        css={css`
          & {
            position: relative;
            z-index: 9998;
            margin-top: 10px;
            height: 100px;
            padding: 15px;
          }
          &
            > .desktop-navigation-bar-hamburger-menu-container {
            height: 100%;
          }
        `}
      >
        <div
          className="desktop-navigation-bar-hamburger-menu-container"
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
        css={css`
          & {
            display: ${show};
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            transform-origin: left
              center;
            background: rgba(
              0,
              0,
              0,
              0.35
            );
          }

          &
            > .desktop-navigation-bar-sidebar-container {
            display: grid;
            justify-content: start;
            padding: 10px 0px;
            align-content: start;
            align-items: start;
            grid-template-rows:
              repeat(3, auto)
              1fr auto;
            float: left;
            height: 100%;
            background: ${designSystem
              .colors.brand.primary};
          }
          &
            .desktop-navigation-bar-logo-container {
            display: flex;
            justify-content: center;
            padding: 0px 20px;
          }
        `}
        className={`desktop-navigation-bar-sidebar-container-background ${
          className || ""
        }`}
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
      >
        <motion.div
          className="desktop-navigation-bar-sidebar-container"
          animate={navBar}
          style={{
            x: -200,
          }}
        >
          <div className="desktop-navigation-bar-logo-container">
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
