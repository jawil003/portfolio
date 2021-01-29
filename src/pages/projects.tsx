import Head from "next/head";
import React, { useRef } from "react";
import NavigationBar from "../components/elements/generic/DesktopNavigationBar";
import { GetStaticProps } from "next";
import BackgroundWrapper from "src/components/elements/generic/BackgroundWrapper";
import HeaderWithSpacer from "src/components/elements/responsive/HeaderWithSpacer";
import { generateIndividualTags } from "src/services/meta.service";
import { title } from "../../package.json";
import HeaderService, {
  Header,
} from "src/services/header.service";
import TitleWithSubtitle from "src/components/elements/generic/TitleWithSubtitle";
import FlexContainer from "src/components/elements/generic/FlexContainer";
import designSystem from "@style/designSystem";
import { css } from "@emotion/react";
import CodeTypingDesign from "src/components/designs/codeTyping.design";

interface ServerSideProps {
  projectIndex: Header;
}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Project: React.FC<ServerSideProps> = ({
  projectIndex: {
    title: projectTitle,
    subtitle: projectSubTitle,
  },
}) => {
  const _paragraphs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  return (
    <>
      <Head>
        {generateIndividualTags({
          title: `${title} | Projekte`,
          description:
            "Meine privaten Softwareentwicklungsprojekte.",
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
              @media (min-width: ${designSystem
                  .breakpoints
                  .tabletPortraitUp}) {
                & {
                  margin-left: 50%;
                  width: 50%;
                  opacity: 1;
                }
              }
              @media (max-width: ${designSystem
                  .breakpoints
                  .tabletPortraitUp}) {
                & {
                  width: 100%;
                  opacity: 0.3;
                }
              }
            `}
          >
            <CodeTypingDesign width="100%" />
          </div>
        }
      >
        <HeaderWithSpacer
          first
          ref={_paragraphs[0]}
        >
          <FlexContainer justifyContent="center">
            <TitleWithSubtitle
              heading={projectTitle}
              description={
                projectSubTitle
              }
            />
          </FlexContainer>
          {/*<Typography
            variant="h3"
            align="center"
          >
            Was habe ich bereits
            gelernt?
          </Typography>
          <Spacer height="0.4em" />
          <Typography
            align="center"
            italic
          >
            Das Leben besteht aus
            kontinuierlichen Lernen.
            Warum stehen bleiben wenn
            Weiterentwicklung möglich
            ist
          </Typography>*/}
        </HeaderWithSpacer>
      </BackgroundWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projectIndex: await HeaderService.getProject(),
    },
  };
};

export default Project;
