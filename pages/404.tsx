import {
  css,
  Global,
} from "@emotion/react";
import { BlankCanvasDesign } from "../designs/blankCanvas.design";
import { FlexContainer } from "../components/shared/flexcontainer/flexcontainer";
import { HeaderWithIcon } from "../components/shared/headerwithicon/headerwithicon";
import { Spacer } from "../components/shared/spacer/spacer";
import { TitleWithSubtitle } from "../components/shared/titlewithsubtitle/titlewithsubtitle";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import HeaderService, {
  Header,
} from "../services/header.service";
import { NavigationBar } from "../components/shared/navigationbar/navigationbar";

interface ServerSideProps {
  errorHeader: Header;
}

/**
 * An 404Page React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ErrorPage: React.FC<ServerSideProps> = ({
  errorHeader: { title, subtitle },
}) => {
  return (
    <>
      <NextSeo
        title="Nicht gefunden"
        noindex={true}
      />
      <Global
        styles={css`
          #__next {
            min-height: calc(
              100vh - 100px
            );
            height: calc(100vh - 100px);
            max-height: calc(
              100vh - 100px
            );
          }
        `}
      />
      <NavigationBar />
      <HeaderWithIcon
        css={css`
          & {
            height: 100%;
          }
        `}
        first
        icon={
          <BlankCanvasDesign width="100%" />
        }
      >
        <FlexContainer justifyContent="center">
          <TitleWithSubtitle
            heading={title}
            description={subtitle}
          >
            <Spacer height="8px" />
          </TitleWithSubtitle>
        </FlexContainer>
      </HeaderWithIcon>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      errorHeader: HeaderService.getError(),
    },
  };
};

export default ErrorPage;
