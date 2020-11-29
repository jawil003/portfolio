import Head from "next/head";
import React from "react";
import ContactMeDesign from "../components/designs/contactMe.design";
import Button from "../components/elements/Button";
import Spacer from "../components/elements/Spacer";
import TextField from "../components/elements/TextField";
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
    <main
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gridTemplateRows: "100%",
        backgroundColor: primary,
        color: secondaryText,
      }}
    >
      <Head>
        <title>Jannik Will | Kontakt</title>
      </Head>
      <motion.div
        variants={flyFromTop}
        initial="initial"
        animate="animate"
        style={{
          display: "grid",
          gridTemplateColumns: "450px",
          justifyContent: "center",
          alignContent: "center",
          padding: "0px 20px",
        }}
      >
        <TextField title="Name" placeholder="Maxine Musterfrau" />
        <Spacer height="20px" />
        <TextField title="Email Adresse" placeholder="maxine@musterfrau.de" />
        <Spacer height="20px" />
        <TextField title="Betreff" placeholder="Musterbetreff" />
        <Spacer height="20px" />
        <TextField
          title="Nachricht"
          placeholder="Bitte Nachricht eingeben"
          area
          rows={4}
        />
        <Spacer height="25px" />
        <Button>Absenden</Button>
      </motion.div>
      <motion.div
        variants={flyFromRight}
        initial="initial"
        animate="animate"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContactMeDesign color={secondary} />
      </motion.div>
    </main>
  );
};

export default Contact;