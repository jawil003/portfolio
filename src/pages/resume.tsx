import Head from "next/head";
import React, { useRef } from "react";
import DesigningDesign from "../components/designs/designing.design";
import Spacer from "../components/elements/generic/Spacer";
import Typography from "../components/elements/generic/Typography";
import Footer from "../components/layout/Footer";
import HeaderWithIcon from "../components/layout/HeaderWithIcon";
import NavigationBar from "../components/layout/NavigationBar";
import useTheme from "../hooks/useTheme.hook";
import SectionWithIcon from "../components/layout/SectionWithIcon";
import SnapScrollParagraph from "../components/elements/generic/SnapScrollParagraph";
import TimelineSection from "../components/elements/custom/TimelineSection";

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
      <SnapScrollParagraph>
        <NavigationBar />
      </SnapScrollParagraph>
      <HeaderWithIcon
        first
        icon={<DesigningDesign width="100%" />}
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
      <main style={{ flex: 1 }}>
        <SnapScrollParagraph>
          <TimelineSection latest />
        </SnapScrollParagraph>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
