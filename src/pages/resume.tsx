import Head from "next/head";
import React, { useRef } from "react";
import DesigningDesign from "../components/designs/designing.design";
import NavigationBar from "../components/layout/DesktopNavigationBar";
import ColorContainer from "src/components/elements/generic/ColorContainer";
import ResumeContainer from "src/components/elements/responsive/ResumeContainer";
import { GetStaticProps } from "next";
import ResumeService from "src/services/resume.service";
import ResumeItemType from "src/model/ResumeItem.model";
import ResumeItem from "src/components/elements/responsive/ResumeItem";
import BackgroundWrapper from "src/components/layout/BackgroundWrapper";
import HeaderWithSpacer from "src/components/layout/HeaderWithSpacer";
import { generateIndividualTags } from "src/services/meta.service";
import { title } from "../../package.json";
import HeaderService, {
  Header,
} from "src/services/header.service";
import TitleWithSubtitle from "src/components/elements/responsive/TitleWithSubtitle";
import FlexContainer from "src/components/elements/generic/FlexContainer";
import designSystem from "@style/designSystem";
import { css } from "@emotion/react";

interface ServerSideProps {
  resumeItems: ResumeItemType[];
  resumeIndex: Header;
}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<ServerSideProps> = ({
  resumeItems,
  resumeIndex: {
    title: resumeTitle,
    subtitle: resumeSubTitle,
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
          title: `${title} | Erfahrungen`,
          description:
            "Meine praktischen Erfahrungen im Bereich, Webentwicklung und vielem mehr.",
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
            <DesigningDesign width="100%" />
          </div>
        }
      >
        <HeaderWithSpacer
          first
          ref={_paragraphs[0]}
        >
          <FlexContainer justifyContent="center">
            <TitleWithSubtitle
              heading={resumeTitle}
              description={
                resumeSubTitle
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
      <ColorContainer
        color={
          designSystem.colors.brand
            .secondary
        }
      >
        <main
          style={{
            flex: 1,
            position: "relative",
            left: "-20px",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              width:
                "calc(100vw + 20px)",
            }}
          >
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "#ffffff",
                width: "282%",
                height: "137px",
                transform: "scaleX(-1)",
              }}
            >
              <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
            </svg>
          </div>
          <ResumeContainer>
            {resumeItems.map(
              ({
                title,
                description,
                start_year,
                end_year,
              }) => (
                <ResumeItem
                  key={title}
                  latest={false}
                  start_year={
                    start_year
                  }
                  end_year={end_year}
                  title={title}
                  description={
                    description
                  }
                />
              ),
            )}
          </ResumeContainer>
        </main>
      </ColorContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      resumeItems: await ResumeService.getAllResumeItems(),
      resumeIndex: await HeaderService.getResume(),
    },
  };
};

export default Contact;
