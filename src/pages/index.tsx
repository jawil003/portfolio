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
import HeaderWithSubtitle from "../components/elements/custom/HeaderWithSubtitle";
import { GetStaticProps } from "next";
import SocialItemsService, {
  SocialItem,
} from "src/services/SocialItems.service";
import { useSocialLogos } from "src/hooks/useIcons.hook";
import HeaderService, {
  Header,
} from "src/services/header.service";
import { breakpoints } from "src/hooks/useBreakpoints.hook";

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
    <div id="index">
      <style jsx global>{`
        #index {
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        #index
          :global(#blobDesktopDesignContainer) {
          height: 100%;
        }
        @media (max-width: ${breakpoints.lg -
          1}px) {
          #blobContainer {
            width: 100%;
            height: 100%;
            background-color: var(
              --blue
            );
          }
          .blobDesktopDesign {
            display: none;
          }
          #blobDesktopDesignContainer {
            background-color: #000;
          }
          nav > div > svg > path {
            fill: var(--primary);
          }

          h3,
          p {
            color: var(--primary);
          }
        }
        @media (min-width: ${breakpoints.lg}px) {
          #blobContainer {
            display: inline-block;
            float: right;
          }
          .blobDesktopDesign {
          }
        }
      `}</style>
      <Head>
        {generateIndividualTags()}
      </Head>
      <NavigationBar />
      <BackgroundWrapper
        background={
          <div id="blobContainer">
            <BlobDesktopDesign />
          </div>
        }
      >
        <HeaderWithSpacer first>
          <FlexContainer justifyContent="center">
            <HeaderWithSubtitle
              heading={title}
              description={subtitle}
            >
              {/*<Typography
            variant="h3"
            align={
              width > breakpoints.lg
                ? "left"
                : "center"
            }
            color={
              width <= breakpoints.lg
                ? "var(--primary)"
                : undefined
            }
          >
            Hallo, ich bin Jannik
          </Typography>
          <Spacer height="0.4em" />
          <Typography
            align={
              width > breakpoints.lg
                ? "left"
                : "center"
            }
            italic
            wordSpacing={11}
            color={
              width <= breakpoints.lg
                ? "var(--primary)"
                : undefined
            }
          >
            ein leidenschaftlicher
            Softwareentwickler und
            Designer aus Dortmund und
            spezialisiert auf Frontend
            und Backend Lösungen aller
            Art
          </Typography>*/}
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
                {/*<IconLink
                external
                href="https://twitter.com/willey3x37"
              >
                <TwitterIcon
                  color={
                    width <=
                    breakpoints.lg
                      ? "var(--primary)"
                      : undefined
                  }
                  height="100%"
                />
              </IconLink>
              <IconLink
                external
                href="https://linkedin.com/willey3x37"
              >
                <LinkedInIcon
                  color={
                    width <=
                    breakpoints.lg
                      ? "var(--primary)"
                      : undefined
                  }
                  textColor={
                    width <=
                    breakpoints.lg
                      ? "var(--secondary"
                      : undefined
                  }
                  height="100%"
                />
              </IconLink>

              <IconLink
                external
                href="https://github.com/jawil003"
              >
                <GithubIcon
                  color={
                    width <=
                    breakpoints.lg
                      ? "var(--primary)"
                      : undefined
                  }
                  height="100%"
                />
              </IconLink>

              <IconLink
                external
                href="https://dribbble.com/willey3x37"
              >
                <DribbleIcon
                  color={
                    width <=
                    breakpoints.lg
                      ? "var(--primary)"
                      : undefined
                  }
                  accentColor={
                    width <=
                    breakpoints.lg
                      ? "var(--secondary)"
                      : undefined
                  }
                  height="100%"
                />
              </IconLink>*/}
              </FlexContainer>
            </HeaderWithSubtitle>
          </FlexContainer>
        </HeaderWithSpacer>
      </BackgroundWrapper>
    </div>
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
