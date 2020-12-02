import Head from "next/head";
import React from "react";
import AtHomeDesign from "../components/designs/atHome.design";
import Spacer from "../components/elements/Spacer";
import Typography from "../components/elements/Typography";
import useTheme from "../hooks/useTheme.hook";
import { motion } from "framer-motion";
import flyFromTop from "../variants/flyFromTop";
import flyFromRight from "../variants/flyFromRight";
import HeaderWithIcon from "../components/HeaderWithIcon";

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
    <>
      <Head>
        <title>Jannik Will | Impressum</title>
      </Head>
      <HeaderWithIcon latest icon={<AtHomeDesign width="100%" />}>
        <Typography variant="h3" align="center">
          Impressum
        </Typography>
        <Spacer height="10px" />
        <Typography align="center">
          Jannik Will <br /> Ostkirchstraße 23 <br />
          44269 Dortmund <br /> Deutschland
        </Typography>
      </HeaderWithIcon>
    </>
  );
};

export default Contact;
