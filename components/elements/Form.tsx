import { css } from "@emotion/react";
import React from "react";

interface Props {
  children?: any;
}

/**
 * An Form React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Form: React.FC<Props> = ({
  children,
}) => {
  return (
    <div
      css={css`
        & {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          max-width: 450px;
        }
      `}
      className="form"
    >
      {children}
    </div>
  );
};

export default Form;
