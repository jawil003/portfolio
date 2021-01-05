import Head from "next/head";
import React, {
  useEffect,
} from "react";
import Typography from "../components/elements/generic/Typography";
import TwitterIcon from "../components/icons/twitter.icon";
import Spacer from "../components/elements/generic/Spacer";
import LinkedInIcon from "../components/icons/linkedin.icon";
import GithubIcon from "../components/icons/github.icon";
import IconLink from "../components/elements/generic/IconLink";
import { useSpring } from "framer-motion";
import DribbleIcon from "../components/icons/dribble.icon";
import HeaderWithSpacer from "../components/layout/HeaderWithSpacer";
import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import BackgroundWrapper from "src/components/layout/BackgroundWrapper";
import useBreakpoint, {
  breakpoints,
} from "src/hooks/useBreakpoints.hook";
import FlexContainer from "src/components/elements/generic/FlexContainer";
import BlobDesktopDesign from "src/components/designs/blobDesktop.design";
import { generateIndividualTags } from "src/services/meta.service";

/**
 * An Index React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Index: React.FC = () => {
  const x = useSpring(200);
  const handleImageLoaded: () => void = () =>
    x.set(0);
  useEffect(() => {
    handleImageLoaded();
  }, []);
  const { width } = useBreakpoint();
  return (
    <>
    <Head>{generateIndividualTags()}</Head>
      <NavigationBar
      mobileMenuColor="var(--primary)"
        elementsColor={
          width <= breakpoints.lg
            ? "var(--secondaryText)"
            : "var(--primary)"
        }
      />
      <BackgroundWrapper
        background={
          <div
            style={
              width > breakpoints.lg
                ? {
                    position:
                      "absolute",
                    right: 0,
                    top: 0,
                  }
                : {
                    height: "100%",
                    backgroundColor:
                      "var(--blue)",
                  }
            }
          >
            {width > breakpoints.lg ? (
              <BlobDesktopDesign />
            ) : undefined}
          </div>
        }
      >
        <HeaderWithSpacer first latest>
          <Typography
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
          </Typography>
          <Spacer height="8px" />
          <FlexContainer
            justifyContent="center"
            columnGap="8px"
          >
            <IconLink
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
            </IconLink>
          </FlexContainer>
        </HeaderWithSpacer>
      </BackgroundWrapper>

      <Footer
        color={
          width <= breakpoints.lg
            ? "var(--primary)"
            : undefined
        }
      />
    </>
  );
};

export default Index;
