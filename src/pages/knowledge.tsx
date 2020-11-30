import Head from "next/head";
import React from "react";
import Spacer from "../components/elements/Spacer";
import Footer from "../components/Footer";
import HowCanIHelpYouHeader from "../components/HowCanIHelpYouHeader";
import NavigationBar from "../components/NavigationBar";
import SkillCategories from "../components/SkillCategories";
import useTheme from "../hooks/useTheme.hook";

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
        minHeight: "100%",
        display: "grid",
        backgroundColor: primary,
        color: secondaryText,
      }}
    >
      <Head>
        <title>Jannik Will | Kenntnisse</title>
      </Head>
      <HowCanIHelpYouHeader />
      <Spacer height="100px" />
      <SkillCategories />
    </main>
  );
};

export default Contact;
