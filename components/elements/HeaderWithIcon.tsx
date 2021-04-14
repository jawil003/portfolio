import { css } from "@emotion/react";
import designSystem from "../../styles/designSystem";
import {
  motion,
  useAnimation,
} from "framer-motion";
import React, {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import flyFromTop from "../../variants/flyFromTop";
import composeRefs from "@seznam/compose-react-refs";
import FlexContainer from "./FlexContainer";
import ArrowDownIcon from "components/icons/arrowDown.icon";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const AnimatedArrowDownIcon = motion.custom(
  ArrowDownIcon,
);

interface Props {
  align?: "left" | "right";
  first?: boolean;
  icon: React.ReactNode;
}

/**
 * An Grid React Component.
 * @author
 * @version 0.1
 */
const HeaderWithIcon = forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<Props>
>(({ children, align, icon }, ref) => {
  const {
    ref: listenerRef,
    inView,
  } = useInView();
  const textAnimation = useAnimation();
  useEffect(() => {
    if (inView)
      textAnimation.start("animate");
  }, [inView, textAnimation]);
  const [
    showArrow,
    setShowArrow,
  ] = useState(true);

  useScrollPosition(
    ({ currPos: { y } }) => {
      console.log(y);
      if (y > 0) {
        setShowArrow(false);
      } else if (y === 0) {
        setShowArrow(true);
      }
    },
    undefined,
    undefined,
    true,
  );
  return (
    <>
      <header
        ref={composeRefs<HTMLHeadingElement>(
          ref,
          listenerRef,
        )}
        css={css`
          & {
            margin-top: 100px;
            overflow: hidden;
            height: calc(100% - 100px);
            width: 100%;
            flex: 1;
            display: flex;
            justify-content: center;
          }

          /* desktop/tablet */
          @media (min-width: ${designSystem
              .breakpoints
              .tabletPortraitUp}) {
            & {
              flex-direction: row;
            }
            & > * {
              flex: 1;
            }
            & > :first-of-type {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          /* mobile */
          @media (max-width: ${designSystem
              .breakpoints
              .tabletPortraitUp}) {
            & {
              flex-direction: column;
              align-items: center;
            }
            & > * {
              flex: 1;
            }
            & > :first-of-type {
              flex: 1;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            & > :last-child {
              display: none;
            }
          }
        `}
      >
        <motion.div
          variants={flyFromTop}
          initial="initial"
          animate={textAnimation}
        >
          {align === "right"
            ? children
            : icon}
        </motion.div>
        <div>
          {align === "left" ? (
            <div
              style={{
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                maxWidth: "500px",
              }}
            >
              {children}
            </div>
          ) : (
            icon
          )}
        </div>
      </header>
      <FlexContainer
        css={css`
          & {
            display: ${showArrow
              ? "flex"
              : "none"};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
          }
        `}
        justifyContent="center"
      >
        <AnimatedArrowDownIcon
          initial={{ y: -10 }}
          animate={{
            y: [-10, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.75,
            type: "tween",
          }}
        />
      </FlexContainer>
    </>
  );
});

HeaderWithIcon.displayName =
  "HeaderWithIcon";

HeaderWithIcon.defaultProps = {
  align: "right",
  first: false,
};

export default HeaderWithIcon;
