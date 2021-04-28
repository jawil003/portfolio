// eslint-disable-next-line no-use-before-define
import React from "react";

export interface Props {
  width?: string;
  height?: string;
}

/**
 * An Spacer React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const Spacer: React.FC<Props> = ({
  width,
  height,
}) => {
  return (
    <div style={{ width, height }} />
  );
};
