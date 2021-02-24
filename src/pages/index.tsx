import Head from "next/head";
import React from "react";
import Spacer from "../components/elements/Spacer";
import IconLink from "../components/elements/IconLink";
import HeaderWithSpacer from "../components/elements/HeaderWithSpacer";
import NavigationBar from "../components/elements/DesktopNavigationBar";
import BackgroundWrapper from "src/components/elements/BackgroundWrapper";
import FlexContainer from "src/components/elements/FlexContainer";
import { generateIndividualTags } from "src/services/meta.service";
import TitleWithSubtitle from "../components/elements/TitleWithSubtitle";
import { GetStaticProps } from "next";
import SocialItemsService, {
  SocialItem,
} from "src/services/SocialItems.service";
import { useSocialLogos } from "src/hooks/useIcons.hook";
import HeaderService, {
  Header,
} from "src/services/header.service";
import designSystem from "@style/designSystem";
import { css } from "@emotion/react";
import PersonWithLaptop from "src/components/designs/personWithLaptop.design";
import KnowledgeTable from "src/components/elements/KnowledgeTable";
import Typography from "src/components/elements/Typography";
import ResumeService from "src/services/resume.service";
import ResumeItemType from "src/model/ResumeItem.model";
import ColorContainer from "src/components/elements/ColorContainer";
import ResumeContainer from "src/components/elements/ResumeContainer";
import ResumeItem from "src/components/elements/ResumeItem";

interface ServerSideProps {
  indexHeader: Header;
  socialItems: SocialItem[];
  resumeItems: ResumeItemType[];
}
/**
 * An Index React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Index: React.FC<ServerSideProps> = ({
  socialItems,
  indexHeader: { title, subtitle },
  resumeItems,
}) => {
  const getIcon = useSocialLogos();

  return (
    <>
      <Head>
        {generateIndividualTags()}
      </Head>
      <NavigationBar
        css={css`
          @media (max-width: ${designSystem
              .breakpoints
              .tabletPortraitUp}) {
            &
              svg.hamburger-menu-icon
              > * {
              fill: ${designSystem
                .colors.brand.primary};
            }
          }
        `}
      />
      <BackgroundWrapper
        background={
          <div
            css={css`
              @media (max-width: ${designSystem
                  .breakpoints
                  .tabletPortraitUp}) {
                & {
                  width: 100%;
                  height: 100%;
                  background-color: ${designSystem
                    .colors.brand
                    .secondary};
                }

                & > svg {
                  display: none;
                }
              }
              @media (min-width: ${designSystem
                  .breakpoints
                  .tabletPortraitUp}) {
                & {
                  height: 100%;
                  display: grid;
                  justify-items: end;
                  justify-content: center;
                  align-items: center;
                  margin-right: 30px;
                }
              }
            `}
          >
            <PersonWithLaptop height="80%" />
          </div>
        }
      >
        <HeaderWithSpacer first>
          <FlexContainer justifyContent="center">
            <TitleWithSubtitle
              css={css`
                @media (max-width: ${designSystem
                    .breakpoints
                    .tabletPortraitUp}) {
                  & > h3,
                  p {
                    color: white;
                  }
                }
              `}
              heading={title}
              description={subtitle}
            >
              <Spacer height="8px" />
              <FlexContainer
                justifyContent="center"
                columnGap="8px"
              >
                {socialItems.map(
                  ({
                    href,
                    name,
                    icon: { title },
                  }) => (
                    <IconLink
                      css={css`
                        @media (max-width: ${designSystem
                            .breakpoints
                            .tabletPortraitUp}) {
                          & .accent {
                            fill: ${designSystem
                              .colors
                              .brand
                              .secondary};
                          }
                          & .main {
                            fill: ${designSystem
                              .colors
                              .brand
                              .primary};
                          }
                        }
                      `}
                      key={name}
                      external
                      href={href}
                    >
                      {getIcon({
                        name: title,
                        height: "100%",
                      })}
                    </IconLink>
                  ),
                )}
              </FlexContainer>
            </TitleWithSubtitle>
          </FlexContainer>
        </HeaderWithSpacer>
        <Spacer height="120px" />
        <Typography
          variant="h4"
          align="center"
        >
          Das sind meine Kenntnisse
        </Typography>
        <Spacer height="60px" />
        <FlexContainer
          justifyContent="center"
          columnGap="30px"
        >
          <KnowledgeTable
            title="Design"
            description="Meine Fähigkeiten im Bereich Web Design"
            items={[
              "Adobe XD",
              "Figma",
              "Affinity Suite",
            ]}
            color={
              designSystem.colors
                .palette.brown.base
            }
          />
          <KnowledgeTable
            title="Frontend"
            description="Meine Fähigkeiten im Bereich der Frontend Softwareentwicklung"
            items={[
              "React",
              "Javascript/Typescript",
              "HTML5",
              "CSS3",
              "Electron.js",
            ]}
            color={
              designSystem.colors
                .palette.green.dark
            }
          />
          <KnowledgeTable
            title="Backend"
            description="Meine Fähigkeiten im Bereich der Server Entwicklung"
            items={[
              "Node.js",
              "Java",
              "MongoDB",
              "MySQL",
            ]}
          />
        </FlexContainer>
        <Spacer height="120px" />
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
                  transform:
                    "scaleX(-1)",
                }}
              >
                <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
              </svg>
            </div>
            <ResumeContainer title="Und das meine praktischen Erfahrungen">
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
      </BackgroundWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      socialItems: await SocialItemsService.getAll(),
      indexHeader: await HeaderService.getIndex(),
      resumeItems: await ResumeService.getAllResumeItems(),
    },
  };
};

export default Index;
