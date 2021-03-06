import { css } from "@emotion/react";
import designSystem, {
  fontSizeToRelativeValue,
} from "../../../styles/designSystem";
import React from "react";
import LogoIcon from "../../../icons/logo.icon";

/**
 * An Logo React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const Logo: React.FC = React.memo(
  () => {
    return (
      <div
        css={css`
          & {
            padding: 20px;
            cursor: pointer;
            border-radius: 10px;
            display: flex;
            align-items: flex-end;
            position: relative;
            overflow: visible;
          }

          & > .logo-beta-label {
            background-color: ${designSystem
              .colors.brand.secondary};
            color: ${designSystem.colors
              .brand.primary};
            padding: 10px;
            font-size: ${fontSizeToRelativeValue(
              "18px",
            )};
            font-weight: 600;
            border-radius: 34px;
            position: absolute;
            bottom: 10px;
            right: -30px;
          }
        `}
        className="logo-container"
      >
        <LogoIcon height="60px" />
        {process.env
          .NEXT_PUBLIC_BETA === "1" ? (
          <div className="logo-beta-label">
            Beta
          </div>
        ) : undefined}
      </div>
    );
  },
);

Logo.displayName = "Logo";
