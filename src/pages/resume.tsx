import Head from "next/head";
import React, { useRef } from "react";
import DesigningDesign from "../components/designs/designing.design";
import Spacer from "../components/elements/generic/Spacer";
import Typography from "../components/elements/generic/Typography";
import Footer from "../components/layout/Footer";
import HeaderWithIcon from "../components/layout/HeaderWithIcon";
import NavigationBar from "../components/layout/NavigationBar";
import ColorContainer from "src/components/elements/generic/ColorContainer";
import ResumeContainer from "src/components/elements/custom/ResumeContainer";
import { GetServerSideProps } from "next";
import ResumeService from "src/services/resume.service";
import ResumeItemType from "src/model/ResumeItem.model";
import ResumeItem from "src/components/elements/custom/ResumeItem";

interface Props {}

interface ServerSideProps {
  resumeItems: ResumeItemType[];
}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<Props & ServerSideProps> = ({ resumeItems }) => {
  const _paragraphs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  return (
    <>
      <Head>
        <title>Jannik Will | Erfahrungen</title>
      </Head>

      <NavigationBar />

      <HeaderWithIcon
        latest
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
      <ColorContainer color="var(--secondary)">
        <main
          style={{
            flex: 1,

            position: "relative",
            left: "-20px",
            width: "calc(100% + 40px)",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "#ffffff",
                width: "282%",
                height: "137px",
                transform: "scaleX(-1)",
              }}
            >
              <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
            </svg>
          </div>
          <ResumeContainer>
            {resumeItems.map(({ title, description, start_year, end_year }) => (
              <ResumeItem
                latest
                start_year={start_year}
                end_year={end_year}
                title={title}
                description={description}
              />
            ))}
          </ResumeContainer>
        </main>
        <Footer color="var(--primary)" />
      </ColorContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { resumeItems: await ResumeService.getAllResumeItems() } };
};

export default Contact;
