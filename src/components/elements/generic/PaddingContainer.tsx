import React from "react";

interface Props {
  margin?: string;
  padding?: string;
  inline?: boolean;
}

/**
 * An PaddingContainer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const PaddingContainer: React.FC<Props> = ({ margin, padding, inline }) => {
  return (
    <div
      style={{ margin, padding, display: inline ? "inline-block" : "block" }}
    >
      {padding}
    </div>
  );
};

PaddingContainer.defaultProps = { inline: false };

export default PaddingContainer;
