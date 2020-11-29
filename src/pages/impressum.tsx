import Head from "next/head";
import React from "react";
import AtHomeDesign from "../components/designs/atHome.design";
import Spacer from "../components/elements/Spacer";
import Typography from "../components/elements/Typography";
import useTheme from "../hooks/useTheme.hook";
import { motion } from "framer-motion";
import flyFromTop from "../variants/flyFromTop";
import flyFromRight from "../variants/flyFromRight";

interface Props {}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<Props> = () => {
  const {
    palette: {
      color: { primary, secondary, secondaryText },
    },
  } = useTheme();
  return (
    <div
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "50% 50%",
        backgroundColor: primary,
        color: secondaryText,
      }}
    >
      <Head>
        <title>Jannik Will | Impressum</title>
      </Head>
      <motion.div
        variants={flyFromTop}
        initial="initial"
        animate="animate"
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" align="center">
          Impressum
        </Typography>
        <Spacer height="10px" />
        <Typography align="center">
          Jannik Will <br /> Ostkirchstraße 23 <br />
          44269 Dortmund <br /> Deutschland
        </Typography>
      </motion.div>
      <motion.div
        variants={flyFromRight}
        initial="initial"
        animate="animate"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <AtHomeDesign width="100%" />
      </motion.div>
    </div>
  );
};

export default Contact;
