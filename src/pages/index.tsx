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
import HeaderWithImage from "../components/layout/HeaderWithImage";
import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";

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
  return (
    <>
      <Head>
        <title>Jannik Will | Startseite</title>
      </Head>
      <NavigationBar />
      <HeaderWithImage
        first
        latest
        basePath="img/dortmund-u_jkjc9j/"
        image={"dortmund-u_jkjc9j_c_scale,w_1400.jpg"}
        imageSet={[
          "dortmund-u_r6ij9f_c_scale,w_200.jpg 200w.jpg",
          "dortmund-u_r6ij9f_c_scale,w_484.jpg 484w.jpg",
          "dortmund-u_r6ij9f_c_scale,w_683.jpg 683w.jpg",
          "dortmund-u_r6ij9f_c_scale,w_855.jpg 855w.jpg",
          "dortmund-u_r6ij9f_c_scale,w_997.jpg 997w.jpg",
          "dortmund-u_r6ij9f_c_scale,w_1121.jpg 1121w.jpg",
          "dortmund-u_r6ij9f_c_scale,w_1259.jpg 1259w.jpg",
          "dortmund-u_r6ij9f_c_scale,w_1383.jpg 1383w.jpg",
          "dortmund-u_r6ij9f_c_scale,w_1400.jpg 1400w.jpg",
        ]}
        sizes="(max-width: 1400px) 100vw, 1400px"
        alt="Dortmunder U"
      >
        <Typography variant="h3" align="center">
          Hallo, ich bin Jannik
        </Typography>
        <Spacer height="0.4em" />
        <Typography align="center" italic>
          ein leidenschaftlicher Softwareentwickler und Designer aus Dortmund
          und spezialisiert auf Frontend und Backend Lösungen aller Art
        </Typography>
        <Spacer height="8px" />
        <div
          style={{
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
      </HeaderWithImage>

      <Footer />
    </>
  );
};

export default Index;
