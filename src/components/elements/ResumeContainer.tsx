import { css } from "@emotion/react";
import designSystem from "@style/designSystem";
import React from "react";
import Typography from "./Typography";

interface Props {
  title: string;
}

/**
 * An ResumeContainer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ResumeContainer: React.FC<Props> = ({
  children,
  title,
}) => {
  return (
    <div
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
      <div
        css={css`
          & {
            position: relative;
            left: 20px;
            flex: 1;
          }
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default ResumeContainer;
