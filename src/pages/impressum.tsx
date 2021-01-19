import Head from "next/head";
import React from "react";
import AtHomeDesign from "../components/designs/atHome.design";
import Spacer from "../components/elements/generic/Spacer";
import Typography from "../components/elements/generic/Typography";
import NavigationBar from "../components/layout/DesktopNavigationBar";
import HeaderWithSpacer from "src/components/layout/HeaderWithSpacer";
import BackgroundWrapper from "src/components/layout/BackgroundWrapper";
import { title } from "../../package.json";
import { generateIndividualTags } from "src/services/meta.service";
import FlexContainer from "src/components/elements/generic/FlexContainer";
import designSystem from "@style/designSystem";
import { css } from "@emotion/react";

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC = () => {
  return (
    <>
      <Head>
        {generateIndividualTags({
          title: `${title} | Impressum`,
          description:
            "Das Impressum meiner Seite.",
        })}
      </Head>

      <NavigationBar />
      <BackgroundWrapper
        background={
          <div
            css={css`
              & {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
              }
              @media (min-width: ${designSystem.bp(
                  "tabletPortraitUp",
                )}) {
                & {
                  margin-left: 50%;
                  width: 50%;
                  opacity: 1;
                }
              }
              @media (max-width: ${designSystem.bp(
                  "tabletPortraitUp",
                )}) {
                & {
                  width: 100%;
                  opacity: 0.3;
                }
              }
            `}
          >
            <AtHomeDesign width="100%" />
          </div>
        }
      >
        <HeaderWithSpacer first>
          <FlexContainer direction="column">
            <Typography
              variant="h3"
              align="center"
            >
              Impressum
            </Typography>
            <Spacer height="10px" />
            <Typography align="center">
              Jannik Will <br /> 44269
              Dortmund <br />{" "}
              Deutschland
            </Typography>
          </FlexContainer>
        </HeaderWithSpacer>
      </BackgroundWrapper>
    </>
  );
};

export default Contact;
