import {
  motion,
  MotionStyle,
} from "framer-motion";
import React from "react";
import { useKnowledgeIcons } from "src/hooks/useIcons.hook";
import useIsElementInViewPort from "src/hooks/useIsElementInViewPort.hook";
import KnowledgeItem from "src/model/KnowledgeItem.model";
import CategoryCard from "../responsive/CategoryCard";
import CategoryCardWrapper from "../responsive/CategoryCardWrapper";
import CategoryHeader from "../responsive/CategoryHeader";

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
  title: string;
  description: string;
  items: KnowledgeItem[];
  first?: boolean;
  latest?: boolean;

  style?: MotionStyle;
  columnGap?: string;
  rowGap?: string;
}

/**
 * An FullScreenKnowledgeSection React Component.
 * @author
 * @version 0.1
 */
const FullScreenKnowledgeSection: React.FC<Props> = ({
  title,
  description,
  items,
  latest,
  style,
  first,
  columnGap,
  rowGap,
}) => {
  const categoryCardWrapperRef = React.createRef<HTMLDivElement>();
  const isElementInViewPort = useIsElementInViewPort();
  const onMouseWheel = (
    event: React.WheelEvent<HTMLDivElement>,
  ) => {
    const scrollSpeed = 3;
    const scroller =
      categoryCardWrapperRef.current;
    if (!scroller) return;
    // block if e.deltaY==0
    if (!event.deltaY) return;
    // Set scrollDirection (-1 = up // 1 = down)

    const scrollDirection =
      event.deltaY;
    // convert vertical scroll into horizontal

    if (
      (!isElementInViewPort(
        event.currentTarget,
      ) &&
        scrollDirection > 0) ||
      (event.currentTarget.getBoundingClientRect()
        .top === 1 &&
        scrollDirection < 0)
    )
      return;

    if (
      event.currentTarget.getBoundingClientRect()
        .top === 1 &&
      scrollDirection < 0
    )
      scroller.scrollLeft = 0;
    else
      scroller.scrollLeft +=
        scrollSpeed * scrollDirection;

    const scrollLeft = Math.round(
      scroller.scrollLeft,
    );
    // calculate box total vertical scroll
    const maxScrollLeft = Math.round(
      scroller.scrollWidth -
        scroller.clientWidth,
    );
    // if element scroll has not finished scrolling
    // prevent window to scroll
    if (
      (scrollDirection === -1 &&
        scrollLeft > 0) ||
      (scrollDirection === 1 &&
        scrollLeft < maxScrollLeft)
    )
      event.preventDefault();
    // done!
    return true;
  };
  const getIcon = useKnowledgeIcons();
  return (
    <motion.section
      onWheel={onMouseWheel}
      style={{
        ...style,
        overflow: "hidden",
        minHeight: getHeightForSection(
          first,
          latest,
        ),
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        columnGap,
        rowGap,
      }}
    >
      <CategoryHeader
        key={title + "-header"}
        title={title}
        description={description}
      />

      <CategoryCardWrapper
        ref={categoryCardWrapperRef}
        key={title + "-wrapper"}
      >
        {items.map(
          ({
            title,
            description,
            icon,
          }) => (
            <CategoryCard
              key={title + "-card"}
              title={title}
              description={description}
              icon={getIcon({
                name: icon?.title as string,
                height: "100%",
              })}
            />
          ),
        )}
      </CategoryCardWrapper>
    </motion.section>
  );
};
FullScreenKnowledgeSection.displayName =
  "FullScreenKnowledgeSection";

FullScreenKnowledgeSection.defaultProps = {
  latest: false,
  first: false,
};

export default FullScreenKnowledgeSection;
