import { css } from "@emotion/react";
import designSystem from "../../../styles/designSystem";
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
import flyFromTop from "../../../variants/flyFromTop";
import composeRefs from "@seznam/compose-react-refs";
import { FlexContainer } from "../flexcontainer/flexcontainer";
import ArrowDownIcon from "../../../icons/arrowDown.icon";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const AnimatedArrowDownIcon = motion(
  ArrowDownIcon,
);

interface Props {
  first?: boolean;
  arrow?: boolean;
  icon: React.ReactNode;
  className?: string;
}

/**
 * An Grid React Component.
 * @author
 * @version 0.1
 */
const HeaderWithIcon = forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<Props>
>(
  (
    {
      children,
      icon,
      arrow,
      className,
    },
    ref,
  ) => {
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
          className={className}
          ref={composeRefs<HTMLHeadingElement>(
            ref,
            listenerRef,
          )}
          css={css`
            & {
              margin-top: 100px;

              height: calc(
                100% - 100px
              );
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

            /* fix when desktop is smaller */
            @media (max-width: 900px) {
              & > :last-child {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                z-index: -1;
                opacity: 0.3;
                padding: 0px 25%;
                height: 100%;
                overflow: hidden;
              }

              & {
                flex-direction: column;
                align-items: center;
              }
              & > * {
                flex: 1;
              }
              & h1,
              h2,
              h3.h4,
              h5,
              h6,
              p,
              span {
                text-align: center;
              }
              & > :first-of-type {
                flex: 1;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
            }
          `}
        >
          <motion.div
            variants={flyFromTop}
            initial="initial"
            animate={textAnimation}
          >
            {children}
          </motion.div>

          <div
            css={css`
              & {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 100px;
              }
            `}
          >
            {icon}
          </div>
        </header>
        {arrow ? (
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
        ) : undefined}
      </>
    );
  },
);

HeaderWithIcon.displayName =
  "HeaderWithIcon";

HeaderWithIcon.defaultProps = {
  first: false,
  arrow: false,
};

export default HeaderWithIcon;
