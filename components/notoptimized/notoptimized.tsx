import { css } from "@emotion/react";
import { MobileApplicationDesign } from "../../designs/mobileApplication.design";
import React from "react";
import { FlexContainer } from "../shared/flexcontainer/flexcontainer";
import { Typography } from "../shared/typography";
import { NavigationBar } from "../shared/navigationbar/navigationbar";

export interface Props {}

/**
 * An NotOptimized React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const NotOptimized: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <FlexContainer
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowGap="50px"
        css={css`
          & {
            margin: 0px;
            padding: 50px;
            width: 100%;
            height: 100%;
          }
        `}
      >
        <MobileApplicationDesign width="100%" />
        <Typography
          css={css`
            & {
              font-size: 20px;
            }
          `}
          align="center"
          variant="b1"
          bold="semi-bold"
        >
          Diese Seite ist zurzeit noch
          nicht vollständig für mobile
          Geräte optimiert
        </Typography>
      </FlexContainer>
    </>
  );
};
