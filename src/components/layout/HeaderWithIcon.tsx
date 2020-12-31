import { motion } from "framer-motion";
import React, {
  forwardRef,
  PropsWithChildren,
} from "react";
import flyFromRight from "../../variants/flyFromRight";
import flyFromTop from "../../variants/flyFromTop";

const getHeightForSection = (
  first?: boolean,
  latest?: boolean,
) => {
  if (first && latest) {
    return "calc(100vh - calc(70px + 100px))";
  } else if (first) {
    return "calc(100vh - 100px)";
  } else if (latest) {
    return "calc(100vh - 70px)";
  }
  return "100vh";
};

interface Props {
  icon: JSX.Element;
  fill?: boolean;
  first?: boolean;
  latest?: boolean;
  style?: React.CSSProperties;
  align?: "left" | "right";
}

/**
 * An Grid React Component.
 * @author
 * @version 0.1
 */
const HeaderWithIcon = forwardRef<
  HTMLDivElement,
  PropsWithChildren<Props>
>(
  (
    {
      children,
      icon,
      latest,
      first,
      align,
    },
    ref,
  ) => {
    return (
      <header
        className="header"
        ref={ref}
        style={{
          height: getHeightForSection(
            first,
            latest,
          ),
        }}
      >
        <style jsx>{`
          .header > div:first-child {
            width: 100%;
          }
          @media (min-width: 820px) {
            .header {
              width: 100%;
              display: grid;
              grid-template-columns: 50% 50%;
              grid-template-rows: 100%;
            }

            .header > :global(div):first-child {
              align-items: center;
              align-content: center;
              flex: 1;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 105px;
            }
            .header > :global(div):last-child {
              display: flex;
              justify-content: center;
            }
          }

          @media (max-width: 819px) {
            .header {
            }

            .header > :global(div):first-child {
              position: absolute;
              top: 100px;
              left: 0;
              padding: 100px;
              height: calc(
                100% -
                  calc(100px + 70px)
              );
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }

            .header
              > :global(div):first-child
              > :global(h3),
            .header
              > :global(div):first-child
              > :global(p),
            .header
              > :global(div):first-child
              > :global(div) {
              background-color: #fff;
            }
          }

          @media (min-width: 500px) and (max-width: 819px) {
            .header > :global(div):last-child {
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }

          @media (max-width: 499px) {
            .header > :global(div):last-child {
              display: none;
            }
          }
        `}</style>
        <motion.div
          variants={flyFromTop}
          initial="initial"
          animate="animate"
        >
          {align === "right"
            ? children
            : icon}
        </motion.div>
        <motion.div
          variants={flyFromRight}
          initial="initial"
          animate="animate"
        >
          {align === "left"
            ? children
            : icon}
        </motion.div>
      </header>
    );
  },
);

HeaderWithIcon.defaultProps = {
  latest: false,
  fill: false,
  align: "right",
};

export default HeaderWithIcon;
