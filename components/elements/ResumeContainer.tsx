import { css } from "@emotion/react";
import designSystem from "@style/designSystem";
import {
  motion,
  useAnimation,
} from "framer-motion";
import React, {
  forwardRef,
  useEffect,
} from "react";
import { useInView } from "react-intersection-observer";
import ResumeItemType from "model/ResumeItem.model";
import ResumeItem from "./ResumeItem";
import Typography from "./Typography";

interface Props {
  title: string;
  items: ResumeItemType[];
}

/**
 * An ResumeContainer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ResumeContainer = forwardRef<
  HTMLDivElement,
  Props
>(({ title, items }, ref) => {
  const animation = useAnimation();
  const {
    ref: observerRef,
    inView,
  } = useInView();
  useEffect(() => {
    if (inView)
      animation.start({ opacity: 1 });
    else
      animation.start({ opacity: 0 });
  }, [inView, animation]);
  return (
    <div
      ref={ref}
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <div
        css={css`
          & {
            padding: 0px 50px;
            position: relative;
            left: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      >
        <Typography
          variant="h5"
          color={
            designSystem.colors.brand
              .primary
          }
          align="center"
        >
          {title}
        </Typography>
      </div>
      <motion.div
        ref={observerRef}
        initial={{ opacity: 0 }}
        animate={animation}
        transition={{ duration: 1 }}
        css={css`
          & {
            position: relative;
            left: 20px;
            flex: 1;
          }
        `}
      >
        {items.map(
          ({
            title,
            description,
            start_year,
            end_year,
          }) => (
            <ResumeItem
              key={title}
              latest={false}
              start_year={start_year}
              end_year={end_year}
              title={title}
              description={description}
            />
          ),
        )}
      </motion.div>
    </div>
  );
});

ResumeContainer.displayName =
  "ResumeContainer";

export default ResumeContainer;
