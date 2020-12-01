import Head from "next/head";
import React, { useEffect } from "react";
import Typography from "../components/elements/Typography";
import TwitterIcon from "../components/icons/twitter.icon";
import Spacer from "../components/elements/Spacer";
import LinkedInIcon from "../components/icons/linkedin.icon";
import GithubIcon from "../components/icons/github.icon";
import IconLink from "../components/elements/IconLink";
import { motion, useSpring, useTransform } from "framer-motion";
import flyFromTop from "../variants/flyFromTop";
import DribbleIcon from "../components/icons/dribble.icon";

interface Props {}

/**
 * An Index React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Index: React.FC<Props> = () => {
  const x = useSpring(200);
  const opacity = useTransform(x, [200, 0], [0, 1]);
  const handleImageLoaded = () => x.set(0);
  useEffect(() => {
    handleImageLoaded();
  }, []);
  return (
    <main
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gridTemplateRows: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>Jannik Will | Startseite</title>
      </Head>

      <motion.div
        variants={flyFromTop}
        initial="initial"
        animate="animate"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "stretch",
          flexDirection: "column",
          padding: "105px",
        }}
      >
        <Typography variant="h3" align="center">
          Hallo, ich bin Jannik
        </Typography>
        <Spacer height="0.4em" />
        <Typography align="center" italic>
          ein leidenschaftlicher Softwareentwickler und Designer aus Dortmund
          und spezialisiert auf Frontend und Backend Lösungen aller Art
        </Typography>
        <Spacer height="35px" />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <IconLink external href="https://twitter.com/willey3x37">
            <TwitterIcon height="100%" />
          </IconLink>
          <IconLink external href="https://linkedin.com/willey3x37">
            <LinkedInIcon height="100%" />
          </IconLink>

          <IconLink external href="https://github.com/jawil003">
            <GithubIcon height="100%" />
          </IconLink>

          <IconLink external href="https://dribbble.com/willey3x37">
            <DribbleIcon height="100%" />
          </IconLink>
        </div>
      </motion.div>
      <motion.div
        transition={{ delay: 5, type: "spring" }}
        style={{
          x,
          opacity,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          onLoad={handleImageLoaded}
          src="/img/dortmund-u.jpg"
          width="100%"
        />
      </motion.div>
    </main>
  );
};

export default Index;
