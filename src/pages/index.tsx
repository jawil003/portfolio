import Head from "next/head";
import React from "react";
import Spacer from "../components/elements/generic/Spacer";
import IconLink from "../components/elements/generic/IconLink";
import HeaderWithSpacer from "../components/layout/HeaderWithSpacer";
import NavigationBar from "../components/layout/DesktopNavigationBar";
import BackgroundWrapper from "src/components/layout/BackgroundWrapper";
import FlexContainer from "src/components/elements/generic/FlexContainer";
import BlobDesktopDesign from "src/components/designs/blobDesktop.design";
import { generateIndividualTags } from "src/services/meta.service";
import TitleWithSubtitle from "../components/elements/responsive/TitleWithSubtitle";
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

interface ServerSideProps {
  indexHeader: Header;
  socialItems: SocialItem[];
}
/**
 * An Index React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Index: React.FC<ServerSideProps> = ({
  socialItems,
  indexHeader: { title, subtitle },
}) => {
  const getIcon = useSocialLogos();

  return (
    <>
      <Head>
        {generateIndividualTags()}
      </Head>
      <NavigationBar
        css={css`
          @media (max-width: ${designSystem.bp(
              "tabletPortraitUp",
            )}) {
            &
              svg.hamburger-menu-icon
              > * {
              fill: ${designSystem.brand(
                "primary",
              )};
            }
          }
        `}
      />
      <BackgroundWrapper
        background={
          <div
            css={css`
              @media (max-width: ${designSystem.bp(
                  "tabletPortraitUp",
                )}) {
                & {
                  width: 100%;
                  height: 100%;
                  background-color: ${designSystem.brand(
                    "secondary",
                  )};
                }

                & > svg {
                  display: none;
                }
              }
              @media (min-width: ${designSystem.bp(
                  "tabletPortraitUp",
                )}) {
                & {
                }
              }
            `}
            style={{
              display: "inline-block",
              float: "right",
            }}
          >
            <BlobDesktopDesign />
          </div>
        }
      >
        <HeaderWithSpacer first>
          <FlexContainer justifyContent="center">
            <TitleWithSubtitle
              css={css`
                @media (max-width: ${designSystem.bp(
                    "tabletPortraitUp",
                  )}) {
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
                        @media (max-width: ${designSystem.bp(
                          "tabletPortraitUp",
                        )}) {
                          & .accent {
                            fill: ${designSystem.brand(
                              "secondary",
                            )};
                          }
                          & .main {fill: ${designSystem.brand(
                            "primary",
                          )}
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
      </BackgroundWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      socialItems: await SocialItemsService.getAll(),
      indexHeader: await HeaderService.getIndex(),
    },
  };
};

export default Index;
