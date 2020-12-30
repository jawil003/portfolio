import Head from "next/head";
import React from "react";
import AtHomeDesign from "../components/designs/atHome.design";
import Spacer from "../components/elements/generic/Spacer";
import Typography from "../components/elements/generic/Typography";
import HeaderWithIcon from "../components/layout/HeaderWithIcon";
import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";

interface Props {}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>
          Jannik Will | Impressum
        </title>
      </Head>

      <NavigationBar />
      <HeaderWithIcon
        first
        latest
        icon={
          <AtHomeDesign width="100%" />
        }
      >
        <Typography
          variant="h3"
          align="center"
        >
          Impressum
        </Typography>
        <Spacer height="10px" />
        <Typography align="center">
          Jannik Will <br />{" "}
          Ostkirchstraße 23 <br />
          44269 Dortmund <br />{" "}
          Deutschland
        </Typography>
      </HeaderWithIcon>
      <Footer />
    </>
  );
};

export default Contact;
