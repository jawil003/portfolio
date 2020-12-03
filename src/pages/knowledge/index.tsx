import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import CategoryCard from "../../components/CategoryCard";
import CategoryCardWrapper from "../../components/CategoryCardWrapper";
import CategoryHeader from "../../components/CategoryHeader";
import CategoryWrapper from "../../components/CategoryWrapper";
import FlaskDesign from "../../components/designs/flask.design";
import KnowledgeDesign from "../../components/designs/knowledge.design";
import PrototypeDesign from "../../components/designs/prototype.design";
import SettingsPageDesign from "../../components/designs/settingsPage.design";
import IconButton from "../../components/elements/IconButton";
import Spacer from "../../components/elements/Spacer";
import Typography from "../../components/elements/Typography";
import HeaderWithIcon from "../../components/HeaderWithIcon";
import AndroidIcon from "../../components/icons/android.icon";
import DatabaseIcon from "../../components/icons/database.icon";
import DesktopIcon from "../../components/icons/desktop.icon";
import DisplayAndWebpageIcon from "../../components/icons/displayAndWebpage.icon";
import JavaIcon from "../../components/icons/java.icon";
import NodeIcon from "../../components/icons/nodejs.icon";
import ReactIcon from "../../components/icons/react.icon";
import SmartphoneIcon from "../../components/icons/smartphone.icon";
import TypescriptIcon from "../../components/icons/typescript.icon";
import useTheme from "../../hooks/useTheme.hook";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

interface Props {}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<Props> = () => {
  const {
    palette: {
      color: { primary, secondaryText },
    },
  } = useTheme();

  const paragraphs = Array.of(
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  );

  return (
    <>
      <Head>
        <title>Jannik Will | Kenntnisse</title>
      </Head>

      <header>
        <NavigationBar />
        <HeaderWithIcon
          style={{ scrollSnapAlign: "center" }}
          icon={<KnowledgeDesign width="100%" />}
        >
          <Typography variant="h3" align="center">
            Wie kann ich dir helfen?
          </Typography>
          <Spacer height="0.4em" />
          <Typography align="center" italic>
            Vielleicht sagt dir ja eines meiner Fachgebiete zu, dann{" "}
            <Typography underline inline>
              <Link href="/contact">
                <a>kontaktiere</a>
              </Link>
            </Typography>{" "}
            mich gerne
          </Typography>
          <Spacer height="35px" />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <IconButton
              onClick={() =>
                paragraphs[1].current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <DatabaseIcon height="50%" />
            </IconButton>

            <IconButton
              onClick={() =>
                paragraphs[2].current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              color="var(--yellow)"
            >
              <DisplayAndWebpageIcon height="60%" />
            </IconButton>

            <IconButton
              onClick={() =>
                paragraphs[3].current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              color="var(--red)"
            >
              <SmartphoneIcon height="50%" />
            </IconButton>

            <IconButton
              onClick={() =>
                paragraphs[4].current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              color="var(--green)"
            >
              <DesktopIcon height="50%" />
            </IconButton>
          </div>
        </HeaderWithIcon>
      </header>

      <main
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "100%",
          gridTemplateRows: "100%",
          backgroundColor: primary,
          color: secondaryText,
        }}
      >
        <CategoryWrapper ref={paragraphs[0]}>
          <CategoryHeader
            title="Prinzipien"
            description="Die Designprinzipien an denen sich mein Code orientiert"
          />
          <CategoryCardWrapper>
            <CategoryCard
              icon={<FlaskDesign height="100%" />}
              title="Test Driven Development"
              description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
              href="/knowledge/testDrivenDevelopment"
            />
            <CategoryCard
              icon={<SettingsPageDesign height="100%" />}
              title="Kommentierter Code"
              description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
            />
            <CategoryCard
              icon={<PrototypeDesign height="100%" />}
              title="Prototyping"
              description="Die Entwicklung von Software auf Basis von Modellen"
            />
          </CategoryCardWrapper>
        </CategoryWrapper>

        <CategoryWrapper ref={paragraphs[1]}>
          <CategoryHeader
            title="Serversysteme"
            description="Meine Kenntnisse im Bereich der Serverentwicklung"
          />
          <CategoryCardWrapper>
            <CategoryCard
              icon={<NodeIcon width="100%" />}
              title="Node"
              description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
            />
            <CategoryCard
              icon={<JavaIcon width="100%" />}
              title="Java"
              description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
            />
          </CategoryCardWrapper>
        </CategoryWrapper>

        <CategoryWrapper ref={paragraphs[2]}>
          <CategoryHeader
            title="Webentwicklungskenntnisse"
            description="Meine Kenntnisse im Bereich der der Webentwicklung"
          />
          <CategoryCardWrapper>
            <CategoryCard
              icon={<TypescriptIcon width="84px" height="84px" />}
              title="Typescript"
              description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
            />
            <CategoryCard
              icon={<ReactIcon width="84px" height="84px" />}
              title="React"
              description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
            />
          </CategoryCardWrapper>
        </CategoryWrapper>

        <CategoryWrapper ref={paragraphs[3]}>
          <CategoryHeader
            title="Kenntnisse der mobilen Anwendungsenwicklung"
            description="Meine Kenntnisse im Bereich der der Mobile App Entwicklung"
          />
          <CategoryCardWrapper>
            <CategoryCard
              icon={<AndroidIcon width="84px" height="84px" />}
              title="Android JDK"
              description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
            />
            <CategoryCard
              icon={<ReactIcon width="84px" height="84px" />}
              title="React Native"
              description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
            />
          </CategoryCardWrapper>
        </CategoryWrapper>

        <CategoryWrapper ref={paragraphs[4]} latest>
          <CategoryHeader
            title="Desktopanwendungsentwicklung"
            description="Meine Kenntnisse im Bereich der Desktop Entwicklung für PC und Mac"
          />
          <CategoryCardWrapper>
            <CategoryCard
              icon={<FlaskDesign height="100%" />}
              title="Electron"
              description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
            />
          </CategoryCardWrapper>
        </CategoryWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
