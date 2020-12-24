import Head from "next/head";
import React, { useEffect } from "react";
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
import BlobDesign from "src/components/designs/blob.design";
import BlobMobileDesign from "src/components/designs/blobMobile.design";
import styles from "./index.module.css";
import useBreakpoint from "src/hooks/useBreakpoints.hook";

interface Props {}

/**
 * An Index React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Index: React.FC<Props> = () => {
  const x = useSpring(200);
  const handleImageLoaded = () => x.set(0);
  useEffect(() => {
    handleImageLoaded();
  }, []);
  const { width } = useBreakpoint();
  return (
    <>
      <Head>
        <title>Jannik Will | Startseite</title>
      </Head>
      <NavigationBar elementsColor="var(--primary)" />
      <BackgroundWrapper
        background={
          <div
            className={styles.blobContainer}
            style={{ position: "absolute", right: 0, top: 0 }}
          >
            {width > 600 ? <BlobDesign /> : <BlobMobileDesign />}
          </div>
        }
      >
        <HeaderWithSpacer first latest>
          <Typography variant="h3" align="left">
            Hallo, ich bin Jannik
          </Typography>
          <Spacer height="0.4em" />
          <Typography align="left" italic wordSpacing={11}>
            ein leidenschaftlicher Softwareentwickler und Designer aus Dortmund
            und spezialisiert auf Frontend und Backend Lösungen aller Art
          </Typography>
          <Spacer height="8px" />
          <div
            style={{
              alignSelf: "center",
              width: "70%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <IconLink
              tooltipText="Twitter"
              tooltipOrientation="left"
              external
              href="https://twitter.com/willey3x37"
            >
              <TwitterIcon height="100%" />
            </IconLink>
            <IconLink
              tooltipText="LinkedIn"
              tooltipOrientation="bottom"
              external
              href="https://linkedin.com/willey3x37"
            >
              <LinkedInIcon height="100%" />
            </IconLink>

            <IconLink
              tooltipText="Github"
              tooltipOrientation="bottom"
              external
              href="https://github.com/jawil003"
            >
              <GithubIcon height="100%" />
            </IconLink>

            <IconLink
              tooltipText="Dribbble"
              external
              href="https://dribbble.com/willey3x37"
            >
              <DribbleIcon height="100%" />
            </IconLink>
          </div>
        </HeaderWithSpacer>
      </BackgroundWrapper>

      <Footer />
    </>
  );
};

export default Index;
