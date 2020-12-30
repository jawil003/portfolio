import React from "react";
import FlexContainer from "../elements/generic/FlexContainer";

interface Props {}

/**
 * An CategoryCardWrapper React Component.
 * @author
 * @version 0.1
 */
const CategoryCardWrapper: React.FC<Props> = ({
  children,
}) => {
  return (
    <FlexContainer
        justifyContent= "space-around"
      
    >
      {children}
    </FlexContainer>
  );
};

export default CategoryCardWrapper;
