import {
  motion,
  useAnimation,
} from "framer-motion";
import React, {
  CSSProperties,
  forwardRef,
  useEffect,
} from "react";
import { FlexContainer } from "../../shared/FlexContainer/FlexContainer";
import { IndexKnowledgeTable } from "./IndexKnowledgeTable/IndexKnowledgeTable";
import { useInView } from "react-intersection-observer";
import composeRefs from "@seznam/compose-react-refs";
import designSystem from "../../../styles/designSystem";
import { css } from "@emotion/react";
const AnimatedFlexContainer = motion(
  FlexContainer,
);

export interface Props {
  items: {
    title: string;
    description: string;
    items: string[];
    color?: string;
  }[];
  className?: string;
  style?: CSSProperties;
}

/**
 * An KnowledgeSection React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexKnowledgeSection = forwardRef<
  HTMLDivElement,
  Props
>(
  (
    { items, className, style },
    ref,
  ) => {
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
      <AnimatedFlexContainer
        
        initial={{ opacity: 0 }}
        animate={animation}
        className={className}
        style={{ ...style }}
        transition={{ duration: 1 }}
        ref={composeRefs<HTMLDivElement>(
          observerRef,
          ref,
        )}
        justifyContent="center"
        columnGap="30px"
        rowGap="30px"
        wrap
      >
        {items.map(
          ({
            title,
            description,
            items,
            color,
          }) => (
            <IndexKnowledgeTable
              key={title}
              title={title}
              description={description}
              items={items}
              color={color}
            />
          ),
        )}
      </AnimatedFlexContainer>
    );
  },
);

IndexKnowledgeSection.displayName =
  "KnowledgeSection";
