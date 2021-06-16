import {
  motion,
  useAnimation,
} from "framer-motion";
import { memo, useState } from "react";
import { css } from "@emotion/react";
import { useNavigationIcons } from "../../../hooks/useIcons.hook";
import { Logo } from "../logo/logo";
import { NavigationBarItem } from "./navigationbar-item";
import { FlexContainer } from "../flexcontainer/flexcontainer";
import Spacer from "../spacer/spacer";
import {
  header as items,
  footer as footerItems,
} from "../../../config/routes.json";
import HamburgerMenuIcon from "../../../icons/hamburgerMenu.icon";
import designSystem from "../../../styles/designSystem";
import DesktopNavigationBarContext from "../../../contexts/DesktopNavigationBarContext";

export interface Props {
  className?: string;
  backgroundIsWhite?: boolean;
}

/**
 * An NavigationBar React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const NavigationBar: React.FC<Props> = memo(
  ({
    className,
    backgroundIsWhite,
  }) => {
    const getIcon = useNavigationIcons();
    const navBar = useAnimation();
    const headerBar = useAnimation();
    const [open, setOpen] = useState(
      false,
    );

    return (
      <>
        <DesktopNavigationBarContext.Provider
          value={{
            open,
            setOpen: (
              openState: boolean,
            ) => setOpen(openState),
          }}
        >
          <motion.nav
            animate={headerBar}
            className={`desktop-navigation-bar-menu-container ${className}`}
            css={css`
              & {
                position: fixed;
                top: 0;
                z-index: ${designSystem
                  .positioning
                  .behindBehindFirst};
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
                setOpen(true);
                navBar.start({
                  x: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                });
              }}
              role="presentation"
              onKeyDown={() => {
                setOpen(true);
                navBar.start({
                  x: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                });
              }}
            >
              <HamburgerMenuIcon
                color={
                  backgroundIsWhite
                    ? undefined
                    : designSystem
                        .colors.brand
                        .primary
                }
                height="100%"
              />
            </div>
          </motion.nav>
          <nav
            css={css`
              & {
                display: ${open
                  ? "block"
                  : "none"};
                position: fixed;
                z-index: ${designSystem
                  .positioning
                  .behindFirst};
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
                position: relative;
                z-index: ${designSystem
                  .positioning.first};
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
                  .colors.brand
                  .primary};
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
                  setOpen(false);
                });
            }}
            onKeyDown={() => {
              navBar
                .start({
                  x: -200,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                })
                .then(() => {
                  setOpen(false);
                });
            }}
            role="presentation"
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
                    external,
                  }) => (
                    <NavigationBarItem
                      external={
                        external
                      }
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
        </DesktopNavigationBarContext.Provider>
      </>
    );
  },
);

NavigationBar.defaultProps = {
  backgroundIsWhite: true,
};

NavigationBar.displayName =
  "NavigationBar";
