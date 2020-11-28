import React from "react";

interface Props {
  width?: string;
  height?: string;
}

/**
 * An Spacer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Spacer: React.FC<Props> = ({ width, height }) => {
  return <div style={{ width, height }} />;
};

export default Spacer;
