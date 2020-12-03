import Head from "next/head";
import React, { useRef } from "react";
import DesigningDesign from "../components/designs/designing.design";
import KnowledgeDesign from "../components/designs/knowledge.design";
import Spacer from "../components/elements/Spacer";
import Typography from "../components/elements/Typography";
import Footer from "../components/Footer";
import HeaderWithIcon from "../components/HeaderWithIcon";
import MyExperiencesHeader from "../components/MyExperiencesHeader";
import NavigationBar from "../components/NavigationBar";
import useTheme from "../hooks/useTheme.hook";

interface Props {}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<Props> = () => {
  const _paragraphs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const {
    palette: {
      color: { primary, secondary, secondaryText },
    },
  } = useTheme();
  return (
    <>
      <Head>
        <title>Jannik Will | Erfahrungen</title>
      </Head>
      <header style={{ flex: 1 }}>
        <NavigationBar />
        <HeaderWithIcon
          icon={<DesigningDesign width="100%" />}
          latest
          ref={_paragraphs[0]}
        >
          <Typography variant="h3" align="center">
            Was habe ich bereits gelernt?
          </Typography>
          <Spacer height="0.4em" />
          <Typography align="center" italic>
            Das Leben besteht aus kontinuierlichen Lernen. Warum stehen bleiben
            wenn Weiterentwicklung möglich ist
          </Typography>
        </HeaderWithIcon>
      </header>
      <Footer />
    </>
  );
};

export default Contact;
