import {
  motion,
  useAnimation,
} from "framer-motion";
import React, {
  CSSProperties,
  useEffect,
} from "react";
import FlexContainer from "./FlexContainer";
import KnowledgeTable from "./KnowledgeTable";
import { useInView } from "react-intersection-observer";
const AnimatedFlexContainer = motion.custom(
  FlexContainer,
);

interface Props {
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
const KnowledgeSection: React.FC<Props> = ({
  items,
  className,
  style,
}) => {
  const animation = useAnimation();
  const { ref, inView } = useInView();
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
      ref={ref}
      justifyContent="center"
      columnGap="30px"
    >
      {items.map(
        ({
          title,
          description,
          items,
          color,
        }) => (
          <KnowledgeTable
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
};

export default KnowledgeSection;
