import Head from "next/head";
import React, { useRef } from "react";
import Spacer from "../components/elements/Spacer";
import Typography from "../components/elements/Typography";
import MyExperiencesHeader from "../components/MyExperiencesHeader";
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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: primary,
        color: secondaryText,
      }}
    >
      <Head>
        <title>Jannik Will | Erfahrungen</title>
      </Head>
      <MyExperiencesHeader ref={_paragraphs[0]}>
        <Typography variant="h3" align="center">
          Was habe ich bereits gelernt?
        </Typography>
        <Spacer height="0.4em" />
        <Typography align="center">
          Das Leben besteht aus kontinuierlichen Lernen. Warum stehen bleiben
          wenn Weiterentwicklung möglich ist
        </Typography>
      </MyExperiencesHeader>
    </div>
  );
};

export default Contact;
